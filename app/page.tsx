import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to My App
        </h1>

        {userId ? (
          <>
            <p className="text-gray-600 mb-6">
              You are logged in 🎉
            </p>

            <Link
              href="/dashboard"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Go to Dashboard
            </Link>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Want to see your profile?  
              Please create an account or sign in.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/sign-in"
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-black transition"
              >
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}