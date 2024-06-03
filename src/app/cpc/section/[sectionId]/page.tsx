import React from "react";
import SearchBox from "@/components/SearchBox";
import { rem } from "@/libs/fonts";
import ShareButtons from "@/components/shareButtons";
import { getNumberAndCharForSection } from "@/libs/utils";
import prisma from "@/db";
import { cpcSections } from "@/db/cpc";

async function Page({ params }: { params: { sectionId: string } }) {
  const sectionName = getNumberAndCharForSection(
    params.sectionId,
  ).toUpperCase();
  const data = await prisma.cpc_section.findMany({
    where: { section: sectionName },
  });
  const section = data[0];

  return (
    <div
      className={`flex flex-col justify-center h-[vh] p-3 items-stretch max-w-5xl mx-auto ${rem.className}`}
    >
      {/*search-box*/}
      <div className="max-w-5xl">
        <SearchBox array={cpcSections} boxFor="cpc" />
      </div>

      {/*card*/}
      <div
        className="bg-primary rounded-xl p-4 flex flex-col max-w-5xl mt-4"
        id="maindivsection"
      >
        <div className="flex justify-center font-semibold mb-8 ">CPC</div>
        <div className="flex justify-between gap-3">
          <div>Section {section.section}</div>
        </div>

        <div className="flex flex-col items-center">
          <span className="p-4 text-lg text-center font-semibold">
            {section.section_title}
          </span>
          <span className="flex justify-center text-justify md:px-4">
            {section.section_desc}
          </span>
        </div>
      </div>
      <ShareButtons />
    </div>
  );
}

export function generateMetadata({
  params,
}: {
  params: { sectionId: string };
}) {
  const titl = "IPC - " + params.sectionId.replaceAll("-", " ");
  return {
    title: titl,
    description: titl,
  };
}
export default Page;
