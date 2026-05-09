"use client";

export default function Home() {
  const qrUrl = "/momo.png";

  const stories = [
    {
      title: "Hệ Thống Tu Tiên",
      desc: "Miễn phí 3 chương đầu • Từ chương 4: 3 xu/chương",
    },
    {
      title: "Đô Thị Vô Địch",
      desc: "Truyện hot được cập nhật mỗi ngày",
    },
    {
      title: "Xuyên Không Hậu Cung",
      desc: "Điểm danh nhận xu để mở khóa chương VIP",
    },
    {
      title: "Boss Level MAX",
      desc: "Ủng hộ website để nhận thêm nhiều xu hơn",
    },
  ];

  const normalTopups = [
    "10.000đ → 50 xu",
    "20.000đ → 100 xu",
    "50.000đ → 250 xu",
    "100.000đ → 500 xu",
    "200.000đ → 1.100 xu (+10%)",
    "500.000đ → 2.750 xu (+10%)",
  ];

  const supportTopups = [
    "10.000đ → 60 xu (+20%)",
    "20.000đ → 120 xu (+20%)",
    "50.000đ → 300 xu (+20%)",
    "100.000đ → 600 xu (+20%)",
    "200.000đ → 1.250 xu (+25%)",
    "500.000đ → 3.125 xu (+25%)",
  ];

  const checkinRewards = [
    "Ngày 1: 5 xu",
    "Ngày 2: 5 xu",
    "Ngày 3: 10 xu",
    "Ngày 4: 10 xu",
    "Ngày 5: 15 xu",
    "Ngày 6: 20 xu",
    "Ngày 7: 50 xu",
  ];

  const handleTopup = () => {
    alert("🎉 Nạp thành công! Xu sẽ được cộng vào tài khoản của bạn.");
  };

  const handleCheckin = () => {
    alert("🎁 Điểm danh thành công! Bạn nhận được 5 xu hôm nay.");
  };

  return (
    <main className="min-h-screen bg-[#0B1020] text-white">
      {/* HEADER */}
      <header className="border-b border-white/10 sticky top-0 backdrop-blur bg-[#0B1020]/90 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Truyện Moon 🌙</h1>
            <p className="text-slate-300 mt-2">
              Đọc truyện online • Điểm danh nhận xu • Nạp xu MoMo
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 font-semibold">
              Đăng nhập
            </button>
            <button className="px-5 py-2 rounded-2xl bg-purple-600 hover:bg-purple-700 font-semibold">
              Đăng ký
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-10">
        <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-700 shadow-2xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Web đọc truyện kiếm xu và mở khóa chương VIP
            </h2>

            <p className="mt-4 text-white/90 text-lg">
              Miễn phí 3 chương đầu. Từ chương 4 trở đi chỉ cần 3 xu/chương.
              Điểm danh mỗi ngày để nhận xu miễn phí.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-2xl bg-white text-purple-700 font-bold hover:bg-slate-100">
                📚 Đọc truyện ngay
              </button>

              <button className="px-6 py-3 rounded-2xl bg-black/20 hover:bg-black/30 font-semibold">
                💎 Nạp xu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* STORIES */}
          <div className="bg-[#151C36] rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">📚 Truyện nổi bật</h2>
              <span className="text-sm text-slate-400">
                Cập nhật mỗi ngày
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="bg-[#1E293B] rounded-2xl p-4 hover:bg-[#243248] transition"
                >
                  <div className="text-lg font-semibold">
                    🔥 {story.title}
                  </div>

                  <p className="text-sm text-slate-300 mt-2">
                    {story.desc}
                  </p>

                  <button className="mt-4 w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm font-semibold">
                    Đọc ngay
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-2xl font-semibold">
              Xem toàn bộ truyện
            </button>
          </div>

          {/* CHECK-IN */}
          <div className="bg-[#151C36] rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-5">
              🎁 Điểm danh 7 ngày
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {checkinRewards.map((item, index) => (
                <div
                  key={index}
                  className={
                    index === 6
                      ? "bg-yellow-400 text-black font-bold rounded-2xl p-3 text-center"
                      : "bg-[#1E293B] rounded-2xl p-3 text-center"
                  }
                >
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckin}
              className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-2xl font-semibold"
            >
              Nhận 5 xu hôm nay
            </button>
          </div>

          {/* RULES */}
          <div className="bg-[#151C36] rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              🔓 Quy tắc mở khóa chương
            </h2>

            <div className="space-y-2 text-slate-300">
              <p>✅ Chương 1 → 3: Miễn phí hoàn toàn.</p>
              <p>🔒 Từ chương 4 trở đi: 3 xu / chương.</p>
              <p>🎁 Điểm danh mỗi ngày để nhận xu miễn phí.</p>
              <p>💳 Hết xu có thể nạp tiền bằng MoMo.</p>
              <p>❤️ Ủng hộ trang web để nhận thêm xu thưởng.</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* NẠP XU */}
          <div className="bg-[#151C36] rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-center mb-4">
              💳 Nạp xu
            </h2>

            <div className="space-y-2 text-sm text-slate-300">
              {normalTopups.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          {/* ỦNG HỘ */}
          <div className="bg-[#151C36] rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-center mb-4 text-pink-300">
              ❤️ Ủng hộ trang web
            </h2>

            <div className="space-y-2 text-sm text-slate-300">
              {supportTopups.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          {/* MOMO */}
          <div className="bg-[#151C36] rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-center mb-4">
              📱 Thanh toán MoMo
            </h2>

            <div className="flex justify-center">
              <img
                src={qrUrl}
                alt="QR MoMo"
                className="w-56 h-56 rounded-2xl bg-white p-2"
              />
            </div>

            <p className="text-center text-sm text-slate-400 mt-4">
              Nội dung chuyển khoản:
            </p>

            <p className="text-center font-bold text-yellow-300 mt-1">
              NAP_TRUYENMOON
            </p>

            <button
              onClick={handleTopup}
              className="mt-5 w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-2xl font-semibold"
            >
              Nạp
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 text-center text-sm text-slate-400 py-8">
        © 2026 Truyện Moon 🌙 — Web đọc truyện online
      </footer>
    </main>
  );
}