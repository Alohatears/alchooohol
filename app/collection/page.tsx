"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { bottlesData, countryNames } from "@/data/countries"

export default function CollectionPage() {
  const countries = Object.keys(bottlesData).map(code => ({
    code: code.toUpperCase(),
    name: countryNames[code]?.name || "Неизвестная страна",
    flag: countryNames[code]?.flag || "🏳️",
    count: bottlesData[code]?.length || 0
  })).filter(country => country.count > 0)

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
          <Link href="/collection" className="text-yellow-400 font-medium text-lg">
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

      {/* Back Button */}
      <div className="relative z-10 px-8 py-4">
        <Button asChild variant="ghost" className="text-gray-300 hover:text-yellow-400">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад на главную
          </Link>
        </Button>
      </div>

      {/* Header */}
      <section className="relative z-10 text-center py-8 px-8">
        <div className="inline-block bg-black/50 border-2 border-yellow-600 rounded-lg px-8 py-4 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">Коллекция по странам</h2>
          <p className="text-gray-300 text-lg">Выберите страну для просмотра коллекции</p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="relative z-10 px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {countries.map((country) => (
              <Link
                key={country.code}
                href={`/collection/${country.code.toLowerCase()}`}
                className="group"
              >
                <div className="bg-amber-900/60 backdrop-blur-sm border border-yellow-600/50 rounded-xl p-4 text-center hover:bg-amber-800/70 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <h3 className="text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">{country.count} напитков</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Stats */}
      <section className="relative z-10 px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-900/60 backdrop-blur-sm border border-yellow-600/50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Статистика коллекции</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-yellow-400">{Object.values(bottlesData).reduce((total, bottles) => total + bottles.length, 0)}+</div>
                <div className="text-gray-300">Мини-бутылочек</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">{countries.length}</div>
                <div className="text-gray-300">{countries.length === 1 ? 'Страна' : countries.length < 5 ? 'Страны' : 'Стран'}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">50+</div>
                <div className="text-gray-300">Различных брендов</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
