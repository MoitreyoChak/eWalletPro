"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnrampTransaction(
  amount: number,
  provider: string
) {
  //practically this token would come from the bank server
  const token = Math.random().toString();
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return {
      message: "Unauthenticated request",
    };
  }

  await prisma.onRampTransaction.create({
    data: {
      provider,
      status: "Processing",
      token,
      amount: amount * 100,
      startTime: new Date(),
      userId: Number(userId),
    },
  });

  return {
    messagae: "Onramp Transaction created",
  };
}
