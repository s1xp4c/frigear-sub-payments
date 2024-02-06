"use server";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import * as z from "zod";
import * as React from "react";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";

// const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.KONTAKT_EMAIL || "";
// const testEmail = process.env.TEST_EMAIL as string;

const sendRouteSchema = z.object({
  name: z.string().min(3),
  emailAddress: z.string().email(),
  phoneNumber: z.string().min(8),
  subject: z.string().min(2),
  content: z.string().min(2),
});

export async function POST(req: Request) {
  const { name, emailAddress, phoneNumber, subject, content } = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

  const emailHtml = render(
    ContactEmail({
      name: name,
      emailAddress: emailAddress,
      subject: subject,
      phoneNumber: phoneNumber,
      content: content,
    }) as React.ReactElement | any
  );

  try {
    const data = await resend.emails.send({
      from: `Mail Fra ${name} <${contactEmail}>`,
      to: [contactEmail],
      subject: subject,
      reply_to: emailAddress,
      react: emailHtml,
    });

    console.log(`This: ${data} was sent`);

    return NextResponse.json({ data: data, error: null }, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json({ error } as unknown);
  }
}
