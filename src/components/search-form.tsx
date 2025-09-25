"use client";

import { Search } from "lucide-react";
import { useQueryState } from "nuqs";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search Notes...
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search Notes..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value || null)}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
