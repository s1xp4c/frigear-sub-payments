"use client";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.KONTAKT_EMAIL;

export async function POST(request: Request) {
  try {
    const text = await request.text();
    // Process the webhook payload
  } catch (error: unknown) {
    return new Response(`Webhook error: ${error}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
