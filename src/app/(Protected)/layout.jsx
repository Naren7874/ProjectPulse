import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarProvider } from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"
import { AppSideBar } from "./dashboard/app-sidebar"

const Layout = ({children}) => {
  return (
    <SidebarProvider>
     <AppSideBar/>
    <main className=" w-full m-2">
        <div className=" flex items-center gap-2  border-sidebar-border bg-sidebar border shadow rounded-md p-2 px-4 ">
            <ThemeToggle/>
            <div className="ml-auto ">
            </div>
            <UserButton/>
        </div>
        <div className="h-4"></div>
        <div className=" border-sidebar-border bg-sidebar border shadow rounded-md p-2 overflow-y-scroll h-[calc(100vh-6rem)] ">
            {children}
        </div>
        </main>
    </SidebarProvider>
  )
}

export default Layout
