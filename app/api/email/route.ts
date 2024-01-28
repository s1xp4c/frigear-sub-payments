"use client";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/templates/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.KONTAKT_EMAIL;

// interface EmailProps {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

type DataResponse = { data: string };

export async function POST(req: Request) {
  const { email, subject, message, name } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `Frigear, <{${fromEmail}}>` as any as string,
      to: { fromEmail, email } as any as string,
      subject: { subject } as any as string,
      react: EmailTemplate({
        name,
        email,
        subject,
        message,
      }) as React.ReactElement,
    });
    if (error) {
      return Response.json({ error }) as any;
    }

    return Response.json({ data }) as any;
  } catch (error) {
    return Response.json({ error }) as any;
  }
}
