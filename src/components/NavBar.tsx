import React from "react";
import Image from "next/image";
import { rem, roboto } from "@/libs/fonts";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { auth, signIn, signOut } from "@/auth";
import NavDropdown from "@/components/NavDropdown";

async function NavBar() {
  const session = await auth();
  return (
    <div className=" flex items-center justify-between p-3 shadow-sm sticky w-full top-0 px-8 z-50 bg-transparent backdrop-blur-3xl">
      <Link href="/">
        <div className="logoAndName flex items-center justify-center gap-1">
          <Image src="/logo.png" alt="logo" width="40" height="40" />
          <span className={`text-xl ${rem.className}`}>Justice</span>
        </div>
      </Link>
      <div
        className={`SiteFeatures flex gap-10 ${roboto.className} items-center text-medium`}
      >
        <Link href="/find-advocates" className=" hidden md:block">
          Find Advocates
        </Link>
        <Link href="/ai-advocate" className=" hidden md:block">
          AI Advocate
        </Link>

        {session && (
          <Link
            href={`/profile/${session.user?.id}`}
            className=" hidden md:block"
          >
            Profile
          </Link>
        )}
        <NavDropdown />
      </div>
      <div className="Auth flex gap-4">
        {!session?.user ? (
          <div className="">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <Button variant="shadow" color="primary" type="submit">
                Sign In
              </Button>
            </form>
          </div>
        ) : (
          <div className="">
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant="shadow" color="primary" type="submit">
                Sign Out
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
