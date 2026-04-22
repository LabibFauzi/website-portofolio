"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/ui/command";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-center bg-primary fixed top-0 p-4 z-50">
      <Button
        variant="outline"
        size="serach"
        className="justify-between"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center gap-2">
          <Image src="/icons/search.svg" alt="search" width={15} height={15} />
          search
        </div>
        <div className="bg-secondary py-2 flex items-center text-xs text-text-suspended rounded-md px-2 gap-2">
          Alt + k
        </div>
      </Button>

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <VisuallyHidden>
          <DialogTitle>Site Navigation</DialogTitle>
        </VisuallyHidden>

        <Command className="bg-black text-white">
          <CommandInput placeholder="Search..." />
          <CommandList className="scrollbar">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigation">
              <CommandItem value="home" onSelect={() => handleSelect("/")}>
                <span>Home</span>
              </CommandItem>
              <CommandItem value="about me" onSelect={() => handleSelect("/aboutme")}>
                <span>About Me</span>
              </CommandItem>
              <CommandItem value="projects" onSelect={() => handleSelect("/projects")}>
                <span>Projects</span>
              </CommandItem>
              <CommandItem value="experience" onSelect={() => handleSelect("/experience")}>
                <span>Experience</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
