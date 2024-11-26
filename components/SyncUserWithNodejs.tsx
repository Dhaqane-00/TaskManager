"use client";

import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export default function SyncUserWithNodejs() {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const syncUser = async () => {
      if (isSignedIn && user) {
        try {
          await fetch("/api/sync-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: user.fullName,
              email: user.primaryEmailAddress?.emailAddress,
              userId: user.id,
              imageUrl: user.imageUrl,
            }),
          });
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      }
    };

    syncUser();
  }, [isSignedIn, user]);

  return null;
}
