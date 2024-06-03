"use client";
import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Button } from "@nextui-org/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@nextui-org/progress";

function SearchBox({ array, boxFor }: { array: string[]; boxFor: string }) {
  const router = useRouter();
  const [value, setValue] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  return (
    <div className="max-w-5xl flex">
      <Autocomplete
        className="grow"
        onChange={(event: any, newValue: string | null) => {
          setValue(
            newValue
              ?.replaceAll(":", "")
              .replaceAll("  ", " ")
              .replaceAll(" ", "-")
              .toLowerCase(),
          );
        }}
        id="combo-box-demo"
        options={array}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select"
            className="flex max-w-5xl w-full bg-primary border-1 border-b-primary "
          />
        )}
      />
      <Button
        className="h-full p-4 ml-1 rounded-md focus:outline-none"
        color="primary"
        disabled={loading}
        onClick={() => {
          if (value === "" || value === undefined) return;
          if (boxFor === "ipc") {
            if (value?.toString().includes("section")) {
              router.push(`/ipc/section/${value}`);
            } else {
              router.push(`/ipc/chapter/${value}`);
            }
          }

          if (boxFor === "cpc") {
            router.push(`/cpc/section/${value}`);
          }
        }}
      >
        {!loading && <SearchIcon />}
        {loading && <CircularProgress className="color-black" />}
      </Button>
    </div>
  );
}

export default SearchBox;
