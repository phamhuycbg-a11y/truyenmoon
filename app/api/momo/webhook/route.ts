export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const body = await req.json();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Missing env" },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { amount, orderId, message } = body;

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("deposit_code", message)
    .single();

  if (!user) {
    return NextResponse.json({ success: false, error: "User not found" });
  }

  let coins = amount / 200;
  coins = Math.floor(coins * 1.25);

  if (user.is_first_deposit) {
    coins = coins * 100;

    await supabase
      .from("users")
      .update({ is_first_deposit: false })
      .eq("id", user.id);
  }

  const newCoins = (user.coins || 0) + coins;

  await supabase
    .from("users")
    .update({ coins: newCoins })
    .eq("id", user.id);

  await supabase.from("transactions").insert({
    user_id: user.id,
    amount,
    order_id: orderId,
    status: "success",
  });

  return NextResponse.json({
    success: true,
    coinsAdded: coins,
    total: newCoins,
  });
}