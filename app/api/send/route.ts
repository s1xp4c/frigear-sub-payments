"use client";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.KONTAKT_EMAIL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;
    console.log(email, subject, message);

    try {
      const data = await resend.emails.send({
        from: fromEmail as string,
        to: email as string,
        subject: subject as string,
        text: `Tak for din mail!\nDin sendte besked:\n${message}`,
      });

      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error sending email" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
