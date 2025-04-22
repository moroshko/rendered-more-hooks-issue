"use server";

import { headers } from "next/headers";

export const getAuth = async () => {
  const headersList = await headers();
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    isLoggedIn: true
  }
};

