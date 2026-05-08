export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        <h1 className="text-5xl font-bold text-center">
          TruyenMoon 🌙
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Web đọc truyện online
        </p>

        <div className="mt-10 bg-zinc-900 rounded-2xl p-6">

          <h2 className="text-xl font-bold">
            ❤️ Nạp xu
          </h2>

          <div className="mt-4 space-y-2 text-zinc-300">
            <p>10.000đ → 50 xu</p>
            <p>20.000đ → 120 xu</p>
            <p>50.000đ → 350 xu</p>
          </div>

          <div className="mt-6 w-full flex justify-center">
            <div <img
  src={qrUrl}
  alt="QR Momo"
  className="w-48 h-48 rounded-xl"
/>
            </div>
          </div>

          <div className="mt-5 text-sm text-zinc-400 space-y-1">
            <p>Ngân hàng: MB Bank</p>
            <p>Số TK: 09xxxxxxxx</p>
            <p>Nội dung: NAP_TRUYENMOON</p>
          </div>

          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 py-2 rounded-xl">
            Tôi đã chuyển tiền
          </button>

        </div>
      </div>
    </main>
  );
}
