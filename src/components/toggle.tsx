"use client";
import { Menu } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar();
  return (
    <Menu
      className="absolute right-0 mr-10 md:hidden"
      onClick={toggleSidebar}
    />
  );
}
