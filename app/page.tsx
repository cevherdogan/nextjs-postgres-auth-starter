
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-4">✨ Welcome to Your Visual Demo</h1>
      <p className="mb-6 text-lg">App Router Version - Coming Soon</p>
      <Link href="/login">
        <button className="bg-white text-indigo-600 font-bold py-2 px-4 rounded hover:scale-105 transition">
          Go to Login
        </button>
      </Link>
    </main>
  );
}
