import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"

export default function ReadPage() {
  const articles = [
    {
      id: 1,
      title: "Размышления о технологиях и будущем",
      excerpt: "Как технологии меняют наш мир и что нас ждет в ближайшем будущем. Анализ трендов и прогнозы развития.",
      date: "15 декабря 2024",
      readTime: "5 мин",
      tags: ["технологии", "будущее", "инновации"],
      slug: "thoughts-on-technology",
    },
    {
      id: 2,
      title: "О личностном росте и саморазвитии",
      excerpt: "Мои мысли о том, как важно постоянно развиваться и учиться новому. Практические советы и личный опыт.",
      date: "10 декабря 2024",
      readTime: "7 мин",
      tags: ["саморазвитие", "психология", "мотивация"],
      slug: "personal-growth",
    },
    {
      id: 3,
      title: "Минимализм в цифровую эпоху",
      excerpt:
        "Почему простота становится все более ценной в нашем сложном мире. Как найти баланс между технологиями и жизнью.",
      date: "5 декабря 2024",
      readTime: "4 мин",
      tags: ["минимализм", "философия", "образ жизни"],
      slug: "minimalism",
    },
    {
      id: 4,
      title: "Искусство эффективного общения",
      excerpt: "Как научиться лучше понимать других людей и выражать свои мысли. Основы успешной коммуникации.",
      date: "1 декабря 2024",
      readTime: "6 мин",
      tags: ["общение", "психология", "навыки"],
      slug: "effective-communication",
    },
    {
      id: 5,
      title: "Цифровая детоксикация: зачем и как",
      excerpt:
        "Почему важно периодически отключаться от цифрового мира и как это правильно делать для восстановления баланса.",
      date: "25 ноября 2024",
      readTime: "5 мин",
      tags: ["здоровье", "технологии", "баланс"],
      slug: "digital-detox",
    },
  ]

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
              <Link href="/read" className="text-gray-900 font-medium border-b-2 border-blue-600 pb-1">
                Читать
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
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

      {/* Page Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Статьи и размышления</h2>
          <p className="text-xl text-gray-600">
            Коллекция моих мыслей, идей и наблюдений о жизни, технологиях и саморазвитии
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link href={`/read/${article.slug}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <Button asChild variant="outline" size="sm">
                    <Link href={`/read/${article.slug}`}>Читать далее</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 bondarenko.org. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
