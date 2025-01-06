import { db } from "@/server/db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

const SyncUser = async () => {
    // Authenticate the user
    const { userId } = await auth();

    if (!userId) {
        throw new Error("User not found");
    }
 
    // Fetch user details from Clerk
    const client = await clerkClient()

    const user = await client.users?.getUser(userId);


    if (!user?.emailAddresses[0]?.emailAddress) {
        return notFound();
    }

    // Upsert the user data into the database
    await db.user.upsert({
        where: {
            emailAddress: user?.emailAddresses[0]?.emailAddress ?? "",
        },
        update: {
            imageUrl: user.imageUrl,
            firstName: user.firstName,
            lastName: user.lastName,
        },
        create: {
            id: userId,
            emailAddress: user.emailAddresses[0]?.emailAddress ?? "",
            imageUrl: user.imageUrl,
            firstName: user.firstName,
            lastName: user.lastName,
        },
    });
    // Redirect to the dashboard
    return redirect('/dashboard');
};

export default SyncUser;
