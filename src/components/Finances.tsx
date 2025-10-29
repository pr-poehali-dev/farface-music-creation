import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Finances = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-heading font-bold mb-8">Финансы</h1>

        <Card className="bg-card border-border p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Общий заработок</p>
              <p className="text-5xl font-heading font-bold">0,00 ₽</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Доступно к выводу</p>
              <p className="text-5xl font-heading font-bold text-green-500">0,00 ₽</p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Icon name="CreditCard" size={20} />
              Вывод средств
            </Button>
          </div>
        </Card>

        <div className="flex items-center justify-center py-16">
          <p className="text-muted-foreground">Финансовые данные пока отсутствуют</p>
        </div>
      </div>
    </div>
  );
};

export default Finances;
