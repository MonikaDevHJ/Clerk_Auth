import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();

  return (
    <div className="flex justify-center mt-16">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-6">
          User Details
        </h2>

        <p className="mb-3">
          <strong>Name:</strong> {user?.fullName}
        </p>

        <p>
          <strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}
        </p>
      </div>
    </div>
  );
}