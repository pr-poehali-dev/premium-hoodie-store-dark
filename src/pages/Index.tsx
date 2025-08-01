import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartItems, setCartItems] = useState(0);

  const hoodies = [
    {
      id: 1,
      name: "Premium Black Hoodie",
      price: 8500,
      originalPrice: 12000,
      image: "/img/7b624c09-c780-486f-85dd-4f0679a524c6.jpg",
      colors: ["Black", "Navy", "Charcoal"],
      rating: 4.8,
      reviews: 124,
      bestseller: true
    },
    {
      id: 2,
      name: "Luxury White Hoodie",
      price: 9200,
      originalPrice: 13500,
      image: "/img/fa4ec4ec-f9fd-41ef-8d97-40901c5592a5.jpg",
      colors: ["White", "Cream", "Light Gray"],
      rating: 4.9,
      reviews: 89,
      new: true
    },
    {
      id: 3,
      name: "Essential Gray Hoodie",
      price: 7800,
      originalPrice: 11000,
      image: "/img/888e073a-38df-4580-9b95-328a09775bcf.jpg",
      colors: ["Gray", "Slate", "Stone"],
      rating: 4.7,
      reviews: 156,
      sale: true
    }
  ];

  const sizes = [
    { size: 'XS', chest: '44-46', length: '65', shoulder: '42' },
    { size: 'S', chest: '48-50', length: '68', shoulder: '44' },
    { size: 'M', chest: '52-54', length: '71', shoulder: '46' },
    { size: 'L', chest: '56-58', length: '74', shoulder: '48' },
    { size: 'XL', chest: '60-62', length: '77', shoulder: '50' },
    { size: 'XXL', chest: '64-66', length: '80', shoulder: '52' }
  ];

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-display font-bold text-primary">PREMIUM</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-primary transition-colors">Главная</a>
                <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
                <a href="#about" className="hover:text-primary transition-colors">О нас</a>
                <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
                <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
                <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-primary text-black">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              PREMIUM<br />
              <span className="text-primary">HOODIES</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Коллекция элитных худи из премиальных материалов. 
              Безупречное качество, стиль и комфорт в каждой детали.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold px-8">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                Размерная сетка
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-display font-bold text-center mb-12">
            Наш <span className="text-primary">Каталог</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hoodies.map((hoodie) => (
              <Card key={hoodie.id} className="bg-secondary border-muted overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src={hoodie.image} 
                    alt={hoodie.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {hoodie.bestseller && <Badge className="bg-primary text-black">Хит продаж</Badge>}
                    {hoodie.new && <Badge className="bg-green-600">Новинка</Badge>}
                    {hoodie.sale && <Badge className="bg-red-600">Скидка</Badge>}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="icon" className="bg-black/50 hover:bg-black/70">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white">{hoodie.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className={i < Math.floor(hoodie.rating) ? "text-primary fill-primary" : "text-gray-600"} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({hoodie.reviews})</span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">₽{hoodie.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">₽{hoodie.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {hoodie.colors.map((color) => (
                      <div key={color} className="w-6 h-6 rounded-full border border-muted bg-muted"></div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-black hover:bg-primary/90"
                    onClick={addToCart}
                  >
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h3 className="text-4xl font-display font-bold text-center mb-12 text-white">
            Размерная <span className="text-primary">Сетка</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="size-chart" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="size-chart">Таблица размеров</TabsTrigger>
                <TabsTrigger value="how-to-measure">Как измерить</TabsTrigger>
              </TabsList>
              
              <TabsContent value="size-chart">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-white">Размеры (в сантиметрах)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-white">
                        <thead>
                          <tr className="border-b border-muted">
                            <th className="text-left py-3 px-2">Размер</th>
                            <th className="text-left py-3 px-2">Обхват груди</th>
                            <th className="text-left py-3 px-2">Длина</th>
                            <th className="text-left py-3 px-2">Ширина плеч</th>
                            <th className="text-left py-3 px-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {sizes.map((size) => (
                            <tr key={size.size} className="border-b border-muted/50">
                              <td className="py-3 px-2 font-semibold text-primary">{size.size}</td>
                              <td className="py-3 px-2">{size.chest}</td>
                              <td className="py-3 px-2">{size.length}</td>
                              <td className="py-3 px-2">{size.shoulder}</td>
                              <td className="py-3 px-2">
                                <Button 
                                  size="sm" 
                                  variant={selectedSize === size.size ? "default" : "outline"}
                                  onClick={() => setSelectedSize(size.size)}
                                  className={selectedSize === size.size ? "bg-primary text-black" : ""}
                                >
                                  Выбрать
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="how-to-measure">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-white">Как правильно измерить</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-semibold mb-1">Обхват груди</h4>
                          <p className="text-gray-300">Измерьте окружность груди по самой широкой части, держа сантиметр горизонтально</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-semibold mb-1">Длина изделия</h4>
                          <p className="text-gray-300">Измерьте от верхней точки плеча до низа изделия</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-semibold mb-1">Ширина плеч</h4>
                          <p className="text-gray-300">Измерьте расстояние между крайними точками плеч</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-display font-bold mb-8">
              О <span className="text-primary">Нас</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Premium Hoodies — это бренд, созданный для тех, кто ценит качество, стиль и комфорт. 
              Мы используем только лучшие материалы и следим за каждой деталью производства.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-black" />
                </div>
                <h4 className="font-semibold mb-2">Премиальные материалы</h4>
                <p className="text-gray-400">100% хлопок высшего качества</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-black" />
                </div>
                <h4 className="font-semibold mb-2">Быстрая доставка</h4>
                <p className="text-gray-400">По всей России за 1-3 дня</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-black" />
                </div>
                <h4 className="font-semibold mb-2">Гарантия качества</h4>
                <p className="text-gray-400">30 дней на возврат</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="delivery" className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <h3 className="text-4xl font-display font-bold text-center mb-12 text-white">
            Часто задаваемые <span className="text-primary">вопросы</span>
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="delivery">
                <AccordionTrigger className="text-white">Как происходит доставка?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Мы доставляем по всей России курьерской службой. Время доставки 1-3 рабочих дня в зависимости от региона. 
                  Стоимость доставки рассчитывается автоматически при оформлении заказа.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="sizes">
                <AccordionTrigger className="text-white">Как выбрать правильный размер?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Воспользуйтесь нашей размерной сеткой выше. Если сомневаетесь между размерами, рекомендуем выбрать больший размер 
                  для более свободной посадки.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="materials">
                <AccordionTrigger className="text-white">Из каких материалов сделаны худи?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Наши худи изготовлены из 100% премиального хлопка с добавлением эластана для комфорта. 
                  Все материалы гипоаллергенны и сертифицированы.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="return">
                <AccordionTrigger className="text-white">Можно ли вернуть товар?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Да, у вас есть 30 дней на возврат товара без объяснения причин. Товар должен быть в оригинальном состоянии 
                  с сохраненными бирками.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-display font-bold text-center mb-12">
            Отзывы <span className="text-primary">клиентов</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Алексей", rating: 5, text: "Отличное качество! Худи очень мягкие и стильные.", city: "Москва" },
              { name: "Мария", rating: 5, text: "Быстрая доставка, размер подошел идеально. Рекомендую!", city: "СПб" },
              { name: "Дмитрий", rating: 4, text: "Хорошие материалы, удобная посадка. Буду заказывать еще.", city: "Казань" }
            ].map((review, index) => (
              <Card key={index} className="bg-secondary border-muted">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className={i < review.rating ? "text-primary fill-primary" : "text-gray-600"} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{review.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">{review.name}</span>
                    <span className="text-sm text-gray-400">{review.city}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-display font-bold mb-8 text-white">
            <span className="text-primary">Контакты</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-black" />
              </div>
              <h4 className="font-semibold mb-2 text-white">Телефон</h4>
              <p className="text-gray-300">+7 (800) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-black" />
              </div>
              <h4 className="font-semibold mb-2 text-white">Email</h4>
              <p className="text-gray-300">info@premium-hoodies.ru</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-black" />
              </div>
              <h4 className="font-semibold mb-2 text-white">Адрес</h4>
              <p className="text-gray-300">Москва, ул. Тверская, 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-muted py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-2xl font-display font-bold text-primary">PREMIUM</h4>
              <p className="text-gray-400">© 2024 Premium Hoodies. Все права защищены.</p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;