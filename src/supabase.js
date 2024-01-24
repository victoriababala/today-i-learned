import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eztqsxezrjmezjfgqbdd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dHFzeGV6cmptZXpqZmdxYmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMTA5OTUsImV4cCI6MjAyMTU4Njk5NX0.4cY8u71pqjGTfOh4udn-IBruql1gD3U3dIZrJx_3YJ8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
