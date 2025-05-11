import React from 'react';
import {Card, ConfigProvider} from 'antd';

const { Meta } = Card;

const servicesOnCardList = [
  {
    id: 1,
    title: 'Замена венцов',
    description: 'Демонтаж сгнивших или повреждённых нижних бревен (венцов) в деревянном доме с последующей установкой новых, обеспечивающих прочность и долговечность конструкции.',
    price: '300$',
    img: "/img/replacingCrowns.jpg"
  },
  {
    id: 2,
    title: 'Установка пристроек',
    description: 'Возведение дополнительных помещений, террас, веранд или комнат, с полным строительным циклом от фундамента до крыши.',
    price: '400$',
    img: "/img/installingExtensions.jpg"
  },
  {
    id: 3,
    title: 'Монтаж винтовых свай',
    description: 'Установка свай в грунт с помощью механического или ручного бурения, создавая прочный фундамент для домов, пристроек и террас на любых типах почв.',
    price: '500$',
    img: "/img/InstallationPiles.jpg"
  },
  {
    id: 4,
    title: 'Кровельные работы',
    description: 'Демонтаж старого покрытия, устройство новой кровли, монтаж стропильной системы, укладка утеплителя и финишного покрытия (металлочерепица, мягкая кровля и др.).',
    price: '500$',
    img: "/img/RoofingWorks.jpg"
  },
  {
    id: 5,
    title: 'Монтаж полов, потолков, перегородок',
    description: 'Установка лаг и настила пола, обшивка потолков и возведение внутренних стен из дерева, гипсокартона или других материалов.',
    price: 'от 500$',
    img: "/img/installationFloors.jpg"
  },
  {
    id: 6,
    title: 'Отделочные работы',
    description: 'Внешняя облицовка дома: монтаж сайдинга, террасной доски, блок-хауса или имитации бруса для улучшения внешнего вида и теплоизоляции.',
    price: '500$',
    img: "/img/finishingWorks.jpg"
  },
  {
    id: 7,
    title: 'Подъем домов',
    description: 'Аккуратный подъем здания любой сложности с использованием домкратов  для замены фундамента, венцов или выравнивания конструкции.',
    price: '500$',
    img: "/img/riseHouse.jpg"
  },
  {
    id: 8,
    title: 'Замена полов',
    description: 'Демонтаж старого покрытия, замена лаг (при необходимости), установка нового настила из дерева и других материалов.',
    price: '500$',
    img: "/img/replacementFloor.jpg"
  }
];

const CardList = () => (
  <ConfigProvider
    theme={{
      token: {
        colorText: '#3b3634',
        colorTextDescription: '#46423e',
        fontFamily: 'Roboto',
        fontSize: 14,
        borderRadiusLG: 0,
      },
      components: {
        Card: {
          extraColor: 'red',
        },
      },
    }}
  >
  <div className="divBlockStyle" style={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-evenly'}}>
    {servicesOnCardList.map(service => (
      <Card
        key={service.id}
        hoverable
        style={{width: 350}}
        cover={<img
          alt={service.title}
          src={service.img || '/img/default.jpg'} // Если нет картинки, показать заглушку
          style={{
            height: '250px', // Фиксированная высота
            objectFit: 'cover' // Картинка обрезается, но заполняет весь блок
          }}
        />}
      >
        <Meta title={service.title} description={service.description}/>
        <p style={{fontWeight: 'bold', marginBottom: 10}}>{service.price}</p>
      </Card>
    ))}
  </div>
  </ConfigProvider>
);

export default CardList;