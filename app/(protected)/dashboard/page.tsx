import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-6">
          Dashboard 🚀
        </h2>

        <Link
          href="/profile"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Go to Profile
        </Link>
      </div>
    </div>
  );
}