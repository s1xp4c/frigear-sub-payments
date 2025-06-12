"use client";

import Link from "next/link";
import { SignOut } from "@/utils/auth-helpers/server";
import { handleRequest } from "@/utils/auth-helpers/client";
import Logo from "@/components/icons/Logo";
import { usePathname, useRouter } from "next/navigation";
import { getRedirectMethod } from "@/utils/auth-helpers/settings";
import s from "./Navbar.module.css";

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  // const router = getRedirectMethod() === 'client' ? useRouter() : null;
  const router = useRouter();
  const pathname = usePathname();

  // Perform conditional checks or actions here, using the `router` and `pathname` as needed.
  const isClientSideRouting = getRedirectMethod() === "client";

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>
        <nav className="ml-6 space-x-2 lg:block">
          <Link href="/pricing" className={s.link}>
            PRISER
          </Link>
          {user && (
            <Link href="/account" className={s.link}>
              KONTO
            </Link>
          )}
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form
            onSubmit={(e) =>
              handleRequest(e, SignOut, isClientSideRouting ? router : null)
            }
          >
            <input type="hidden" name="pathName" value={pathname} />
            <button type="submit" className={s.link}>
              LOG UD
            </button>
          </form>
        ) : (
          <Link href="/signin" className={s.link}>
            LOG IND
          </Link>
        )}
      </div>
    </div>
  );
}
