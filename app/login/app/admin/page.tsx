export default function Admin() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold">
          📊 Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-zinc-900 p-4 rounded-xl">
            <p className="text-zinc-400">Người dùng</p>
            <h2 className="text-2xl font-bold">1</h2>
          </div>

          <div className="bg-zinc-900 p-4 rounded-xl">
            <p className="text-zinc-400">Tổng nạp</p>
            <h2 className="text-2xl font-bold">0đ</h2>
          </div>

          <div className="bg-zinc-900 p-4 rounded-xl">
            <p className="text-zinc-400">Tổng xu</p>
            <h2 className="text-2xl font-bold">0</h2>
          </div>

        </div>

        <div className="mt-6 bg-zinc-900 p-4 rounded-xl">
          <p className="font-bold">📜 Lịch sử giao dịch</p>
          <p className="text-zinc-400 text-sm mt-2">
            Chưa có dữ liệu
          </p>
        </div>

      </div>

    </main>
  );
}