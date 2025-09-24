"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };
  return (
    <div>
      <Button variant={"outline"} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
