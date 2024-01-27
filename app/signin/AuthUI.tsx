"use client";

import { useSupabase } from "@/app/supabase-provider";
import { getURL } from "@/utils/helpers";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

export default function AuthUI() {
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY;
  const { supabase } = useSupabase();
  const [captchaToken, setCaptchaToken] = useState<string>();

  return (
    <div className="flex flex-col space-y-4">
      <Auth
        supabaseClient={supabase}
        providers={["github", "google"]}
        redirectTo={`${getURL()}/auth/callback`}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#4338ca",
                brandAccent: "#52525b",
              },
            },
          },
        }}
        theme="dark"
      />
      <Turnstile
        siteKey={turnstileSiteKey as string}
        onSuccess={(token) => {
          setCaptchaToken(token);
        }}
      />
    </div>
  );
}
