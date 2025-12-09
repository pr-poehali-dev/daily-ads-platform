import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

const categories = ['Все', 'Технологии', 'Политика', 'Бизнес', 'Наука', 'Культура', 'Спорт'];

const mockNews: NewsArticle[] = [
  {
    id: 1,
    title: 'Прорыв в квантовых вычислениях открывает новые горизонты',
    excerpt: 'Исследователи из MIT объявили о создании квантового процессора нового поколения, способного решать задачи в 1000 раз быстрее классических суперкомпьютеров.',
    category: 'Наука',
    author: 'Анна Петрова',
    date: '9 декабря 2025',
    readTime: '5 мин',
    featured: true
  },
  {
    id: 2,
    title: 'Мировой саммит по климату завершился историческим соглашением',
    excerpt: 'Представители 195 стран подписали новый договор о сокращении выбросов углерода на 60% к 2035 году.',
    category: 'Политика',
    author: 'Дмитрий Соколов',
    date: '9 декабря 2025',
    readTime: '7 мин'
  },
  {
    id: 3,
    title: 'Стартап из России привлёк $50 млн инвестиций',
    excerpt: 'Компания, разрабатывающая ИИ-решения для медицины, получила раунд финансирования от ведущих венчурных фондов Кремниевой долины.',
    category: 'Бизнес',
    author: 'Елена Волкова',
    date: '8 декабря 2025',
    readTime: '4 мин'
  },
  {
    id: 4,
    title: 'Новая выставка в Эрмитаже собрала рекордное число посетителей',
    excerpt: 'Экспозиция импрессионистов XIX века привлекла более 100 тысяч зрителей за первые две недели работы.',
    category: 'Культура',
    author: 'Михаил Кузнецов',
    date: '8 декабря 2025',
    readTime: '3 мин'
  },
  {
    id: 5,
    title: 'Искусственный интеллект научился предсказывать землетрясения',
    excerpt: 'Новая нейросеть показала точность прогноза сейсмической активности на уровне 87%, что превосходит все существующие методы.',
    category: 'Технологии',
    author: 'Игорь Смирнов',
    date: '7 декабря 2025',
    readTime: '6 мин'
  },
  {
    id: 6,
    title: 'Чемпионат мира по футболу 2026: определены все участники',
    excerpt: 'Завершился отборочный этап турнира. Сборная России впервые за 12 лет квалифицировалась на мировое первенство.',
    category: 'Спорт',
    author: 'Сергей Морозов',
    date: '7 декабря 2025',
    readTime: '5 мин'
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [activeTab, setActiveTab] = useState('home');

  const filteredNews = activeCategory === 'Все' 
    ? mockNews 
    : mockNews.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-card">
        <div className="mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center flex-1">
              <h1 className="text-5xl font-black tracking-tight text-primary mb-1">
                НОВОСТИ
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Понедельник, 9 декабря 2025
              </p>
            </div>
          </div>

          <Card className="bg-accent text-accent-foreground p-3 text-center mb-4">
            <p className="text-sm font-semibold">
              🎯 РЕКЛАМА: Ваша реклама здесь — охват 100,000+ читателей ежедневно
            </p>
          </Card>

          <nav className="flex items-center justify-center gap-6 text-sm">
            <button
              onClick={() => setActiveTab('home')}
              className={`font-semibold uppercase tracking-wide transition-colors hover:text-accent ${
                activeTab === 'home' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveTab('interests')}
              className={`font-semibold uppercase tracking-wide transition-colors hover:text-accent ${
                activeTab === 'interests' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
              }`}
            >
              Мои интересы
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`font-semibold uppercase tracking-wide transition-colors hover:text-accent ${
                activeTab === 'categories' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
              }`}
            >
              Категории
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`font-semibold uppercase tracking-wide transition-colors hover:text-accent ${
                activeTab === 'profile' ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'
              }`}
            >
              Профиль
            </button>
          </nav>
        </div>
      </header>

      <div className="mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3 space-y-6">
            <Card className="p-4 border-2">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-primary">
                Категории
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-left px-3 py-2 rounded transition-colors text-sm font-medium ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-muted border-2 border-border">
              <div className="text-center space-y-2">
                <Icon name="Megaphone" className="mx-auto text-muted-foreground" size={32} />
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Рекламное место
                </p>
                <p className="text-sm font-bold text-primary">
                  300×600
                </p>
                <p className="text-xs text-muted-foreground">
                  Премиум размещение в боковой колонке
                </p>
              </div>
            </Card>

            <Card className="p-4 border-2">
              <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-primary">
                Популярные темы
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Квантовые компьютеры</Badge>
                <Badge variant="outline" className="text-xs">Климат</Badge>
                <Badge variant="outline" className="text-xs">Искусственный интеллект</Badge>
                <Badge variant="outline" className="text-xs">Инвестиции</Badge>
                <Badge variant="outline" className="text-xs">Футбол</Badge>
              </div>
            </Card>
          </aside>

          <main className="lg:col-span-9">
            <div className="space-y-8">
              {filteredNews.map((article, index) => (
                <div key={article.id}>
                  {article.featured ? (
                    <Card className="p-6 border-2 border-primary hover:shadow-lg transition-shadow">
                      <Badge className="mb-3 bg-accent text-accent-foreground">
                        {article.category}
                      </Badge>
                      <h2 className="text-4xl font-black leading-tight mb-4 text-primary hover:text-accent transition-colors cursor-pointer">
                        {article.title}
                      </h2>
                      <p className="text-lg leading-relaxed mb-4 text-foreground">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={14} />
                          {article.author}
                        </span>
                        <Separator orientation="vertical" className="h-4" />
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {article.date}
                        </span>
                        <Separator orientation="vertical" className="h-4" />
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {article.readTime}
                        </span>
                      </div>
                    </Card>
                  ) : (
                    <div className="border-b-2 border-border pb-6">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <h3 className="text-2xl font-bold leading-tight mb-2 text-primary hover:text-accent transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-base leading-relaxed mb-3 text-foreground">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={12} />
                          {article.author}
                        </span>
                        <span>•</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <Card className="p-6 bg-muted border-2 border-border my-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon name="Megaphone" className="text-muted-foreground" size={24} />
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              Спонсорский материал
                            </p>
                            <p className="text-lg font-bold text-primary">
                              Баннер 728×90 между новостями
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Узнать больше
                        </Button>
                      </div>
                    </Card>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <Icon name="ChevronLeft" size={16} />
              </Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">
                <Icon name="ChevronRight" size={16} />
              </Button>
            </div>
          </main>
        </div>
      </div>

      <footer className="border-t-4 border-primary bg-card mt-12 py-8">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-2 text-primary">НОВОСТИ</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Ежедневный агрегатор актуальных событий
          </p>
          <div className="flex justify-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">О проекте</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Реклама</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Контакты</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
