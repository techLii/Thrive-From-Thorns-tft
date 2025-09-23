import { buildBrandedEmail } from "@/lib/emailTemplates";
import { sendMail } from "@/lib/mailer";
import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/request";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // Rate limit by IP: 2/hour
    const ip = getClientIp(req);
    const rl = rateLimit(`volunteer:${ip}`, 2, 60 * 60 * 1000);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const form = await req.formData();
    // Extract fields
    const firstName = String(form.get("firstName") || "");
    const lastName = String(form.get("lastName") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const emergencyContact = String(form.get("emergencyContact") || "");
    const availability = String(form.get("availability") || "");
    const commitment = String(form.get("commitment") || "");
    const priorExperience = String(form.get("priorExperience") || "");
    const about = String(form.get("about") || "");
    const resume = form.get("resume");

    const interests: string[] = [];
    // FormData.getAll works in edge/runtime
    for (const v of form.getAll("interests")) {
      interests.push(String(v));
    }

    // Server-side validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!firstName || !lastName) {
      return NextResponse.json(
        { ok: false, error: "First and last name are required." },
        { status: 400 }
      );
    }
    if (!email || !emailRe.test(email) || email.length > 254) {
      return NextResponse.json(
        { ok: false, error: "A valid email is required." },
        { status: 400 }
      );
    }
    if (!phone || phone.length > 40) {
      return NextResponse.json(
        {
          ok: false,
          error: "Phone is required and must be reasonable in length.",
        },
        { status: 400 }
      );
    }
    if (emergencyContact.length > 200) {
      return NextResponse.json(
        { ok: false, error: "Emergency contact is too long." },
        { status: 400 }
      );
    }
    if (availability.length > 200 || commitment.length > 200) {
      return NextResponse.json(
        { ok: false, error: "Availability/Commitment fields are too long." },
        { status: 400 }
      );
    }
    if (priorExperience && !["Yes", "No"].includes(priorExperience)) {
      return NextResponse.json(
        { ok: false, error: "Invalid prior experience value." },
        { status: 400 }
      );
    }
    if (about.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "About is too long (max 5000)." },
        { status: 400 }
      );
    }

    // Build email content
    const subject = `New Volunteer Submission: ${firstName} ${lastName}`;
    const built = await buildBrandedEmail({
      title: "New Volunteer Submission",
      preheader: `Volunteer: ${firstName} ${lastName}`,
      rows: [
        { label: "Name", value: `${firstName} ${lastName}`.trim() },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Emergency Contact", value: emergencyContact || "—" },
        { label: "Availability", value: availability || "—" },
        { label: "Commitment", value: commitment || "—" },
        { label: "Prior Experience", value: priorExperience || "—" },
        { label: "Interests", value: interests.join(", ") || "(none)" },
      ],
      paragraphs: about ? [{ label: "About", text: about }] : [],
    });

    // Attach resume if provided
    const attachments = [] as {
      filename: string;
      content: Buffer;
      contentType?: string;
    }[];
    if (resume && typeof resume === "object" && "arrayBuffer" in resume) {
      const file = resume as unknown as File;
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const size = (file as File & { size?: number }).size ?? 0;
      if (size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { ok: false, error: "Resume file too large (max 10MB)." },
          { status: 400 }
        );
      }
      if (file.type && !allowed.includes(file.type)) {
        return NextResponse.json(
          { ok: false, error: "Unsupported resume file type." },
          { status: 400 }
        );
      }
      const buf = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name || "resume",
        content: buf,
        contentType: file.type || undefined,
      });
    }

    await sendMail({
      subject,
      text: built.text,
      html: built.html,
      replyTo: email || undefined,
      attachments: [...built.attachments, ...attachments],
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
