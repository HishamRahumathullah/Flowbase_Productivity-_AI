import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { db, users } from "@/db";

export default async function SyncUserPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const email = user.primaryEmailAddress?.emailAddress;

  if (!email) {
    redirect("/");
  }

  const name =
    [user.firstName, user.lastName].filter(Boolean).join(" ") ||
    user.username ||
    null;
  const now = new Date();

  await db
    .insert(users)
    .values({
      clerkId: user.id,
      name,
      email,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: users.clerkId,
      set: {
        name,
        email,
        updatedAt: now,
      },
    });

  redirect("/");
}
