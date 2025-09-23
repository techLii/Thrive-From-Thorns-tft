import { buildBrandedEmail } from "@/lib/emailTemplates";
import { sendMail } from "@/lib/mailer";
import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/request";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // Rate limit by IP: 5/hour
    const ip = getClientIp(req);
    const rl = rateLimit(`newsletter:${ip}`, 5, 60 * 60 * 1000);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await req.json();
    const email = String(data.email || "").trim();
    // Basic server-side validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email) || email.length > 254) {
      return NextResponse.json(
        { ok: false, error: "A valid email is required." },
        { status: 400 }
      );
    }

    const subject = `Newsletter signup: ${email}`;
    const built = await buildBrandedEmail({
      title: "New Newsletter Subscription",
      preheader: `Newsletter signup: ${email}`,
      rows: [{ label: "Email", value: email }],
      paragraphs: [],
    });

    await sendMail({
      subject,
      text: built.text,
      html: built.html,
      replyTo: email,
      attachments: built.attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: "Bad Request" },
      { status: 400 }
    );
  }
}
