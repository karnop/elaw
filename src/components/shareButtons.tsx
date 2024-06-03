"use client";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { generateImage } from "@/libs/utils";
import { BeatLoader } from "react-spinners";
import { usePathname } from "next/navigation";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShareButtons() {
  const [loading, setLoading] = useState(false);
  const route = "http://localhost:3000" + usePathname();

  function generateToast() {
    toast("Link Copied to clipboard", {
      hideProgressBar: true,
      autoClose: 1000,
      position: "bottom-center",
      theme: "light",
      style: { backgroundColor: "black" },
    });
  }

  return (
    <div>
      <ButtonGroup
        variant="solid"
        color="primary"
        className="flex justify-between w-full mt-2 font-semibold"
        size="md"
      >
        <Button
          disabled={loading}
          onClick={() => {
            setLoading(true);
            generateImage();
            setLoading(false);
          }}
        >
          {!loading && "Convert To Image"}
          {loading && <BeatLoader color="black" size="8" />}
        </Button>

        <CopyToClipboard text={route}>
          <Button onClick={generateToast}>
            Share <ToastContainer />
          </Button>
        </CopyToClipboard>
      </ButtonGroup>
    </div>
  );
}

export default ShareButtons;
