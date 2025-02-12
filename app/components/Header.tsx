import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            VIGLO
          </Link>
          <div className="space-x-4">
            <Link href="#how-it-works" className="text-white hover:text-purple-400 transition">
              How It Works
            </Link>
            <Link href="#features" className="text-white hover:text-purple-400 transition">
              Features
            </Link>
            <Link href="#use-cases" className="text-white hover:text-purple-400 transition">
              Use Cases
            </Link>
            <Link href="#join" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Join Beta
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

