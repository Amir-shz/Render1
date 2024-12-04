"use server";

import { redirect } from "next/navigation";

export async function handleComment(formData) {
  console.log(formData);
}

export async function handleSignIn(formData) {
  console.log(formData);
  redirect("/dashboard");
}

export async function handleSignOut() {
  // console.log("sign out");
  // redirect("/dashboard");
}

export async function handleForgetPassword(formData) {
  console.log(formData);
}

export async function handleSignUp(formData) {
  console.log(formData);
}
