import React from "react";
import { CircularProgress } from "@nextui-org/progress";

function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <CircularProgress color="primary" aria-label="Loading..." />
    </div>
  );
}

export default Loading;
