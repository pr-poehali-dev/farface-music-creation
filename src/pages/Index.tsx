import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const tracks = [
    { id: 1, title: 'Midnight Dreams', duration: '3:45', cover: '/placeholder.svg' },
    { id: 2, title: 'Electric Vibes', duration: '4:12', cover: '/placeholder.svg' },
    { id: 3, title: 'Neon Nights', duration: '3:28', cover: '/placeholder.svg' },
    { id: 4, title: 'City Lights', duration: '4:01', cover: '/placeholder.svg' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FARFACE Music
          </h1>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('music')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'music' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Музыка
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-8 inline-block p-4 rounded-full bg-primary/10 animate-glow">
            <Icon name="Music" size={64} className="text-primary" />
          </div>
          <h2 className="text-6xl md:text-8xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            FARFACE Music
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Электронная музыка нового поколения. Погрузитесь в мир звуков и эмоций.
          </p>
          <Button
            onClick={() => scrollToSection('music')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-6 text-lg"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Слушать музыку
          </Button>
        </div>
      </section>

      <section id="music" className="min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Треки
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tracks.map((track, index) => (
              <Card
                key={track.id}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-6 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name="Music" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-lg mb-1">{track.title}</h4>
                    <p className="text-sm text-muted-foreground">{track.duration}</p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon name="Play" size={20} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-20 px-4 flex items-center">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h3>
          <Card className="bg-card border-border p-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-muted/50 p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Mail" size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contact@farfacemusic.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-muted/50 p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Instagram" size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="font-medium">@farfacemusic</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-muted/50 p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="MessageCircle" size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telegram</p>
                  <p className="font-medium">@farfacemusic</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer hover:bg-muted/50 p-4 rounded-lg transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Youtube" size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">YouTube</p>
                  <p className="font-medium">FARFACE Music</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 FARFACE Music. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
