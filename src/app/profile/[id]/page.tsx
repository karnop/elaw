import React from "react";
import { auth } from "@/auth";
import UserVisitProfileComponent from "@/components/UserVisitProfileComponent";
import UserSelfProfileComponent from "@/components/UserSelfProfileComponent";

async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  const id = session?.user?.id;

  const user = await prisma?.users.findUnique({ where: { id: id } });
  let visitType = "profile-visit";
  if (user && user.id === params.id) visitType = "profile-page";

  return (
    <div>
      {visitType === "profile-visit" && user?.role === "advocate" && (
        <UserVisitProfileComponent />
      )}
      {visitType === "profile-page" && user?.role === "advocate" && (
        <UserSelfProfileComponent />
      )}

      {visitType === "profile-visit" && user?.role === "user" && (
        <UserVisitProfileComponent />
      )}
      {visitType === "profile-page" && user?.role === "user" && (
        <UserSelfProfileComponent />
      )}
    </div>
  );
}

export default Page;
