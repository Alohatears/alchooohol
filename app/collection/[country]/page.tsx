"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X, Wine, MapPin, Calendar, Percent } from 'lucide-react'
import { bottlesData, countryNames } from "@/data/countries"

export default function CountryPage({ params }: { params: { country: string } }) {
  const { country } = params
  const countryInfo = countryNames[country] || { name: "Неизвестная страна", flag: "🏳️" }
  const bottles = bottlesData[country] || []
  const [selectedBottle, setSelectedBottle] = useState<any>(null)

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
          <Link href="/collection">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к странам
          </Link>
        </Button>
      </div>

      {/* Header */}
      <section className="relative z-10 text-center py-8 px-8">
        <div className="inline-block bg-black/50 border-2 border-yellow-600 rounded-lg px-8 py-6 backdrop-blur-sm">
          <div className="text-8xl mb-4">{countryInfo.flag}</div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">{countryInfo.name}</h2>
          <p className="text-gray-300 text-lg">Коллекция мини-бутылочек</p>
          <p className="text-yellow-400 font-semibold mt-2">Напитков: {bottles.length}</p>
        </div>
      </section>

      {/* Bottles Grid */}
      <section className="relative z-10 px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {bottles.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-amber-900/60 backdrop-blur-sm border border-yellow-600/50 rounded-xl p-12 max-w-md mx-auto">
                <Wine className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Пока пусто</h3>
                <p className="text-gray-300 mb-4">
                  Здесь будут отображаться бутылочки из {countryInfo.name}
                </p>
                <p className="text-gray-400 text-sm">
                  Отправьте мне фотографии бутылочек, и я добавлю их сюда!
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bottles.map((bottle) => (
                <div
                  key={bottle.id}
                  className="bg-amber-900/60 backdrop-blur-sm border border-yellow-600/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedBottle(bottle)}
                >
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={bottle.image || "/placeholder.svg"}
                      alt={bottle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">{bottle.name}</h3>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div className="flex items-center">
                        <Wine className="h-4 w-4 mr-2 text-yellow-400" />
                        {bottle.type}
                      </div>
                      <div className="flex items-center">
                        <Percent className="h-4 w-4 mr-2 text-yellow-400" />
                        {bottle.strength}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
                        {bottle.producer}
                      </div>
                    </div>
                    <p className="text-yellow-400 text-xs mt-3 opacity-75">Нажмите для подробностей</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal for bottle details */}
      {selectedBottle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-amber-900/90 backdrop-blur-sm border border-yellow-600/50 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-amber-900/95 backdrop-blur-sm border-b border-yellow-600/30 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-yellow-400">{selectedBottle.name}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedBottle(null)}
                className="text-gray-300 hover:text-yellow-400"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="flex justify-center">
                  <div className="relative w-64 h-96 bg-white/10 rounded-lg overflow-hidden">
                    <Image
                      src={selectedBottle.image || "/placeholder.svg"}
                      alt={selectedBottle.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  {/* Basic Info */}
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">Основная информация</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><span className="text-gray-400">Тип:</span> <span className="text-gray-200">{selectedBottle.type}</span></div>
                      <div><span className="text-gray-400">Крепость:</span> <span className="text-gray-200">{selectedBottle.strength}</span></div>
                      <div><span className="text-gray-400">Объем:</span> <span className="text-gray-200">{selectedBottle.volume}</span></div>
                      <div><span className="text-gray-400">Категория:</span> <span className="text-gray-200">{selectedBottle.category}</span></div>
                      <div className="col-span-2"><span className="text-gray-400">Производитель:</span> <span className="text-gray-200">{selectedBottle.producer}</span></div>
                    </div>
                  </div>

                  {/* Tasting Notes */}
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">Дегустационные характеристики</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-gray-400">Аромат:</span> <span className="text-gray-200">{selectedBottle.aroma}</span></div>
                      <div><span className="text-gray-400">Вкус:</span> <span className="text-gray-200">{selectedBottle.taste}</span></div>
                      <div><span className="text-gray-400">Послевкусие:</span> <span className="text-gray-200">{selectedBottle.finish}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="mt-8 space-y-6">
                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">Описание</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{selectedBottle.description}</p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">История и происхождение</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{selectedBottle.history}</p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">Производственный процесс</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{selectedBottle.process}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">Рекомендации по употреблению</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{selectedBottle.serving}</p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">Сочетания</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{selectedBottle.pairing}</p>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">Отличительные особенности</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{selectedBottle.features}</p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">Интересные факты</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{selectedBottle.facts}</p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">Описание бутылки</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{selectedBottle.bottle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
