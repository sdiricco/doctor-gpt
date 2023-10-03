import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../constants";
import {AppError} from "../errors"

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
    throw new AppError(error.message, {
      name: 'Supabase Auth Error',
      code: error.status
    })
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
    throw new AppError(error.message, {
      name: 'Supabase Auth Error',
      code: error.status
    })
  }
  return data;
}

export async function readAllRows(payload: {user_id:string}) {
  const {user_id} = payload
  const { data, error } = await supabase!.from("doctor-chat").select("*").eq('user_id', user_id);
  if (error) {
    throw new AppError(error.message)
  }
  return data;
}

export async function deleteAllRows() {
  const { data, error } = await supabase!.from("doctor-chat").delete().neq("id", 0);
  if (error) {
    throw new AppError(error.message)
  }
  return data;
}

export async function insertRow(payload: { user_id:string; role: string; content: string }) {
  const { role, content, user_id } = payload;
  const { data, error } = await supabase!.from("doctor-chat").insert([{ user_id, role, content }]).select();
  if (error) {
    throw error;
  }
  return data;
}
