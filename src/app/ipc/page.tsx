import React from "react";
import { ipcChaptersSections } from "@/db/ipc";
import SearchBox from "@/components/SearchBox";

function Page() {
  // let ipcSection: string[] = [];
  // ipcJson
  //   .filter((item, index) => index >= 511)
  //   .map((article) => (
  //     <div key={article.section_title}>
  //       d
  //       {ipcSection.push(
  //         "Section " + article.Section + " : " + article.section_title,
  //       )}
  //     </div>
  //   ));

  // const chapters = ipcSection.filter(
  //   (value, index, self) => self.indexOf(value) === index,
  // );
  return (
    <div className="flex flex-col items-center justify-center h-[vh] p-3">
      <div className="bg-default-200 rounded-xl p-4 flex flex-col max-w-5xl mt-4">
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

      <div className="max-w-5xl bg-red-600 flex mt-4">
        <div className=""></div>
        <SearchBox array={ipcChaptersSections} />
      </div>
    </div>
  );
}

export default Page;
