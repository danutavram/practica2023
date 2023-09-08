"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white w-full fixed z-10">
      <section className="container mx-auto flex items-center justify-between p-4 text-black">
        <Image
          className="w-32"
          src="/logo.png"
          alt="imagine logo"
          width={300}
          height={300}
        />
        <section className="flex justify-between gap-4">
          {pathname != "/" && <Link href="/">Home</Link>}
          <Link className="hover:text-main" href="/enter-the-community">
            Enter the community
          </Link>
          <Link className="hover:text-main" href="/contact">
            Contact
          </Link>
          <section className="ml-4 flex items-center">
            <Link href={"https://facebook.com"}>
              <Image
                className="w-8 h-8"
                src={"/Facebook.png"}
                alt="imagine facebook"
                width={100}
                height={100}
              />
            </Link>
            <Link href={"https://instagram.com"}>
              <Image
                className="w-8 h-8"
                src={"/Instagram.png"}
                alt="imagine facebook"
                width={100}
                height={100}
              />
            </Link>
            <Link href={"https://twitter.com"}>
              <Image
                className="w-8 h-8"
                src={"/Twitter.png"}
                alt="imagine facebook"
                width={100}
                height={100}
              />
            </Link>
          </section>
        </section>
      </section>
    </nav>
  );
}
