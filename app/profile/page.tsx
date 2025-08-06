"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Wine, User, Save } from "lucide-react"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Коллекционер алкоголя",
    photo: "/placeholder.svg?height=400&width=400",
    bio: "Добро пожаловать на мой персональный сайт, странник Интернета! Изначально этот ресурс создавался исключительно для того, чтобы рассказать о моей коллекции мини-бутылочек алкоголя объёмом 50 г. Но со временем сайт разросся, и теперь здесь можно найти всё, что касается меня и моих увлечений. Приятного путешествия по страницам моего мира!",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [tempProfile, setTempProfile] = useState(profile)

  const handleSave = () => {
    setProfile(tempProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempProfile(profile)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wine className="h-8 w-8 text-amber-600" />
              <h1 className="text-2xl font-bold text-gray-800">Моя Коллекция</h1>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors">
                Главная
              </Link>
              <Link href="/collection" className="text-gray-600 hover:text-amber-600 transition-colors">
                Коллекция
              </Link>
              <Link href="/profile" className="text-amber-600 font-medium border-b-2 border-amber-600 pb-1">
                Профиль
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
          <CardContent className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                <User className="h-8 w-8 mr-2 text-amber-600" />
                Мой профиль
              </h2>
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} className="bg-amber-600 hover:bg-amber-700">
                  Редактировать
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="border-amber-600 text-amber-600 bg-transparent"
                  >
                    Отмена
                  </Button>
                  <Button onClick={handleSave} className="bg-amber-600 hover:bg-amber-700">
                    <Save className="h-4 w-4 mr-2" />
                    Сохранить
                  </Button>
                </div>
              )}
            </div>

            {!isEditing ? (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-amber-600 shadow-xl">
                    <img
                      src={profile.photo || "/placeholder.svg"}
                      alt={profile.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{profile.name}</h3>
                  <div className="prose prose-amber text-gray-700">
                    <p className="text-lg whitespace-pre-wrap leading-relaxed">{profile.bio}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    value={tempProfile.name}
                    onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="photo">URL фотографии</Label>
                  <Input
                    id="photo"
                    value={tempProfile.photo}
                    onChange={(e) => setTempProfile({ ...tempProfile, photo: e.target.value })}
                    placeholder="https://example.com/photo.jpg"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Вставьте URL вашей фотографии или используйте заполнитель по умолчанию
                  </p>
                </div>
                <div>
                  <Label htmlFor="bio">О себе</Label>
                  <Textarea
                    id="bio"
                    value={tempProfile.bio}
                    onChange={(e) => setTempProfile({ ...tempProfile, bio: e.target.value })}
                    rows={6}
                    className="resize-none"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Wine className="h-6 w-6 text-amber-400" />
            <span className="text-lg font-semibold">Коллекция алкоголя</span>
          </div>
          <p className="text-gray-400">© 2024 Личная коллекция. Употребление алкоголя вредит вашему здоровью.</p>
        </div>
      </footer>
    </div>
  )
}
