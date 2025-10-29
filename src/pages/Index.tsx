import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import NewRelease from '@/components/NewRelease';
import Finances from '@/components/Finances';

const Index = () => {
  const [selectedRelease, setSelectedRelease] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const releases = [
    {
      id: 1,
      title: 'Summer Nights',
      artist: 'FARFACE',
      cover: 'https://cdn.poehali.dev/projects/24a6fbc8-b9fc-4181-ab1e-749f86c55081/files/14ef7f04-0f30-4545-b55d-774ed0739f2e.jpg',
      status: 'Опубликовано',
      streams: '125,430',
      revenue: '₽12,450',
      releaseDate: '15.08.2024',
    },
    {
      id: 2,
      title: 'Midnight Pulse',
      artist: 'FARFACE',
      cover: 'https://cdn.poehali.dev/projects/24a6fbc8-b9fc-4181-ab1e-749f86c55081/files/14ef7f04-0f30-4545-b55d-774ed0739f2e.jpg',
      status: 'В обработке',
      streams: '0',
      revenue: '₽0',
      releaseDate: '01.11.2024',
    },
    {
      id: 3,
      title: 'Electric Dreams',
      artist: 'FARFACE',
      cover: 'https://cdn.poehali.dev/projects/24a6fbc8-b9fc-4181-ab1e-749f86c55081/files/14ef7f04-0f30-4545-b55d-774ed0739f2e.jpg',
      status: 'Опубликовано',
      streams: '89,210',
      revenue: '₽8,920',
      releaseDate: '22.07.2024',
    },
  ];

  const platforms = [
    { name: 'Spotify', icon: 'Music', color: 'text-green-500' },
    { name: 'Apple Music', icon: 'Music', color: 'text-pink-500' },
    { name: 'YouTube Music', icon: 'Youtube', color: 'text-red-500' },
    { name: 'VK Music', icon: 'Music', color: 'text-blue-500' },
    { name: 'Яндекс.Музыка', icon: 'Music', color: 'text-yellow-500' },
    { name: 'Deezer', icon: 'Music', color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex h-screen">
        <aside className="w-64 bg-card border-r border-border flex flex-col">
          <div className="p-6 border-b border-border">
            <h1 className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FARFACE Music
            </h1>
            <p className="text-xs text-muted-foreground mt-1">Дистрибьюция музыки</p>
          </div>

          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <Button
                variant="ghost"
                onClick={() => setCurrentPage('dashboard')}
                className={`w-full justify-start gap-3 ${
                  currentPage === 'dashboard'
                    ? 'bg-primary/10 text-primary hover:bg-primary/20'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name="Home" size={20} />
                <span>Главная</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-muted">
                <Icon name="Music" size={20} />
                <span>Мои релизы</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-muted">
                <Icon name="BarChart3" size={20} />
                <span>Аналитика</span>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setCurrentPage('finances')}
                className={`w-full justify-start gap-3 ${
                  currentPage === 'finances'
                    ? 'bg-primary/10 text-primary hover:bg-primary/20'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name="Wallet" size={20} />
                <span>Финансы</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-muted">
                <Icon name="Settings" size={20} />
                <span>Настройки</span>
              </Button>
            </div>
          </nav>

          <div className="p-4 border-t border-border">
            <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-muted">
              <Icon name="LogOut" size={20} />
              <span>Выход</span>
            </Button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          {currentPage === 'newRelease' && <NewRelease />}
          {currentPage === 'finances' && <Finances />}
          {currentPage === 'dashboard' && (
            <>
              <header className="bg-card border-b border-border p-6 sticky top-0 z-10 backdrop-blur-lg bg-card/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-heading font-bold">Дистрибьюция</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Управляйте релизами и отслеживайте статистику
                    </p>
                  </div>
                  <Button
                    onClick={() => setCurrentPage('newRelease')}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <Icon name="Plus" size={18} />
                    Новый релиз
                  </Button>
                </div>
              </header>

              <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card border-border p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Всего стримов</p>
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                </div>
                <p className="text-3xl font-heading font-bold">214,640</p>
                <p className="text-xs text-green-500 mt-2">+12.5% за месяц</p>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Доход</p>
                  <Icon name="DollarSign" size={20} className="text-primary" />
                </div>
                <p className="text-3xl font-heading font-bold">₽21,370</p>
                <p className="text-xs text-green-500 mt-2">+8.2% за месяц</p>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Активных релизов</p>
                  <Icon name="Music" size={20} className="text-primary" />
                </div>
                <p className="text-3xl font-heading font-bold">2</p>
                <p className="text-xs text-muted-foreground mt-2">1 в обработке</p>
              </Card>
            </div>

            <Tabs defaultValue="releases" className="space-y-6">
              <TabsList className="bg-muted">
                <TabsTrigger value="releases">Релизы</TabsTrigger>
                <TabsTrigger value="platforms">Площадки</TabsTrigger>
                <TabsTrigger value="analytics">Аналитика</TabsTrigger>
              </TabsList>

              <TabsContent value="releases" className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex-1">
                    <Icon
                      name="Search"
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      placeholder="Поиск релизов..."
                      className="pl-10 bg-card border-border"
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Icon name="Filter" size={18} />
                    Фильтры
                  </Button>
                </div>

                <div className="space-y-4">
                  {releases.map((release) => (
                    <Card
                      key={release.id}
                      className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-6 cursor-pointer"
                      onClick={() => setSelectedRelease(release.id)}
                    >
                      <div className="flex items-center gap-6">
                        <img
                          src={release.cover}
                          alt={release.title}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-heading font-semibold text-lg">
                                {release.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">{release.artist}</p>
                            </div>
                            <span
                              className={`text-xs px-3 py-1 rounded-full ${
                                release.status === 'Опубликовано'
                                  ? 'bg-green-500/10 text-green-500'
                                  : 'bg-yellow-500/10 text-yellow-500'
                              }`}
                            >
                              {release.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-4">
                            <div>
                              <p className="text-xs text-muted-foreground">Стримы</p>
                              <p className="font-semibold">{release.streams}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Доход</p>
                              <p className="font-semibold">{release.revenue}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Дата релиза</p>
                              <p className="font-semibold">{release.releaseDate}</p>
                            </div>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" className="hover:bg-muted">
                          <Icon name="ChevronRight" size={20} />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="platforms" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {platforms.map((platform) => (
                    <Card
                      key={platform.name}
                      className="bg-card border-border hover:border-primary transition-all duration-300 p-6"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${platform.color}`}
                        >
                          <Icon name={platform.icon as any} size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{platform.name}</h4>
                          <p className="text-xs text-green-500">Подключено</p>
                        </div>
                        <Icon name="CheckCircle2" size={20} className="text-green-500" />
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <Card className="bg-card border-border p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">
                    Статистика за последние 30 дней
                  </h3>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Icon name="BarChart3" size={48} className="mx-auto mb-2 opacity-50" />
                      <p>График аналитики будет здесь</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;