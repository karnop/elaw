import html2canvas from "html2canvas";

export function generateImage() {
  html2canvas(<HTMLElement>document.querySelector("#maindivsection")).then(
    (canvas) => {
      let image = canvas.toDataURL("image/jpeg");
      const a = document.createElement("a");
      a.href = image;
      a.download = "sectionImage_Justice.jpeg";
      a.click();
    },
  );
}

export function getNumberAndCharForSection(text: string) {
  const regex = /section-(\d+)([A-Za-z]?)/;
  const match = text.match(regex);

  if (match) {
    return match[1] + match[2]; // Return number and character (or empty string if no character)
  } else {
    return ""; // Return empty string if no match
  }
}
