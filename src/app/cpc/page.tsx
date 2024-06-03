import React from "react";
import SearchBox from "@/components/SearchBox";
import { Metadata } from "next";
import { cpcSections } from "@/db/cpc";

export const metadata: Metadata = {
  title: "CPC - Code of Civil Procedure",
  description:
    "The Indian Penal Code (IPC) was the official criminal code in the Republic of India, inherited from British India after independence, until it was replaced by Bharatiya Nyaya Sanhita in December 2023.",
};
function Page() {
  return (
    <div className="flex flex-col justify-center h-[vh] p-3 items-stretch max-w-5xl mx-auto">
      <div className="max-w-5xl">
        <SearchBox array={cpcSections} boxFor="cpc" />
      </div>
      <div className="bg-secondary rounded-xl p-4 flex flex-col max-w-5xl mt-4">
        <div className="text-xl md:text-2xl font-semibold text-center m-3">
          Code of Civil Procedure
        </div>
        <div className="px-7 py-3 text-justify">
          The Code of Civil Procedure, 1908 is a procedural law related to the
          administration of civil proceedings in India.
          <br />
          <br />
          The Code is divided into two parts: the first part contains 158
          sections and the second part contains the First Schedule, which has 51
          Orders and Rules. The sections provide provisions related to general
          principles of jurisdiction whereas the Orders and Rules prescribe
          procedures and method that govern civil proceedings in India.
        </div>
      </div>
    </div>
  );
}

export default Page;
