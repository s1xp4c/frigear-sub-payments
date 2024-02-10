"use client";
import { Resend } from "resend";
import ContactEmail from "@/components/emails/ContactEmail";
import * as z from "zod";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.KONTAKT_EMAIL || "";

const sendRouteSchema = z.object({
  name: z.string().min(3),
  emailAddress: z.string().email(),
  phoneNumber: z.string().min(8),
  subject: z.string().min(2),
  content: z.string().min(2),
});

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, emailAddress, subject, phoneNumber, content } = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

  try {
    const data = await resend.emails.send({
      from: `Mail Fra ${name} <${contactEmail}>`,
      to: [contactEmail],
      subject: subject,
      reply_to: emailAddress,
      react: ContactEmail({
        name,
        emailAddress,
        subject,
        phoneNumber,
        content,
      }) as React.ReactElement | string | any,
    });

    console.log(`This: ${data} was sent`);
    return res.json();
  } catch (error: unknown | null) {
    console.log(error);
    return res.json();
  }
}
