export default function Login() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="w-full max-w-sm bg-zinc-900 p-6 rounded-xl">

        <h1 className="text-2xl font-bold text-center">
          🔐 Đăng nhập
        </h1>

        <input
          placeholder="Tên user"
          className="w-full mt-4 p-2 rounded bg-black border border-zinc-700"
        />

        <input
          placeholder="Mật khẩu"
          type="password"
          className="w-full mt-3 p-2 rounded bg-black border border-zinc-700"
        />

        <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 py-2 rounded">
          Đăng nhập
        </button>

        <p className="text-xs text-zinc-500 text-center mt-3">
          (Demo UI - chưa có auth thật)
        </p>

      </div>

    </main>
  );
}