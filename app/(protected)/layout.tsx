import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

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
        <h1 className="font-bold text-xl">My App</h1>
        <UserButton afterSignOutUrl="/" />
      </nav>

      <main className="p-10">{children}</main>
    </div>
  );
}