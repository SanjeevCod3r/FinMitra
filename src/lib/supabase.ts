import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Create a safe stub that warns instead of crashing when env vars are missing
function createStubClient() {
  const error = new Error(
    'Supabase env vars missing. Define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
  const handler = {
    get() {
      // Surface a readable error only when methods are actually used
      throw error;
    },
  } as ProxyHandler<any>;
  // Minimal shape that mimics the client enough for current usage (from().insert())
  const stub = {
    from() {
      throw error;
    },
  } as any;
  // Proxy to catch any other accidental usages
  return new Proxy(stub, handler);
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createStubClient();
