import { Metadata } from "next"; // Remove `type` if not using TypeScript
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import  {AppSidebar}  from "../components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Remove the `: Metadata` type annotation
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Remove the `Readonly` type and TypeScript annotations
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          {/* <SidebarProvider> */}
            {/* <AppSidebar /> */}
            <main className="w-[100%] bg-[#F8F8F8]">
              {/* <SidebarTrigger /> */}
              {children}
            </main>
          {/* </SidebarProvider> */}
        </div>
      </body>
    </html>
  );
}