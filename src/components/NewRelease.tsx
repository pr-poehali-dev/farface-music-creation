import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  name: string;
  audioFile: File | null;
}

const NewRelease = () => {
  const [uploadType, setUploadType] = useState('new');
  const [releaseType, setReleaseType] = useState('single');
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [tracks, setTracks] = useState<Track[]>([{ id: 1, name: '', audioFile: null }]);

  const genres = [
    'Поп', 'R&B', 'EDM', 'K-Pop', 'Акустическая музыка', 'Альтернатива', 
    'Гиперпоп', 'Гранж', 'Детская музыка', 'Джаз', 'Дип-хаус', 'Диско', 
    'Дрилл', 'Инди', 'Кантри', 'Классическая музыка', 'Лаунж', 'Лоу-фай', 
    'Метал', 'Поп-рок', 'Регги', 'Ритм-энд-блюз', 'Рок', 'Хип-хоп', 
    'Шансон', 'Электронная музыка', 'Саундтрек', 'Соул', 'Танцевальная музыка', 
    'Техно', 'Трэп', 'Фанк', 'Фонк', 'Фолк', 'Хардкор', 'Хаус', 
    'Экспериментальная музыка', 'Эмбиент', 'Эмо', 'Другое'
  ];

  const languages = [
    'Русский', 'Английский', 'Немецкий', 'Французский', 
    'Украинский', 'Белорусский', 'Казахский', 'Другой'
  ];

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width >= 1500 && img.width <= 5000 && img.height >= 1500 && img.height <= 5000) {
          setCoverFile(file);
        } else {
          alert('Размер изображения должен быть от 1500x1500 до 5000x5000 пикселей');
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleAudioUpload = (trackId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        alert('Размер файла не должен превышать 50 МБ');
        return;
      }
      setTracks(tracks.map(t => t.id === trackId ? { ...t, audioFile: file } : t));
    }
  };

  const addTrack = () => {
    setTracks([...tracks, { id: tracks.length + 1, name: '', audioFile: null }]);
  };

  const removeTrack = (trackId: number) => {
    if (tracks.length > 1) {
      setTracks(tracks.filter(t => t.id !== trackId));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    
    if (coverFile) formData.append('cover', coverFile);
    tracks.forEach((track, index) => {
      if (track.audioFile) {
        formData.append(`track_${index}`, track.audioFile);
        formData.append(`track_${index}_name`, track.name);
      }
    });

    alert('Релиз отправлен! (В реальном приложении данные отправятся на сервер)');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-heading font-bold mb-8">Загрузить новый релиз</h1>

        <div className="space-y-6">
          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-heading font-semibold mb-6">Тип загрузки</h2>
            <RadioGroup value={uploadType} onValueChange={setUploadType}>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new" className="border-primary text-primary" />
                  <Label htmlFor="new" className="cursor-pointer">Новый релиз</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="reupload" id="reupload" className="border-primary text-primary" />
                  <Label htmlFor="reupload" className="cursor-pointer">Перенос релиза</Label>
                </div>
              </div>
            </RadioGroup>
          </Card>

          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-heading font-semibold mb-6">Основная информация</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="release-name" className="text-sm mb-2 block">
                  Наименование релиза <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="release-name"
                  placeholder="Введите название релиза"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Label htmlFor="release-type" className="text-sm mb-2 block">
                  Тип релиза <span className="text-red-500">*</span>
                </Label>
                <Select value={releaseType} onValueChange={setReleaseType}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Сингл" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="single">Сингл</SelectItem>
                    <SelectItem value="ep">EP</SelectItem>
                    <SelectItem value="album">Альбом</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="release-version" className="text-sm mb-2 block">
                  Версия релиза
                </Label>
                <Input
                  id="release-version"
                  placeholder="Remix, Speed Up, prod. by..."
                  className="bg-background border-border"
                />
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-border p-8">
              <h2 className="text-xl font-heading font-semibold mb-6">Исполнители</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="main-artist" className="text-sm mb-2 block">
                    Основной артист <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="main-artist"
                    placeholder="Artist"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="additional-artists" className="text-sm mb-2 block">
                    Дополнительные артисты
                  </Label>
                  <Input
                    id="additional-artists"
                    placeholder="Artist, Artist"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="feat-artists" className="text-sm mb-2 block">
                    При участии (feat.)
                  </Label>
                  <Input
                    id="feat-artists"
                    placeholder="Artist, Artist"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="music-author" className="text-sm mb-2 block">
                    Автор музыки (полное ФИО/Иф) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="music-author"
                    placeholder="Иванов Иван Иванович"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="lyrics-author" className="text-sm mb-2 block">
                    Автор текста (полное ФИО/Иф) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lyrics-author"
                    placeholder="Иванов Иван Иванович"
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="explicit" className="border-primary" />
                  <Label htmlFor="explicit" className="cursor-pointer text-sm">
                    Наличие ненормативной лексики
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="add-lyrics" className="border-primary" />
                  <Label htmlFor="add-lyrics" className="cursor-pointer text-sm">
                    Добавить текст к песне
                  </Label>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-8">
              <h2 className="text-xl font-heading font-semibold mb-6">Характеристики</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="genre" className="text-sm mb-2 block">
                    Жанр <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Выберите жанр" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border max-h-60">
                      {genres.map(genre => (
                        <SelectItem key={genre} value={genre.toLowerCase()}>{genre}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="instrumental" className="border-primary" />
                  <Label htmlFor="instrumental" className="cursor-pointer">
                    Инструментальный релиз
                  </Label>
                </div>

                <div>
                  <Label htmlFor="language" className="text-sm mb-2 block">
                    Язык произведения <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Выберите язык" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {languages.map(lang => (
                        <SelectItem key={lang} value={lang.toLowerCase()}>{lang}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ffp-instrumental" className="border-primary" />
                    <Label htmlFor="ffp-instrumental" className="cursor-pointer text-sm">
                      FFP Инструментал
                    </Label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    В треке/треках присутствует бесплатный инструментал взятый из интернета
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-4 text-muted-foreground">Контрибьюторы</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="producer" className="text-sm mb-2 block">Продюсер</Label>
                    <Input id="producer" placeholder="Producer" className="bg-background border-border" />
                  </div>
                  <div>
                    <Label htmlFor="arranger" className="text-sm mb-2 block">Аранжировщик</Label>
                    <Input id="arranger" placeholder="Arranger" className="bg-background border-border" />
                  </div>
                  <div>
                    <Label htmlFor="adaptor" className="text-sm mb-2 block">Адаптор</Label>
                    <Input id="adaptor" placeholder="Adaptor" className="bg-background border-border" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-heading font-semibold mb-6">Правовая информация</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="label" className="text-sm mb-2 block">Лейбл</Label>
                <Input
                  id="label"
                  placeholder="Название лейбла"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Label htmlFor="publisher" className="text-sm mb-2 block">
                  Паблишер (Издатель)
                </Label>
                <Input
                  id="publisher"
                  placeholder="Название издателя"
                  className="bg-background border-border"
                />
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-heading font-semibold mb-6">
              Обложка <span className="text-red-500">*</span>
            </h2>
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors">
              <input
                type="file"
                id="cover-upload"
                accept=".png,.jpg,.jpeg"
                onChange={handleCoverUpload}
                className="hidden"
              />
              <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-foreground mb-2">Перетащите изображение сюда или</p>
              <Button
                type="button"
                onClick={() => document.getElementById('cover-upload')?.click()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground mb-4"
              >
                Выберите файл
              </Button>
              {coverFile && (
                <p className="text-sm text-green-500 mb-2">Загружено: {coverFile.name}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Форматы: PNG, JPG, JPEG. Размер: от 1500x1500 до 5000x5000 пикселей
              </p>
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-heading font-semibold mb-6">Треки</h2>
            <div className="space-y-6">
              {tracks.map((track, index) => (
                <div key={track.id} className="space-y-4 pb-6 border-b border-border last:border-b-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">Трек {index + 1}</h3>
                    {tracks.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeTrack(track.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor={`track-name-${track.id}`} className="text-sm mb-2 block">
                      Название трека <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id={`track-name-${track.id}`}
                      placeholder="Название трека"
                      className="bg-background border-border"
                      value={track.name}
                      onChange={(e) => setTracks(tracks.map(t => 
                        t.id === track.id ? { ...t, name: e.target.value } : t
                      ))}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`audio-${track.id}`} className="text-sm mb-2 block">
                      Аудиофайл <span className="text-red-500">*</span>
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <input
                        type="file"
                        id={`audio-${track.id}`}
                        accept=".wav,.flac"
                        onChange={(e) => handleAudioUpload(track.id, e)}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById(`audio-${track.id}`)?.click()}
                        className="w-full"
                      >
                        {track.audioFile ? `Загружено: ${track.audioFile.name}` : 'Выберите аудиофайл (макс. 50 МБ)'}
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        Форматы: WAV, FLAC
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {(releaseType === 'ep' || releaseType === 'album') && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={addTrack}
                  className="w-full gap-2"
                >
                  <Icon name="Plus" size={18} />
                  Добавить трек
                </Button>
              )}

              {releaseType === 'single' && tracks.length > 1 && (
                <p className="text-xs text-muted-foreground">
                  Если в вашем релизе более 1 трека, то выберите тип релиза EP/Альбом.
                </p>
              )}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-border p-8">
              <h2 className="text-xl font-heading font-semibold mb-6">Даты</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="asap" className="border-primary" />
                    <Label htmlFor="asap" className="cursor-pointer text-sm">
                      Как можно быстрее
                    </Label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Релиз появится на площадках сразу же, после прохождения модерации
                  </p>
                </div>

                <div>
                  <Label htmlFor="release-date" className="text-sm mb-2 block">
                    Дата выхода релиза <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="release-date"
                    type="date"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="preorder-date" className="text-sm mb-2 block">
                    Дата начала предзаказа
                  </Label>
                  <Input
                    id="preorder-date"
                    type="date"
                    className="bg-background border-border"
                  />
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-8">
              <h2 className="text-xl font-heading font-semibold mb-6">Маркетинговая информация</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="promo" className="border-primary" />
                  <Label htmlFor="promo" className="cursor-pointer text-sm">
                    Отправить релиз с промо
                  </Label>
                </div>
                <div className="text-xs text-muted-foreground space-y-2">
                  <p>
                    При отправке релиза с промо, дата релиза должна быть за 7-14-21 день и
                    обязательно на пятницу.
                  </p>
                  <p>За 7 дней - Низкий шанс попадания в редакционные плейлисты</p>
                  <p>За 14 дней - Средний шанс попадания в редакционные плейлисты</p>
                  <p>За 21 день - Высокий шанс попадания в редакционные плейлисты</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-end gap-4 pt-6">
            <Button variant="outline" size="lg">Отмена</Button>
            <Button
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Загрузить релиз
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
