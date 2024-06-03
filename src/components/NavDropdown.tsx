"use client";
import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { ChevronDown } from "lucide-react";
import { roboto } from "@/libs/fonts";
import { redirect } from "next/navigation";

function NavDropdown() {
  return (
    <Dropdown placement="bottom" backdrop="opaque">
      <DropdownTrigger className="border-none">
        <Button variant="bordered" className="flex items-center gap-1">
          <span className={`${roboto.className} text-medium`}>Menu</span>
          <ChevronDown size="15" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        variant={"faded"}
        className="opacity-100"
      >
        <DropdownItem
          onClick={() => {
            redirect("/ipc");
          }}
          key="ipc"
          className="text-center"
        >
          IPC
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default NavDropdown;
