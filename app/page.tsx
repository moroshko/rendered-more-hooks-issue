import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const HomeContent = async () => {
  const headersList = headers();
  const newPage = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("/dashboard");
    }, 1000);
  });

  redirect(newPage);
}

export default async function Home() {
  return <Suspense fallback={<div>Loading...</div>}>
    <HomeContent />
  </Suspense>
}
