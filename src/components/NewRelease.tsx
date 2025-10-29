import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const NewRelease = () => {
  const [uploadType, setUploadType] = useState('new');
  const [coverFile, setCoverFile] = useState<File | null>(null);

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
                <Select>
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
                      <SelectValue placeholder="Классическая музыка" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="electronic">Электронная музыка</SelectItem>
                      <SelectItem value="pop">Поп</SelectItem>
                      <SelectItem value="rock">Рок</SelectItem>
                      <SelectItem value="hip-hop">Хип-хоп</SelectItem>
                      <SelectItem value="classical">Классическая музыка</SelectItem>
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
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="en">Английский</SelectItem>
                      <SelectItem value="de">Немецкий</SelectItem>
                      <SelectItem value="fr">Французский</SelectItem>
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
            </Card>
          </div>

          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-heading font-semibold mb-6">Правовая информация</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="label" className="text-sm mb-2 block">Лейбл</Label>
                <Input
                  id="label"
                  defaultValue="NEVERRLL MUSIC"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Label htmlFor="publisher" className="text-sm mb-2 block">
                  Паблишер (Издатель)
                </Label>
                <Input
                  id="publisher"
                  defaultValue="NEVERRLL MUSIC GmbH"
                  className="bg-background border-border"
                />
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-heading font-semibold mb-6">
              Обложка <span className="text-red-500">*</span>
            </h2>
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
              <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-foreground mb-2">Перетащите изображение сюда или</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mb-4">
                Выберите файл
              </Button>
              <p className="text-xs text-muted-foreground">
                Форматы: PNG, JPG, JPEG. Размер: от 1500x1500 до 5000x5000 пикселей
              </p>
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
                    placeholder="ДД.ММ.ГГГГ"
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
                    placeholder="ДД.ММ.ГГГГ"
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
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
              Загрузить релиз
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
