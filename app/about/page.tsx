import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23333' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          <Link href="/about" className="text-yellow-400 font-medium text-lg">
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

      {/* Back Button */}
      <div className="relative z-10 px-8 py-4">
        <Button asChild variant="ghost" className="text-gray-300 hover:text-yellow-400">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад на главную
          </Link>
        </Button>
      </div>

      {/* About Content */}
      <section className="relative z-10 px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-black/50 border-2 border-yellow-600 rounded-lg px-8 py-6 backdrop-blur-sm mb-8">
              <div className="w-24 h-24 bg-yellow-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-12 w-12 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">Имя Фамилия</h2>
              <p className="text-gray-300 text-lg">Имя Фамилия</p>
            </div>
          </div>

          <div className="bg-amber-900/60 backdrop-blur-sm border border-yellow-600/50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">
              Добро пожаловать на мой персональный сайт, странник Интернета!
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Изначально этот ресурс создавался исключительно для того, чтобы рассказать о моей коллекции
                мини-бутылочек алкоголя объёмом 50 г. Но со временем сайт разросся, и теперь здесь можно найти всё, что
                касается меня и моих увлечений.
              </p>
              <p className="text-yellow-400 font-medium">Приятного путешествия по страницам моего мира!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-900/60 backdrop-blur-sm border border-yellow-600/50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-yellow-400 mb-4">О коллекции</h4>
              <p className="text-gray-300">
                Моя страсть к коллекционированию мини-бутылочек алкоголя началась много лет назад. Каждая бутылочка в
                моей коллекции имеет свою историю и особое место.
              </p>
            </div>

            <div className="bg-amber-900/60 backdrop-blur-sm border border-yellow-600/50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-yellow-400 mb-4">Обмен и общение</h4>
              <p className="text-gray-300">
                Всегда открыт для обмена экземплярами и общения с единомышленниками. Коллекционирование - это не только
                хобби, но и способ познания мира.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
