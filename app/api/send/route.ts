"use server";
import { Resend } from "resend";
import ContactEmail from "@/app/api/send/emails/ContactEmail";
import * as z from "zod";
import * as React from "react";

import { NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.KONTAKT_EMAIL || "";

const sendRouteSchema = z.object({
  name: z.string().min(3),
  emailAddress: z.string().email(),
  phoneNumber: z.string().min(8),
  subject: z.string().min(2),
  content: z.string().min(2),
});

export async function POST(req: Request, res: NextApiResponse) {
  const { name, emailAddress, phoneNumber, subject, content } = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

  const emailHtml = renderToStaticMarkup(
    ContactEmail({
      name: name,
      emailAddress: emailAddress,
      subject: subject,
      phoneNumber: phoneNumber,
      content: content,
    }) as React.ReactElement
  );

  try {
    const data = await resend.emails.send({
      from: `Mail Fra ${name} <${contactEmail}>`,
      to: [contactEmail],
      subject: subject,
      reply_to: emailAddress,
      html: emailHtml as React.ReactElement | string | any,
    });

    console.log(`This: ${data} was sent`);

    return res.json({ data: data, status: 200 });
  } catch (error: unknown | null) {
    console.log(error);
    return res.json({ error } as unknown | null);
  }
}
function renderToStaticMarkup(arg0: any) {
  throw new Error("Function not implemented.");
}
