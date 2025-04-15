import { redirect } from "next/navigation";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  redirect("/dashboard");
}
