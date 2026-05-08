import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const { userId, amount, orderId } = body;

  // 1. cộng xu cho user
  const { data, error } = await supabase
    .from("users")
    .update({
      coins: amount * 10,
    })
    .eq("id", userId);

  // 2. lưu lịch sử giao dịch
  await supabase.from("transactions").insert({
    user_id: userId,
    amount,
    order_id: orderId,
    status: "success",
  });

  return NextResponse.json({ success: true });
}