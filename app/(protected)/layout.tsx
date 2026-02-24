import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <Link href="/dashboard" className="font-bold text-xl">
          My App
        </Link>
        <UserButton afterSignOutUrl="/" />
      </nav>

      <main className="p-10">{children}</main>
    </div>
  );
}