import { supabase } from "./supabase";

export async function getUserInfo(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("id", userId)
    .single();
  if (error) {
    console.error("Error fetching user info:", error.message);
    throw error;
  }
  return data;
}
