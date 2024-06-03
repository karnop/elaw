import React from "react";
import { ipcChaptersSections } from "@/db/ipc";
import SearchBox from "@/components/SearchBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPC - Indian Penal Code",
  description:
    "The Indian Penal Code (IPC) was the official criminal code in the Republic of India, inherited from British India after independence, until it was replaced by Bharatiya Nyaya Sanhita in December 2023.",
};

async function Page() {
  return (
    <div className="flex flex-col justify-center h-[vh] p-3 items-stretch max-w-5xl mx-auto">
      <div className="max-w-5xl">
        <SearchBox array={ipcChaptersSections} boxFor="ipc" />
      </div>
      <div className="bg-secondary rounded-xl p-4 flex flex-col max-w-5xl mt-4">
        <div className="text-xl md:text-2xl font-semibold text-center m-3">
          Indian Penal Code
        </div>
        <div className="px-7 py-3 text-justify">
          The Indian Penal Code (IPC) was the official criminal code in the
          Republic of India, inherited from British India after independence,
          until it was replaced by Bharatiya Nyaya Sanhita in December 2023. It
          was a comprehensive code intended to cover all substantive aspects of
          criminal law. The code was drafted on the recommendations of the first
          Law Commission of India established in 1834 under the Charter Act of
          1833 under the chairmanship of Lord Thomas Babington Macaulay.It came
          into force on the subcontinent during the British rule in 1862.
          However, it did not apply automatically in the Princely states, which
          had their own courts and legal systems until the 1940s. The code has
          since been amended several times and is now supplemented by other
          criminal provisions.
        </div>
      </div>
    </div>
  );
}

export default Page;
