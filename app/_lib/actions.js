"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

export async function handleComment(formData) {
  console.log(formData);
}

// sign in

const signInSchema = z.object({
  email: z.string().email({ message: "ایمیل اشتباه است" }),
  password: z
    .string()
    .min(8, { message: "رمزعبور حداقل باید ۸ کاراکتر باشد" })
    .max(16, { message: "رمزعبور حداکثر باید ۱۶ کاراکتر باشد" }),
});
export async function handleSignIn(state, formData) {
  const validatedFields = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }
  redirect("/dashboard");
}

// sign up

export async function handleSignUp(formData) {
  console.log(formData);
}

export async function handleSignOut() {
  // console.log("sign out");
  redirect("/login");
}

export async function handleForgetPassword(formData) {
  console.log(formData);
}

export async function handleAdditionalSpec(formData) {
  console.log(formData);
}

export async function handleNationalCard(formData) {
  console.log(formData);
}

export async function handleTicket(formData) {
  console.log(formData);
}
