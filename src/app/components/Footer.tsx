import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <section className="container mx-auto p-4 text-black">
        <section className="flex justify-between items-center pb-4">
          <Image
            className="w-32"
            src="/logo.png"
            alt="imagine logo"
            width={300}
            height={300}
          />
          <section className="flex gap-4 items-center justify-center w-full -ml-28">
            <Link className="hover:text-main" href="#">
              About Us
            </Link>
            <Link className="hover:text-main" href="/contact">
              Contact
            </Link>
            <Link className="hover:text-main" href="#">
              FAQ
            </Link>
            <Link className="hover:text-main" href="#">
              Legal disclosure
            </Link>
            <Link className="hover:text-main" href="#">
              Privacy policy
            </Link>
          </section>
        </section>
        <p className="w-full text-center pb-4">
          Copyright @ 2023 youChef. All rights reserved
        </p>
      </section>
    </footer>
  );
}
