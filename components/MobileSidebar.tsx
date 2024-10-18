'use client'
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuAlignJustify } from "react-icons/lu";
import Image from "next/image";
import appImage from '@/public/logo.png';
import { routes } from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoZap } from "react-icons/go";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

export default function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const progress = 3;

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger onClick={() => setOpen(true)}>
          <LuAlignJustify className="text-2xl" />
        </SheetTrigger>
        <SheetContent className="max-h-screen overflow-y-auto"> {/* Added max-h-screen and overflow-y-auto to add a scroll if it doesn't fits in screen */}
          <SheetHeader>
            <div className="w-full flex items-center justify-center mb-4">
              <Image src={appImage} alt="logo" width={180} height={170} />
            </div>
          </SheetHeader>

          <div className="flex flex-col flex-1 justify-between gap-6">
            <div className="flex flex-col gap-5">
              {routes.map((item, index) => (
                <button
                  key={index}
                  className={`${item.route === pathname ? 'bg-blue-900 text-white' : ''} p-2 rounded-3xl`}
                  onClick={() => setOpen(false)}
                >
                  <Link href={item.route} className="py-2 px-2 rounded-full flex items-center justify-start font-mono w-full gap-4 text-xl">
                    {item.icon} {item.title}
                  </Link>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center py-2 gap-4 mt-auto">
            <div className="flex-col flex items-center gap-1">
              <p className="font-medium">Free Credits</p>
              <span className="font-semibold flex items-center gap-2">
                <GoZap /> {progress}/5
              </span>
            </div>
            <Progress value={progress} />
            <Button variant="custom">
              <Link href="/dashboard/buy">Buy</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
