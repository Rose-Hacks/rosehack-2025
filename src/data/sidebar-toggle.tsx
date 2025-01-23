"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { SidebarIcon } from "lucide-react";

export default function SidebarToggle() {
  const { toggleSidebar } = useSidebar();
  return (
    <SidebarIcon
      className="absolute left-0 z-10 translate-x-2 translate-y-2 text-rosehack-white"
      size={30}
      onClick={toggleSidebar}
    />
  );
}
