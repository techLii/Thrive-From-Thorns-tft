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
    const rl = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await req.json();
    const firstName = String(data.firstName || "").trim();
    const lastName = String(data.lastName || "").trim();
    const email = String(data.email || "").trim();
    const subjectSel = String(data.subject || "").trim();
    const message = String(data.message || "").trim();

    // Validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email) || email.length > 254) {
      return NextResponse.json(
        { ok: false, error: "A valid email is required." },
        { status: 400 }
      );
    }
    if (!message || message.length < 3 || message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Message must be between 3 and 5000 characters." },
        { status: 400 }
      );
    }
    if (firstName.length > 100 || lastName.length > 100) {
      return NextResponse.json(
        { ok: false, error: "Name is too long." },
        { status: 400 }
      );
    }
    if (subjectSel.length > 100) {
      return NextResponse.json(
        { ok: false, error: "Subject is too long." },
        { status: 400 }
      );
    }

    const subject = `Contact Form: ${
      subjectSel || "General"
    } - ${firstName} ${lastName}`.trim();
    const built = await buildBrandedEmail({
      title: "New Contact Form Submission",
      preheader: `Contact form from ${firstName} ${lastName}`,
      rows: [
        { label: "Name", value: `${firstName} ${lastName}`.trim() },
        { label: "Email", value: email },
        { label: "Subject", value: subjectSel || "General" },
      ],
      paragraphs: [{ label: "Message", text: message }],
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
