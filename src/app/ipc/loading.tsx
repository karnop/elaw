import React from "react";
import { Spinner } from "@nextui-org/spinner";

function Loading() {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <Spinner color="current" size="lg" />
    </div>
  );
}

export default Loading;
