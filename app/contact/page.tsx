import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-gray-900">bondarenko.org</h1>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Главная
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                О себе
              </Link>
              <Link href="/read" className="text-gray-600 hover:text-gray-900 transition-colors">
                Читать
              </Link>
              <Link href="/contact" className="text-gray-900 font-medium border-b-2 border-blue-600 pb-1">
                Контакты
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад на главную
          </Link>
        </Button>
      </div>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь со мной</h2>
            <p className="text-xl text-gray-600">Буду рад обсудить идеи, ответить на вопросы или просто пообщаться</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">Отправить сообщение</h3>
                </div>

                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Тема</Label>
                    <Input id="subject" placeholder="О чем хотите поговорить?" />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Напишите ваше сообщение здесь..." rows={6} />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Предпочитаю общение по электронной почте для серьезных вопросов и предложений.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    contact@bondarenko.org
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">О чем можно писать</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Вопросы по статьям и материалам</li>
                    <li>• Предложения о сотрудничестве</li>
                    <li>• Обмен мнениями и идеями</li>
                    <li>• Обратная связь по сайту</li>
                    <li>• Просто поздороваться</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Время ответа</h3>
                  <p className="text-gray-600">
                    Обычно отвечаю в течение 1-2 дней. Если вопрос требует детального размышления, может потребоваться
                    больше времени.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 bondarenko.org. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
