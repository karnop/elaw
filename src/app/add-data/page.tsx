import React from "react";
import prisma from "@/db";

function Page() {
  async function uploadData(
    section: number,
    section_title: string,
    section_desc: string,
  ) {
    await prisma.cpc_section.create({
      data: {
        section: section.toString(),
        section_title: section_title,
        section_desc: section_desc,
      },
    });
  }

  return (
    <div>
      {/*{cpcJson.map((art) => (*/}
      {/*  <>*/}
      {/*    <div key="df">hi</div>*/}
      {/*    {uploadData(Number(art.section), art.title, art.description)}*/}
      {/*  </>*/}
      {/*))}*/}
    </div>
  );
}

export default Page;
