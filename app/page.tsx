export default function Home() {
  const qrUrl = "/momo.png";

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="text-center py-10 border-b border-zinc-800">
        <h1 className="text-4xl font-bold">
          Truyện Moon 🌙
        </h1>
        <p className="text-zinc-400 mt-2">
          Web đọc truyện + nạp xu tự động
        </p>
      </header>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT - TRUYỆN */}
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">
            📚 Truyện nổi bật
          </h2>

          <div className="space-y-3 text-zinc-300 text-sm">
            <p>🔥 Truyện 1: Hệ Thống Tu Tiên</p>
            <p>🔥 Truyện 2: Đô Thị Vô Địch</p>
            <p>🔥 Truyện 3: Xuyên Không Hậu Cung</p>
            <p>🔥 Truyện 4: Boss Level MAX</p>
          </div>

          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-xl">
            Xem toàn bộ truyện
          </button>
        </div>

        {/* RIGHT - NẠP XU */}
        <div className="bg-zinc-900 p-6 rounded-2xl">

          <h2 className="text-xl font-bold mb-4 text-center">
            💳 Nạp xu nhận thưởng
          </h2>

          <div className="space-y-2 text-sm text-zinc-300">
            <p>10.000đ → 50 xu</p>
            <p>20.000đ → 100 xu</p>
            <p>50.000đ → 250 xu</p>
            <p>100.000đ → 500 xu</p>
          </div>

          <div className="mt-4 text-green-400 text-sm">
            🎁 +25% khi ủng hộ<br />
            🎉 x100 lần nạp đầu
          </div>

          {/* QR */}
          <div className="flex justify-center mt-6">
            <img
              src={qrUrl}
              alt="QR MoMo"
              className="w-52 h-52 rounded-xl"
            />
          </div>

          {/* MÃ NẠP */}
          <p className="text-center text-sm text-zinc-400 mt-4">
            Mã nạp: <b>TRUYEN_XXXXX</b>
          </p>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="text-center text-xs text-zinc-500 py-10">
        © TruyenMoon - Web đọc truyện online
      </footer>

    </main>
  );
}