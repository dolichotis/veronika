import React from "react";
import {Carousel, ConfigProvider} from 'antd';

const contentStyle = {
  margin: 0,
  minHeight: "100px",        // минимальная высота вместо фиксированной
  padding: "0 10px",         // добавим паддинг для мобильных устройств
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: "#80756d",
  fontSize: "1rem",          // более гибкий размер шрифта
  lineHeight: "1.4",
};

const AboutUs = () => (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16
        },
      }}
    >
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Накоплен большой опыт в реставрации деревянных домов. Мастера
            работают более 10 лет.</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Работаем только на качественном и проверенном оборудовании</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Сдаем объект всегда в обговоренный срок. Быстро и качественно выполняем все работы.</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Сэкономим Ваш бюджет. Выполняем только те работы, которые действительно нужны.</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Бесплатная уборка после выполнения работ.</h3>
        </div>
      </Carousel>
    </ConfigProvider>

);
export default AboutUs;

/* function AboutUs () {
  return (
    <ul>
      <li>Накоплен большой опыт в реставрации деревянных домов</li>
      <li>Относимся к Вашему дому как к собственному</li>
      <li>Профессионализм</li>
      <li>Опытные мастера своего дела работают более 10 лет</li>
      <li>Работаем только на качественном и проверенном оборудовании</li>
      <li>За плечами десятки довольных клиентов</li>
    </ul>
  )
}

export default AboutUs;

 */