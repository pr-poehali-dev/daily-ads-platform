import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type NewsItem = {
  id: number;
  title: string;
  category: string;
  time: string;
};

const newsData: NewsItem[] = [
  { id: 1, title: 'Прорыв в квантовых вычислениях открывает новые горизонты', category: 'Наука', time: '12:45' },
  { id: 2, title: 'Саммит по климату завершился историческим соглашением', category: 'Политика', time: '11:20' },
  { id: 3, title: 'Российский стартап привлёк $50 млн инвестиций', category: 'Бизнес', time: '10:15' },
  { id: 4, title: 'Новая выставка в Эрмитаже собрала рекорд посетителей', category: 'Культура', time: '09:30' }
];

const zodiacSigns = [
  { name: 'Овен', icon: '♈', dates: '21.03 - 19.04' },
  { name: 'Телец', icon: '♉', dates: '20.04 - 20.05' },
  { name: 'Близнецы', icon: '♊', dates: '21.05 - 20.06' },
  { name: 'Рак', icon: '♋', dates: '21.06 - 22.07' },
  { name: 'Лев', icon: '♌', dates: '23.07 - 22.08' },
  { name: 'Дева', icon: '♍', dates: '23.08 - 22.09' }
];

const menuItems = [
  { icon: 'Home', label: 'Главная', active: true },
  { icon: 'Newspaper', label: 'Новости', active: false },
  { icon: 'Sparkles', label: 'Гороскоп', active: false },
  { icon: 'Cloud', label: 'Погода', active: false },
  { icon: 'TrendingUp', label: 'Финансы', active: false },
  { icon: 'Briefcase', label: 'Работа', active: false },
  { icon: 'ShoppingBag', label: 'Маркет', active: false },
  { icon: 'Car', label: 'Транспорт', active: false },
  { icon: 'Utensils', label: 'Еда', active: false },
  { icon: 'Film', label: 'Афиша', active: false },
  { icon: 'Heart', label: 'Здоровье', active: false },
  { icon: 'Gamepad2', label: 'Игры', active: false }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 bg-card border-b shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] p-0">
                  <div className="py-6 px-4 border-b">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-14 w-14">
                        <AvatarFallback className="bg-accent text-accent-foreground text-lg font-semibold">
                          АП
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-base">Александр</p>
                        <p className="text-xs text-muted-foreground">alex@example.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
                      >
                        <Icon name={item.icon as any} size={20} className={item.active ? 'text-accent' : 'text-muted-foreground'} />
                        <span className={`text-sm ${item.active ? 'font-semibold text-foreground' : 'text-foreground'}`}>
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Icon name="Settings" size={18} className="mr-2" />
                      Настройки
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <div>
                <h1 className="text-xl font-bold text-primary">Портал</h1>
                <p className="text-xs text-muted-foreground">Москва</p>
              </div>
            </div>

            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Icon name="Search" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="px-4 py-4 space-y-4">
        <Card className="p-4 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm opacity-90 mb-1">Москва, сейчас</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">-3°</span>
              </div>
              <p className="text-sm mt-1 opacity-90">Облачно, небольшой снег</p>
            </div>
            <Icon name="Cloud" size={64} className="opacity-80" />
          </div>
          <div className="flex gap-4 text-xs opacity-90">
            <div className="flex items-center gap-1">
              <Icon name="Wind" size={14} />
              <span>3 м/с</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Droplets" size={14} />
              <span>85%</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Gauge" size={14} />
              <span>745 мм</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: 'Wallet', label: 'Финансы', color: 'bg-green-500' },
            { icon: 'ShoppingBag', label: 'Маркет', color: 'bg-purple-500' },
            { icon: 'Car', label: 'Такси', color: 'bg-yellow-500' },
            { icon: 'Utensils', label: 'Еда', color: 'bg-red-500' }
          ].map((item) => (
            <button key={item.label} className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-colors">
              <div className={`${item.color} text-white p-3 rounded-xl`}>
                <Icon name={item.icon as any} size={24} />
              </div>
              <span className="text-xs text-center text-foreground">{item.label}</span>
            </button>
          ))}
        </div>

        <Card className="p-4 bg-muted/50">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Реклама</p>
            <Icon name="Info" size={14} className="text-muted-foreground" />
          </div>
          <div className="bg-card p-4 rounded-lg border mt-2">
            <p className="text-sm font-semibold text-center">Баннер 320×100</p>
            <p className="text-xs text-muted-foreground text-center mt-1">Премиум размещение</p>
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-foreground">Гороскоп на сегодня</h2>
            <Button variant="ghost" size="sm" className="text-accent h-8">
              Все знаки
              <Icon name="ChevronRight" size={16} className="ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {zodiacSigns.map((sign) => (
              <Card key={sign.name} className="p-3 hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-center">
                  <div className="text-3xl mb-1">{sign.icon}</div>
                  <p className="text-xs font-semibold text-foreground">{sign.name}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{sign.dates}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-4 bg-muted/50">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Спонсорский материал</p>
            <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
          </div>
          <div className="bg-card p-4 rounded-lg border mt-2 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Реклама между блоками</p>
              <p className="text-xs text-muted-foreground mt-1">320×250</p>
            </div>
            <Button size="sm" variant="outline">
              Подробнее
            </Button>
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-foreground">Новости</h2>
            <Button variant="ghost" size="sm" className="text-accent h-8">
              Все новости
              <Icon name="ChevronRight" size={16} className="ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {newsData.map((news) => (
              <Card key={news.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <Badge variant="secondary" className="text-xs mb-2">
                  {news.category}
                </Badge>
                <h3 className="text-sm font-semibold leading-snug mb-2 text-foreground">
                  {news.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{news.time}</span>
                  <Icon name="Bookmark" size={16} className="text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: 'Briefcase', label: 'Работа', count: '1,234' },
            { icon: 'Home', label: 'Недвижимость', count: '856' },
            { icon: 'Film', label: 'Афиша', count: '42' },
            { icon: 'Dumbbell', label: 'Спорт', count: '67' }
          ].map((item) => (
            <Card key={item.label} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <Icon name={item.icon as any} size={24} className="text-accent" />
                <Badge variant="outline" className="text-xs">{item.count}</Badge>
              </div>
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
            </Card>
          ))}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: 'Home', label: 'Главная', active: true },
            { icon: 'Newspaper', label: 'Новости', active: false },
            { icon: 'Sparkles', label: 'Гороскоп', active: false },
            { icon: 'User', label: 'Профиль', active: false }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveSection(item.label)}
              className="flex flex-col items-center gap-1 px-3 py-1 min-w-[60px]"
            >
              <Icon 
                name={item.icon as any} 
                size={22} 
                className={item.active ? 'text-accent' : 'text-muted-foreground'} 
              />
              <span className={`text-[10px] ${item.active ? 'text-accent font-semibold' : 'text-muted-foreground'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;