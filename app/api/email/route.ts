"use client";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

export const runtime = "edge";
export const dynamic = "force-dynamic";

// const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.KONTAKT_EMAIL || "";
// const testEmail = process.env.TEST_EMAIL as string;

const sendRouteSchema = z.object({
  name: z.string().min(3),
  emailAddress: z.string().email(),
  phoneNumber: z.number().min(8),
  subject: z.string().min(2),
  content: z.string().min(2),
});

export async function POST(req: NextRequest) {
  const { name, emailAddress, phoneNumber, subject, content } = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

  const data = await resend.emails.send({
    from: `Mail Fra ${name}: <${emailAddress}>`,
    to: contactEmail,
    subject: subject,
    reply_to: emailAddress,
    react: ContactEmail({ name, emailAddress, subject, phoneNumber, content }),
  } as React.ReactElement | string | number | any);

  return NextResponse.json({ data, error: null }, { status: 200 });
}
