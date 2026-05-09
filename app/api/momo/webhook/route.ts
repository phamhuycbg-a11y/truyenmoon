import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const { amount, orderId, message } = body;

  // 1. tìm user theo mã nạp
  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("deposit_code", message)
    .single();

  if (!user) {
    return NextResponse.json({ success: false, error: "User not found" });
  }

  // 2. tính xu cơ bản
  let coins = amount / 200; // ví dụ: 10k = 50 xu

  // 3. bonus +25% nếu muốn
  coins = Math.floor(coins * 1.25);

  // 4. bonus nạp lần đầu x100
  if (user.is_first_deposit) {
    coins = coins * 100;

    await supabase
      .from("users")
      .update({ is_first_deposit: false })
      .eq("id", user.id);
  }

  // 5. cộng xu
  const newCoins = (user.coins || 0) + coins;

  await supabase
    .from("users")
    .update({ coins: newCoins })
    .eq("id", user.id);

  // 6. lưu lịch sử
  await supabase.from("transactions").insert({
    user_id: user.id,
    amount,
    order_id: orderId,
    status: "success",
  });

  return NextResponse.json({
    success: true,
    coinsAdded: coins,
    total: newCoins
  });
}