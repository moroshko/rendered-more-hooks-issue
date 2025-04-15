import { redirect } from "next/navigation";
import { Suspense } from "react";

const HomeContent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  redirect("/dashboard");

}

export default async function Home() {
  return <Suspense fallback={<div>Loading...</div>}>
    <HomeContent />
  </Suspense>
}
