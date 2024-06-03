import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex justify-between p-4 bg-black rounded-t-xl">
      <div className="flex gap-4 text-primary items-center">
        <span className="font-semibold text-lg">Law</span>
        <Link href="/ipc">IPC</Link>
        <Link href="/crpc">CRPC</Link>
        <Link href="/cpc">CPC</Link>
        <Link href="/nia">NIA</Link>
      </div>
    </div>
  );
}

export default Footer;
