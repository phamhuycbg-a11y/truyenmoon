import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const { amount, orderId, message } = body;

  // tìm user theo mã nạp
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("deposit_code", message)
    .single();

  if (!user) {
    return NextResponse.json({ error: "User not found" });
  }

  // cộng xu
  const newCoins = (user.coins || 0) + amount * 10;

  await supabase
    .from("users")
    .update({ coins: newCoins })
    .eq("id", user.id);

  // lưu lịch sử
  await supabase.from("transactions").insert({
    user_id: user.id,
    amount,
    order_id: orderId,
    status: "success",
  });

  return NextResponse.json({ success: true });
}
