import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function ProfilePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  return (
    <div className="min-h-screen bg-gray-100">
      
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">Profile</h1>
        <UserButton afterSignOutUrl="/" />
      </nav>

      <div className="flex justify-center mt-16">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4">User Details</h2>

          <p className="mb-2">
            <strong>Name:</strong> {user?.fullName}
          </p>

          <p>
            <strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>
    </div>
  );
}