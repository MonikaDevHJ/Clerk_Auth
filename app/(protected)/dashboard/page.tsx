import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">My App</h1>
        <UserButton afterSignOutUrl="/" />
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center mt-20">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Dashboard
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome to your secure dashboard 🚀
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/profile"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Go to Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}