"use client";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

export interface UserDetailsProps {
  isSignedIn: boolean | undefined;
  firstName?: string | null | undefined;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isSignedIn, isLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setIsLoading(false); // Stop loading once auth is confirmed
    }
  }, [isLoaded]);

  // Display skeleton while loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="hidden md:flex w-72 space-y-4 flex-col h-full text-primary bg-secondary fixed left-0 shadow-lg rounded-md p-8">
          <div className="w-full flex items-center justify-center mb-4">
            <Skeleton className="w-full h-20" />
          </div>

          {isSignedIn ? (
            <div className="p-3 flex-1 flex justify-center items-end text-xl">
              <Skeleton className="w-full h-8" />
            </div>
          ) : (
            <div className="flex flex-col flex-1 justify-between gap-6">
              <div className="flex flex-col gap-5">
                <Skeleton className="w-full h-14 rounded-2xl" />
                <Skeleton className="w-full h-14 rounded-2xl" />
                <Skeleton className="w-full h-14 rounded-2xl" />
                <Skeleton className="w-full h-14 rounded-2xl" />
                <Skeleton className="w-full h-14 rounded-2xl" />
              </div>

              <div className="flex flex-col items-center py-2 gap-2 mt-auto">
                <Skeleton className="w-full h-20 rounded-xl" />
                <Skeleton className="w-full h-14 rounded-xl" />
                <Skeleton className="w-full h-14 rounded-xl" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar isSignedIn={isSignedIn} />
      <Sidebar isSignedIn={isSignedIn} firstName={user?.firstName} />
      <div className="md:ml-[19rem]">
      {children} 
      </div>

    </div>
  );
}
