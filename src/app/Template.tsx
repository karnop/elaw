import React from "react";
import { CircularProgress } from "@nextui-org/progress";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex items-center justify-center bg-green-500">
      <CircularProgress color="primary" aria-label="Loading..." />
    </div>
  );
}

export default Template;

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
