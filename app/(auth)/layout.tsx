import React from "react";

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-black flex h-screen items-center justify-center">
      {children}
    </div>
  )
}
