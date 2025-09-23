import nodemailer from "nodemailer";

type MailerConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

function getConfig(): MailerConfig {
  const host = process.env.SMTP_HOST || "";
  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    String(process.env.SMTP_SECURE || "false").toLowerCase() === "true" ||
    port === 465;
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const from = process.env.MAIL_FROM || user || "";
  const to = process.env.MAIL_TO || "";

  if (!host || !user || !pass || !from || !to) {
    throw new Error(
      "Missing email configuration. Ensure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, and MAIL_TO are set."
    );
  }

  return { host, port, secure, user, pass, from, to };
}

export function createTransporter() {
  const cfg = getConfig();
  return nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: {
      user: cfg.user,
      pass: cfg.pass,
    },
  });
}

export type SendMailInput = {
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType?: string;
    cid?: string;
  }>;
};

export async function sendMail(input: SendMailInput) {
  const cfg = getConfig();
  const transporter = createTransporter();

  await transporter.sendMail({
    from: cfg.from,
    to: cfg.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
    replyTo: input.replyTo,
    attachments: input.attachments,
  });
}
