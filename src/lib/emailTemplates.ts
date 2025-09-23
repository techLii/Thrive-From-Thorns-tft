import fs from "node:fs/promises";
import path from "node:path";

export type EmailRow = { label: string; value: string };
export type EmailParagraph = { label?: string; text: string };

export type BrandedEmailOptions = {
  title: string;
  preheader?: string;
  rows?: EmailRow[];
  paragraphs?: EmailParagraph[];
};

export type BuiltEmail = {
  html: string;
  text: string;
  attachments: Array<{
    filename: string;
    content: Buffer;
    contentType?: string;
    cid?: string;
  }>;
};

const BRAND = {
  primary: "#006172", // CSAG primary blue
  accent: "#0EA5E9", // Tailwind sky-500-ish for subtle accents
  text: "#0b1220",
  mutedText: "#475569",
  border: "#e5e7eb",
  bg: "#f4f4f5",
  cardBg: "#ffffff",
};

async function getLogoAttachment() {
  try {
    const logoPath = path.join(
      process.cwd(),
      "public",
      "images",
      "csag-icon-logo-no-bg.png"
    );
    const buf = await fs.readFile(logoPath);
    return {
      filename: "csag-logo.png",
      content: buf,
      contentType: "image/png",
      cid: "csag-logo", // referenced in <img src="cid:csag-logo"/>
    } as const;
  } catch {
    return undefined;
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildText(rows: EmailRow[], paragraphs: EmailParagraph[]): string {
  const lines: string[] = [];
  for (const r of rows) {
    lines.push(`${r.label}: ${r.value}`);
  }
  if (rows.length && paragraphs.length) lines.push("");
  for (const p of paragraphs) {
    if (p.label) lines.push(`${p.label}:`);
    lines.push(p.text);
    lines.push("");
  }
  return lines.join("\n").trimEnd();
}

export async function buildBrandedEmail(
  opts: BrandedEmailOptions
): Promise<BuiltEmail> {
  const rows = opts.rows ?? [];
  const paragraphs = opts.paragraphs ?? [];
  const logo = await getLogoAttachment();

  const preheader = escapeHtml(opts.preheader || "");

  const htmlRows = rows
    .map(
      (r) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid ${
            BRAND.border
          };width:35%;color:${
        BRAND.mutedText
      };font:500 14px/20px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;">${escapeHtml(
        r.label
      )}</td>
          <td style="padding:8px 12px;border:1px solid ${BRAND.border};color:${
        BRAND.text
      };font:500 14px/20px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;">${escapeHtml(
        r.value
      )}</td>
        </tr>`
    )
    .join("");

  const htmlParagraphs = paragraphs
    .map((p) => {
      const labelHtml = p.label
        ? `<div style="margin:0 0 6px 0;color:${
            BRAND.mutedText
          };font:600 13px/18px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;">${escapeHtml(
            p.label
          )}</div>`
        : "";
      return `<div style="margin:14px 0 0 0;color:${
        BRAND.text
      };font:500 14px/22px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;white-space:pre-wrap;">${labelHtml}${escapeHtml(
        p.text
      )}</div>`;
    })
    .join("");

  const logoBlock = logo
    ? `<img src="cid:csag-logo" width="48" height="48" alt="Child Survival Aid Ghana logo" style="display:block;border:0;outline:none;width:48px;height:48px;object-fit:cover;vertical-align:middle;" />`
    : "";

  const html = `<!doctype html>
  <html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(opts.title)}</title>
    <style>
      @media (prefers-color-scheme: dark) {
        /* Basic dark mode adjustments */
        body { background: #0b1220 !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.bg};">
    <span style="display:none!important;visibility:hidden;opacity:0;height:0;width:0;color:transparent;">${preheader}</span>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${
      BRAND.bg
    };padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:${
            BRAND.cardBg
          };border:1px solid ${
    BRAND.border
  };border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:16px 24px 16px 28px;border-bottom:1px solid ${
                BRAND.border
              };">
                <div>
                  <span style="display:inline-block;vertical-align:middle;">${logoBlock}</span>
                  <span style="display:inline-block;vertical-align:middle;margin-left:10px;font:700 16px/20px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;color:${
                    BRAND.primary
                  }">Child Survival Aid Ghana</span>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 22px;">
                <div style="font:700 18px/26px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;color:${
                  BRAND.text
                };margin-bottom:8px;">${escapeHtml(opts.title)}</div>
                <div style="font:500 13px/20px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;color:${
                  BRAND.mutedText
                };margin-bottom:16px;">This email was automatically generated from your website.</div>

                ${
                  rows.length
                    ? `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid ${BRAND.border};border-radius:8px;overflow:hidden;margin:8px 0 16px 0;">${htmlRows}</table>`
                    : ""
                }

                ${htmlParagraphs}

                <div style="margin-top:20px;padding-top:14px;border-top:1px dashed ${
                  BRAND.border
                };color:${
    BRAND.mutedText
  };font:500 12px/18px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;">
                  If you were not expecting this email, you can ignore it.
                </div>
              </td>
            </tr>

            <tr>
              <td style="background:${
                BRAND.bg
              };padding:14px 22px;border-top:1px solid ${BRAND.border};">
                <div style="text-align:center;color:${
                  BRAND.mutedText
                };font:600 12px/18px ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;">© ${new Date().getFullYear()} Child Survival Aid Ghana</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;

  const text = buildText(rows, paragraphs);

  return {
    html,
    text,
    attachments: logo ? [logo] : [],
  };
}
