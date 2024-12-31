"use client";
import {
	Command,
	CommandDialog,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CommandEmpty } from "cmdk";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Search() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full flex justify-center bg-primary fixed top-0 p-4 z-50">
			{/* Search Button */}
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
					⌘ + k
				</div>
			</Button>

			<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
				<VisuallyHidden>
					<DialogTitle>Site Navigation</DialogTitle>
				</VisuallyHidden>
				<Command className="bg-black">
					<CommandInput placeholder="Search..." />
					<CommandList className=" scrollbar">
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="">
							<CommandItem>
								<span>home</span>
							</CommandItem>
							<CommandItem>
								<span>about_me</span>
							</CommandItem>
							<CommandItem>
								<span>projects</span>
							</CommandItem>
							<CommandItem>
								<span>experience</span>
							</CommandItem>
							<CommandItem>
								<span>contact</span>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</CommandDialog>
		</div>
	);
}
