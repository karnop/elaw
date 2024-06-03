import React from "react";
import SearchBox from "@/components/SearchBox";
import { ipcChaptersSections } from "@/db/ipc";
import prisma from "@/db";
import Link from "next/link";

async function Page({ params }: { params: { chapterId: string } }) {
  function extractNumber(text: string) {
    // Split the string using "-" as the delimiter
    const parts = text.split("-");

    // Check if there are at least two parts (chapter and number)
    if (parts.length < 2) {
      throw new Error("Invalid string format: " + text);
    }

    // Extract the second part (assuming it's the number)
    const number = parts[1];

    // Check if the extracted part consists only of digits
    if (!number.match(/^\d+$/)) {
      throw new Error("Invalid number format: " + number);
    }

    return number;
  }

  const chapterNum = extractNumber(params.chapterId);
  const chapterContent = await prisma.ipc_section.findMany({
    where: { chapter: Number(chapterNum) },
  });

  return (
    <div className="lex flex-col justify-center h-[vh] p-3 items-stretch max-w-5xl mx-auto">
      <div className="max-w-5xl">
        <SearchBox array={ipcChaptersSections} boxFor="ipc" />

        {chapterContent.map((section) => (
          <div
            className="bg-primary rounded-xl p-4 flex flex-col max-w-5xl mt-4"
            key={section.id}
          >
            <Link
              href={`/ipc/section/${"section-" + section.section.toLowerCase().replaceAll(" ", "-") + "-" + section.chapter_title.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className="flex justify-between">
                <div className="underline">
                  Chapter {section.chapter}, {section.chapter_title}
                </div>
                <div>Section {section.section}</div>
              </div>

              <div className="flex flex-col items-center">
                <span className="p-4 text-lg text-center font-semibold">
                  {section.section_title}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function generateMetadata({
  params,
}: {
  params: { chapterId: string };
}) {
  const titl = "IPC - " + params.chapterId.replaceAll("-", " ");
  return {
    title: titl,
    description: titl,
  };
}

export default Page;
