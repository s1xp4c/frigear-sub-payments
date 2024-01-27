import { getSession } from "@/app/supabase-server";
import AuthUI from "./AuthUI";
import { Turnstile } from "@marsidev/react-turnstile";
import { redirect } from "next/navigation";
import Logo from "@/components/icons/Logo";
import { useState } from "react";

export default async function SignIn() {
  const session = await getSession();
  const [captchaToken, setCaptchaToken] = useState<string>();
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY;

  if (session) {
    return redirect("/account");
  }

  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 ">
          <Logo />
        </div>
        <AuthUI />
        <Turnstile
          siteKey={turnstileSiteKey as string}
          onSuccess={(token) => {
            setCaptchaToken(token);
          }}
        />
      </div>
    </div>
  );
}
