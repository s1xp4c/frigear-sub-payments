"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "@/types_db";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { AnimateSphereSpinner } from "@/components/AnimateSphereSpinner/";
// import ManageSubscriptionButton from "./ManageSubscriptionButton";
// import {
//     getSession,
//   getSubscription,
// } from "@/app/supabase-server";
import Button from "@/components/ui/Button";
// import Link from "next/link";
import { redirect } from "next/navigation";
// import { ReactNode } from "react";
import { toast } from "react-toastify";
// import { Session } from "inspector";

// interface Props {
//   title: string;
//   description?: string;
//   footer?: ReactNode;
//   children: ReactNode;
// }

// function Card({ title, description, footer, children }: Props) {
//   return (
//     <div className="w-full max-w-3xl m-auto my-8 border rounded-md p border-zinc-700">
//       <div className="px-5 py-4">
//         <h3 className="mb-1 text-2xl font-medium">{title}</h3>
//         <p className="text-zinc-300">{description}</p>
//         {children}
//       </div>
//       <div className="p-4 border-t rounded-b-md border-zinc-700 bg-zinc-900 text-zinc-500">
//         {footer}
//       </div>
//     </div>
//   );
// }

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const [subscription_type, setSubscriptionType] = useState<string | null>(
    null
  );

  if (!user) {
    return redirect("/signin");
  }
  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("users")
        .select(`full_name, username, phone, avatar_url, subscription_type`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setPhone(data.phone);
        setAvatarUrl(data.avatar_url);
        setSubscriptionType(data.subscription_type);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
    // getSubscription();
  }, [user, [getProfile]]);

  async function updateProfile({
    username,
    phone,
    avatar_url,
    subscription_type,
  }: {
    username: string | null;
    fullname: string | null;
    phone: string | null;
    avatar_url: string | null;
    subscription_type: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("users").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        phone,
        avatar_url,
        subscription_type,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;
      toast.success("Profil opdateret!");
    } catch (error) {
      toast.error(
        "Der skete en fejl med upload af data! \n - Kontakt support eller prøv igen senere"
      );
    } finally {
      setLoading(false);
    }
  }
  //   const subscription = ([
  //     getSubscription(),
  //   ]);
  //   const session = ([
  //     getSession(),
  //   ]);

  //   const subscriptionPrice =
  //   subscription &&
  //   new Intl.NumberFormat("da-DK", {
  //     style: "currency",
  //     currency: prices?.Row?.currency!,
  //     minimumFractionDigits: 0,
  //   }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <div className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Konto
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Hei {username ?? "dig"} 🐼 ret kontoindstillinger her ✅
          </p>
        </div>
      </div>
      {/* <div className="p-4">

        <Card
          title="Medlemskab"
          description={
            subscription
              ? `Du er tilknyttet: \n ${subscription?.prices?.products?.name}.`
              : "Du har ikke valgt et medlemskab af Frigear endnu."
          }
          footer={<ManageSubscriptionButton session={session} />}
        >
          <div className="mt-8 mb-4 text-xl font-semibold">
            {subscription ? (
              `${subscriptionPrice}/${subscription?.prices?.interval}`
            ) : (
              <Button variant="slim" disabled={false}>
                <Link href="/pricing">MEDLEMSKABER</Link>
              </Button>
            )}
          </div>
        </Card>
      </div> */}
      <div className="form-widget">
        <div>
          <label htmlFor="email">EMAIL</label>
          <input id="email" type="text" value={user?.email} disabled />
        </div>
        <div>
          <label htmlFor="fullName">FULDT NAVN</label>
          <input
            id="fullName"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">KALDENAVN</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">FON</label>
          <input
            id="phone"
            type="text"
            value={phone || ""}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subscription_type">MEDLEMSKAB</label>
          <input
            id="subscription_type"
            type="text"
            value={subscription_type || ""}
            onChange={(e) => setSubscriptionType(e.target.value)}
          />
        </div>

        <div>
          <Button
            className="button primary block"
            onClick={() =>
              updateProfile({
                fullname,
                username,
                phone,
                avatar_url,
                subscription_type,
              })
            }
            disabled={loading}
          >
            {loading ? <AnimateSphereSpinner /> : "OPDATÉR DATA"}
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
}
