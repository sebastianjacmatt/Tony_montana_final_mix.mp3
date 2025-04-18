import { User } from "@/types/user";
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


export async function getAllUsers(){
  const { data, error } = await supabase
  .from("profiles")
  .select();
  if (error) {
    console.error("Error fetching all users:", error.message);
    throw error;
  }
  return data;
}

export async function getUserMatches(userId: string): Promise<User[]> {
  const { data: matchData, error } = await supabase
    .from("matches")
    .select("user2_id")
    .eq("user1_id", userId);

  if (error) {
    console.error("Error fetching matches:", error.message);
    throw error;
  }

  if (!matchData) return [];

  const matchedUsers = await Promise.all(
    matchData.map((match) => getUserInfo(match.user2_id))
  );

  return matchedUsers;
}

export async function getNewUsers(currentUserId: string) {
  const { data, error } = await supabase
    .rpc("get_profiles_to_swipe", { current_user_id: currentUserId, limit_count: 20 });
  if (error) {
    console.error("Error fetching new users:", error.message);
    throw error;
  }
  return data;
}


export async function getUserByUsername(username: string) {

  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("username", username)
    .single();
  if (error) {
    console.error("Error fetching user info:", error.message);
    throw error;
  }
  return data as User;
}