"use client";

import { Button } from "@/components/ui/button";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Bot, CreditCard, LayoutDashboard, Plus, Presentation } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";

// Sidebar menu items
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Q&A",
        url: "/qa",
        icon: Bot,
    },
    {
        title: "Meetings",
        url: "/meetings",
        icon: Presentation,
    },
    {
        title: "Billing",
        url: "/billing",
        icon: CreditCard,
    },
];

const projects = [
    {
        title: "Project 1",
        url: "/project/1",
        status: "active",
    },
    {
        title: "Project 2",
        url: "/project/2",
        status: "inactive",
    },
    {
        title: "Project 3",
        url: "/project/3",
        status: "completed",
    },
]

export function AppSideBar() {
    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <div className="text-xl font-bold group-data-[collapsible=icon]:hidden">ProjectPulse</div>
                <div className="text-xl font-bold hidden group-data-[collapsible=icon]:block">PP</div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <Link
                                        href={item.url}
                                        className={cn(
                                            "flex items-center gap-2 px-2 py-2 rounded-md transition-colors",
                                            pathname === item.url
                                                ? "bg-primary text-primary-foreground dark:bg-white dark:text-black"
                                                : "hover:bg-muted hover:text-muted-foreground"
                                        )}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
                        Your Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects.map((project) => (
                                <SidebarMenuItem key={project.title}>
                                    <SidebarMenuButton asChild>
                                        <div className="flex items-center gap-2">
                                            <div className={cn(
                                                'rounded-sm border size-6 flex items-center justify-center text-sm shrink-0',
                                                {
                                                    "text-xs bg-gray-600 text-white dark:bg-gray-400": project.status === "active",
                                                    "text-xs bg-gray-400 text-white dark:bg-gray-600": project.status === "inactive",
                                                    "text-xs bg-red-500 text-white dark:bg-red-400": project.status === "completed",
                                                })}>
                                                {project.title[0]}
                                            </div>
                                            <span className="group-data-[collapsible=icon]:hidden">
                                                {project.title}
                                            </span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <div className="h-2"></div>
                            <SidebarMenuItem>
                                <Link href={"/create"}>
                                    <Button variant={'outline'} className="w-fit group-data-[collapsible=icon]:p-2">
                                        <Plus className="shrink-0" />
                                        <span className="group-data-[collapsible=icon]:hidden ml-2">Create Project</span>
                                    </Button>
                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

