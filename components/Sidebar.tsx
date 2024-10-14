"use client";
import Image from "next/image";
import { GoHomeFill, GoZap } from "react-icons/go";
import { BsImageFill } from "react-icons/bs";
import { Button } from "./ui/button";
import { Progress } from "@/components/ui/progress";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import appImage from "../assets/logo.png";
import { UserDetailsProps } from "@/app/dashboard/layout";
import { WiStars } from "react-icons/wi";
import { RiColorFilterLine } from "react-icons/ri";
import { TbPhotoScan } from "react-icons/tb";
import { usePathname } from "next/navigation";


export default function Sidebar({ isSignedIn, firstName }: UserDetailsProps) {
  const pathname = usePathname()
  const progress = 5;
  const routes = [
    {
      title: "Home",
      icon : <GoHomeFill />,
      route: "/dashboard",
    },
    {
      title: "Image",
      icon: <BsImageFill />,
      route: "/dashboard/image",
    },
    {
      title: "Fill",
      icon: <WiStars />,
      route: "/dashboard/fill",
    },
    {
      title: "Add",
      icon: <TbPhotoScan />,
      route: "/dashboard/add",
    },
    {
      title: "Bg",
      icon: <RiColorFilterLine />,
      route: "/dashboard/bg",
    },
  ];

  return (
    <div className="hidden md:flex w-72 space-y-4 flex-col h-full text-primary bg-secondary fixed left-0 shadow-lg rounded-md p-8">
      <div className="w-full flex items-center justify-center mb-4">
        <Image src={appImage} alt="logo" width={200} height={200} />
      </div>

      {/* Show login button if not signed in */}
      {!isSignedIn ? (
        <div className="p-3 flex-1 flex justify-center items-end text-xl">
          <Button
            variant="custom"
            className="w-full py-6 text-lg lg:text-xl text-center rounded-full"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      ) : (
        /* Show sidebar content if user is signed in */
        <div className="flex flex-col flex-1 justify-between gap-6">
          {/* Routes */}
          <div className="flex flex-col gap-5">
            {routes.map((item, index) => (
              <button
                key={index}
                className={`${item.route === pathname ? 'bg-blue-900 text-white' : ''} p-2 rounded-3xl`}
              >
                <Link href={item.route} className="py-3 px-2 rounded-full flex items-center justify-start font-mono w-full gap-5 text-2xl">{item.icon} {item.title}</Link>
              </button>
            ))}
          </div>

          {/* Progress and Buy button - Positioned at the bottom */}
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

          {/* Profile and User Button */}
          <div className="gap-5 flex items-center py-1">
            <UserButton /> {firstName || "User"}
          </div>
        </div>
      )}
    </div>
  );
}
