import React, { useState } from 'react';
import { ConfigProvider, Steps } from 'antd';

function AboutWork() {
  const [current, setCurrent] = useState(0);

  const onChange = value => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const description = {
    step1: 'Наш специалист приедет к Вам на объект, сделает все нужные замеры и рассчитает стоимость проекта, проконсультирует по всем интересующим вопросам.',
    step2: 'По желанию подберем или проконсультируем в выборе материала, рассчитаем и составим смету на материалы (с приблизительной стоимостью).',
    step3: 'Закупим (по желанию) сами материалы, доставим их на объект, выполним все работы и уберем за собой.',
    step4: 'Оплата работ проводится поэтапно. Предварительно никаких авансов не берем. Даём гарантию на услуги.',
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#80756d',
          fontFamily: 'Roboto',
          colorTextDescription: '#3b3634',
          colorText: '#3b3634',
          fontSize: 14
        },
      }}
    >
      <Steps
        className="custom-steps"
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: 'Бесплатный замер и смета',
            description: description.step1,
          },
          {
            title: 'Подбор материала',
            description: description.step2,
          },
          {
            title: 'Закупка материала',
            description: description.step3,
          },
          {
            title: 'Сдача объекта',
            description: description.step4,
          },
        ]}
      />
    </ConfigProvider>
  );
}

export default AboutWork;
