import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <section>
      <p>Hi {session?.user?.id}</p>
      <p>Hi {session?.user?.email}</p>
      <p>Hi {session?.user?.name}</p>
      <p>Hi {session?.user?.image}</p>
    </section>
  );
}
