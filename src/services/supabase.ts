import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/constants";

export let supabase: SupabaseClient | undefined = undefined;

export function createSupabaseClient() {
  console.log("SUPABASE_URL", SUPABASE_URL);
  console.log("SUPABASE_ANON_KEY", SUPABASE_ANON_KEY);
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

export async function signUp(payload: { email: string; password: string }) {
  const { email, password } = payload;
  const { data, error } = await supabase!.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw error;
  }
  return data;
}

export async function signIn(payload: { email: string; password: string }) {
  const { email, password } = payload;
  const { data, error } = await supabase!.auth.signInWithPassword({
    email,
    password,
  })
  if (error) {
    throw error;
  }
  return data;
}

export async function readAllRows() {
  const { data, error } = await supabase!.from("doctor-chat").select("*");
  if (error) {
    throw error;
  }
  return data;
}

export async function deleteAllRows() {
  const { data, error } = await supabase!.from("doctor-chat").delete().neq("id", 0);
  if (error) {
    throw error;
  }
  return data;
}

export async function insertRow(payload: { role: string; content: string }) {
  const { role, content } = payload;
  const { data, error } = await supabase!.from("doctor-chat").insert([{ role, content }]).select();
  if (error) {
    throw error;
  }
  return data;
}
