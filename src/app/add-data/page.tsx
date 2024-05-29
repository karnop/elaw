import React from "react";
import { ipcJson } from "@/db/ipc";

function Page() {
  async function uploadData(article: {
    chapter: number;
    chapter_title: string;
    Section: string | number;
    section_title: string;
    section_desc: string;
  }) {}
  return <div>{ipcJson.length}</div>;
}

export default Page;
