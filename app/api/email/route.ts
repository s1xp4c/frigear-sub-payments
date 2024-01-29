import { NextResponse } from "next/server";
import { Resend } from "resend";

import ContactEmail from "@/components/emails/contact";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.KONTAKT_EMAIL;
export async function POST(request: Request) {
  const { email, subject, message, name } = await request.json();

  try {
    await resend.emails.send({
      from: `${name}, <${email}>` || "",
      to: fromEmail || "",
      subject: subject,
      react: ContactEmail({
        message,
        name,
        email,
        subject,
      }),
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
