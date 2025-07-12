
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-4">🚀 Welcome to the Demo</h1>
      <p className="mb-6 text-lg">Your journey starts here. Coming Soon...</p>
      <Link href="/api/auth/signin">
        <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded shadow-lg hover:scale-105 transition">
          Sign In
        </button>
      </Link>
    </div>
  );
}
