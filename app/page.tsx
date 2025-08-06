import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23333' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: "#1a1a1a",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex space-x-8 text-gray-300">
          <Link href="/collection" className="hover:text-yellow-400 transition-colors text-lg">
            Коллекция
          </Link>
          <Link href="/exchange" className="hover:text-yellow-400 transition-colors text-lg">
            На обмен
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors text-lg">
            Обо мне
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-2 rounded">
            Напишите мне
          </Button>
          <div className="flex space-x-2 text-gray-300">
            <span className="text-yellow-400 font-medium">Рус</span>
            <span>/</span>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Eng
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-8">
        {/* Header Badge */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-black/50 border-2 border-yellow-600 rounded-lg px-8 py-4 backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-yellow-400 tracking-wider mb-1">ИМЯ ФАМИЛИЯ</h1>
            <p className="text-gray-300 text-lg">Имя Фамилия</p>
          </div>
        </div>

        {/* Wooden Display Case with Real Photo */}
        <div className="relative max-w-6xl w-full">
          {/* Wooden frame */}
          <div
            className="relative bg-gradient-to-b from-amber-800 to-amber-900 p-4 rounded-lg shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(45deg, #8B4513 25%, transparent 25%), 
                       linear-gradient(-45deg, #8B4513 25%, transparent 25%), 
                       linear-gradient(45deg, transparent 75%, #8B4513 75%), 
                       linear-gradient(-45deg, transparent 75%, #8B4513 75%)`,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          >
            {/* Real collection photo */}
            <div className="relative rounded shadow-inner overflow-hidden">
              <img
                src="/images/hero-bottles-real.png"
                alt="Коллекция мини-бутылочек с алкоголем по 50 мл"
                className="w-full h-auto object-cover"
              />

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                  Коллекция мини-бутылочек с алкоголем по 50 мл
                </h2>
              </div>
            </div>

            {/* Wooden frame details */}
            <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-600 rounded-full shadow-inner"></div>
            <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-600 rounded-full shadow-inner"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-yellow-600 rounded-full shadow-inner"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-yellow-600 rounded-full shadow-inner"></div>
          </div>

          {/* Lighting effect */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-300/30 rounded-full blur-xl"></div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 text-lg rounded"
          >
            <Link href="/collection">Посмотреть коллекцию</Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-black/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-900/10 rounded-full blur-3xl"></div>
    </div>
  )
}
