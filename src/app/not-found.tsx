import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a1a] text-white px-6">
      <Link href="/" className="text-2xl font-bold text-[#00d4ff] hover:text-[#00bfe0] transition-colors mb-6">
        ViewSmash
      </Link>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#00d4ff] text-[#0a0a1a] font-bold rounded-lg hover:bg-[#00bfe0] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
