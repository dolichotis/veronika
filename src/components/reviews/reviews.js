import React from 'react';
import { Carousel, Rate, Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const reviews = [
  {
    name: 'Виктория',
    date: '13 сентября 2024',
    avatar: '',
    rating: 5,
    text: 'Хочу выразить огромную благодарность Ивану и его команде.Приезжали много специалистов но ' +
      'выбор был сделан на Ивана он убедительно и четко рассказал фронт работ,и цена самая адекватная ' +
      'работу свою ребята знают. Работа была выполнена раньше чем обговаривали.Еще раз спасибо большое ' +
      'тебе Иван вы по настоящему мастера своего дела.',
    images: [
      'https://50.img.avito.st/image/1/1.i4lzDLa5jT3HLzHiygOI8102J2LBqSfi0S8qYsG5I2I.i_nUpx3UCI-tbexa9pzMMEkMkkk-38hgklBOIZmwaJo',
      'https://90.img.avito.st/image/1/1.lEzPLba5kvh7Di4ndhy3IIweOKd9iDgnbQ41p32YPKc.23ppU5MO4uxDmebo6s0g1X6dRG33R5uXccJBw_oZncI',
      'https://30.img.avito.st/image/1/1.cT9Ekra5d4vwsctU_ek5Ugeh3dT2N91U5rHQ1PYn2dQ.Fz5C1fQZbgsevWpuKq_HwMpd4k6PJUzp9dbUyk4_xqI',
      'https://70.img.avito.st/image/1/1.knWQmba5lMEkuigeKaTBGNOqPp4iPD4eMrozniIsOp4.0U2A6t3iuMvIqvPY-9ptDEq-sYIOvUoV7fZg89DXrS4',
      'https://00.img.avito.st/image/1/1.MXgHd7a5N8yzVIsTvgx0E0REnZO10p0TpVSQk7XCmZM.k2bTdy3uF5_Fc_kBvejQfZgFuRo-q6seIjXsaL63JhY?cqp=2.ZTpOdDGMwjQ9FxykYYx1emcExdwnB4QJTJ3gQLJr84nkJsv0XyRRJhYQ4iKI_UhK0gA=',
      'https://50.img.avito.st/image/1/1.z7FHP7a5yQXzHHXa_jit1WkFY1r1mmPa5RxuWvWKZ1o.f220s7E6ePKhTq73_lkh7squegFikv1lLKyj3J1gzk8',
      'https://00.img.avito.st/image/1/1.yAYNO7a5zrK5GHJttDKqE08IZO2_nmRtrxhp7b-OYO0.C6GVx4OTHLZIcQDVlzU16Mto3y6ghdYSBe1LjdSkx0A?cqp=2.ZTpOdDGMwjQ9FxykYYx1emcExdwnB4QJTJ3gQLJr84nkJsv0XyRRJhYQ4iKI_UhK0gA=',
      'https://30.img.avito.st/image/1/1.cAHPu7a5drV7mMpqdsI4bIyI3Op9HtxqbZjR6n0O2Oo.Sys6otug065iDNBpPgoq110x_4EtMC0JVJ7P4s6trd8',
      'https://80.img.avito.st/image/1/1.ZaQlvra5YxCRnd_PnO11yWaNyU-XG8nPh53ET5cLzU8.JeE1bRGIvZeoIbw5NsE8ohd1BMejXTb-5Ron8-tNnK8',
    ],
  },
  {
    name: 'Александр',
    date: '18 августа 2024',
    avatar: '',
    rating: 5,
    text: 'Хочу выразить огромную благодарность Ивану и его команде.Приезжали много специалистов но ' +
      'выбор был сделан на Ивана он убедительно и четко рассказал фронт работ,и цена самая адекватная ' +
      'работу свою ребята знают. Работа была выполнена раньше чем обговаривали.Еще раз спасибо большое ' +
      'тебе Иван вы по настоящему мастера своего дела.',
    images: [
      'https://60.img.avito.st/image/1/1.KriOera5LAw6WZDTNzc_s65UhlM834bTLFmLUzzPglM.oX_o-Oj__Q3Y1WNBIJ04CPeM2mhGVW6vK5LSWiCSPxk',
      'https://30.img.avito.st/image/1/1.h3ath7a5gcIZpD0dFJDkRo2pK50fIisdD6QmnR8yL50.f_kS4f6ekW2bkUFvPYp6d8FZ0fzP82xi-e_Q-k3Mm0Y',
      'https://40.img.avito.st/image/1/1.WjLvW7a5XIZbeOBZVnZ-PM919tld_vZZTXj72V3u8tk.dBGHZpMyN-dhn-5Awz1BqwvQwojuGttOaXhbAcnPK68',
      'https://50.img.avito.st/image/1/1.G0EHEba5HfWzMqEqvj4WSSc_t6q1tLcqpTK6qrWks6o.DHGz7CZ_3uI3G1KrY3zrlKxgEc3u1bNjsT9BHLOaACM',
      'https://40.img.avito.st/image/1/1.9xqtiba58a4Zqk1xFP7NE42nW_EfLFtxD6pW8R88X_E.h0OuOmioEWXKVqE7TzesLgHElqMJPe_tCSPww-9_3qw',
      'https://50.img.avito.st/image/1/1.GUFwaba5H_XESqMqyUIUSVBHtarCzLUq0kq4qsLcsao._40K4ddxc7miyvlWXmyIWiEmIT4Hjvyocpoiv6uAzk0',
      ]
  },
  {
    name: 'Дмитрий',
    date: '20 мая 2024',
    avatar: '',
    rating: 5,
    text: 'Необходимо было установить сваи под хозблок/кухню вместо бетонных блоков. Несмотря на то, ' +
      'что работать пришлось в стесненных условиях, ребята справились с работой чуть более, чем за ' +
      'полдня и выполнили работу на отлично! Хочется отметить, что у Ивана прекрасная команда ' +
      'настоящих профессионалов, знающих свое дело и выполняющих свою работу по очень доступным ' +
      'ценам. Выражаем огромную благодарность Ивану за выполненную работу и планируем ещё ни один ' +
      'раз обратиться к нему за помощью.',
    images: [
      'https://70.img.avito.st/image/1/1.LouDMLa5KD83E5TgOnUjqMxdgWAxlYLgIROPYDGFhmA.le6doO7SAk4iiQTlWnLbsJC1HrYLXpHvSaVKLBjAlGk',
      'https://90.img.avito.st/image/1/1.poucMLa5oD8oExzgJWXVqNNdCWAulQrgPhMHYC6FDmA.YZfDJhCzUs6EPQjzz5Z0o8eaUPTVwK98Z0Oi88zGo4g',
      'https://90.img.avito.st/image/1/1.YvdPlba5ZEP7ttic9sgG2wD4zRz9MM6c7bbDHP0gyhw.7au95oFyek6u_sfqz1IQQOUxLYqVpaWUVr0czoPsYUs',
      'https://30.img.avito.st/image/1/1.Vyv7hba5UZ9Ppu1AQrIXCLTo-MBJIPtAWab2wEkw_8A.u68cFqbmAxCSpjvpfSmpkQP0mvLcHy3cNqD96LCDYB8',
      'https://40.img.avito.st/image/1/1.RZcto7a5QyOZgP_8lLAhtWLO6nyfBun8j4DkfJ8W7Xw.HISts5iiqk9r4P0lsHSQvx9PLybUMNUZyLymcwiGQGk',
      'https://60.img.avito.st/image/1/1.XXC4t7a5W8QMlOcbAZQNXPfa8psKEvEbGpT8mwoC9Zs.YgYDJS2JR3ZBqWUk0zDShPg5vniHRBji3FaLXYvpsMw',
    ]
  },
  {
    name: 'Ольга',
      date: '6 мая 2024',
    avatar: '',
    rating: 5,
    text: 'Работа выполнена великолепно, в срок и по заявлений стоимости. Профессионалов такого высокого ' +
      'уровня я уже давно не встречала. Знают своё дело досконально, работают быстро и слаженно, без лишней ' +
      'возни и разговоров, понимают друг друга с полуслова. Выслушивают всё пожелания и делают именно так как ' +
      'хочется заказчику, но не в ущерб качеству своей работы. Ребята молодцы!!!\n' +
      'Отдельная благодарность Ивану-замечательная организация работы, простота в общении, открытость, ' +
      'честность, терпение и умение ладить с людьми делают его по истине высококлассным руководителем.',
    images: [
      'https://50.img.avito.st/image/1/1.q-Bg07a5rVTU8BGL2Zy8txy8BAvSdgeLwvAKC9JmAws.SuvR7D--9ol1TfflnaitjwMQ1zNEq_uts-LwSd3Xwlg',
      'https://40.img.avito.st/image/1/1.utOzSLa5vGcHawC4CiWthM8nFTgB7Ra4EWsbOAH9Ejg.M2yaSWdu123vwUsxcC6ojs5Ok5XsfFNVGaqyvRRLKiw',
      'https://00.img.avito.st/image/1/1.4cTvY7a553BbQFuvVjj3k5MMTi9dxk2vTUBAL13WSS8.aFdHyTjWYuyqY9pcZEBZ24WzWYFeLBbJT_CzgY8Q9Z4?cqp=2.ZTpOdDGMwjQ9FxykYYx1emcExdwnB4QJTJ3gQLJr84nkJsv0XyRRJhYQ4iKI_UhK0gA=',
      'https://80.img.avito.st/image/1/1.KgCOpra5LLQ6hZBrN-s_V_LJhes8A4ZrLIWL6zwTgus.Gvqzs6EWrDIXZgQVREwZAHTWkkd4BQ7GRSarnaFkezA',
      'https://50.img.avito.st/image/1/1.ia92jLa5jxvCrzPEz4f2-QrjJkTEKSXE1K8oRMQ5IUQ.XXB9ZykQVxIXBL5ApITLU7YEN7WmFPILSPBwpcKM8EE',
    ]
  },
  {
    name: 'Иван',
    date: '24 апреля 2025',
    avatar: '',
    rating: 5,
    text: 'Спасибо Ивану и его бригаде за качественную замену венцов. В процессе работы были трудности, ' +
      'с которыми справились на отлично! За короткий срок подобрали необходимый материал, выполнили работу. ' +
      'Цена за работу в процессе не менялась. Рекомендую Ивана, он профессионал своего дела, и очень ' +
      'ответственно подходит к работе!',
    images: [
      'https://00.img.avito.st/image/1/1.IreYZra5JAMsRZjcITsv988Bjlwqw47cOkWDXCrTilw.en5VySTw9x-QtGiO69Tsuu7k5ipTtd3Iy9QuirkJZOg?cqp=2.ZTpOdDGMwjQ9FxykYYx1emcExdwnB4QJTJ3gQLJr84nkJsv0XyRRJhYQ4iKI_UhK0gA=',
      'https://70.img.avito.st/image/1/1.lgdPYba5kLP7Qixs9lSpQhgGOuz9xDps7UI37P3UPuw.hbEWeDVOZPYcRjo-XBa6AHburAIfGCTIwgKifP4UOHg',
      'https://80.img.avito.st/image/1/1.m7Yz-7a5nQKH2CHditTo9WScN12BXjfdkdg6XYFOM10.sUhEVpJMB-SJiMju5C1E6w1P7RdlE3Ctxg6kN-Q0fJY',
    ]
  },
];

const contentStyle = {
  background: 'rgba(192,188,168,0.2)',
  border: '2px solid #756B64FF',
  borderRadius: '12px',
  padding: '16px',
  textAlign: 'left',
  display: 'flex',
  gap: '16px',
  alignItems: 'flex-start',
  flexWrap: 'nowrap', // запрещаем перенос внутри блока
};

const avatarStyle = {
  flexShrink: 0, // не даем сжиматься
  width: 64,
  height: 64,
};

const imageGridStyle = {
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  marginTop: '12px',
};

const Reviews = () => (
  <div className="divBlockStyle" style={{ padding: '24px' }}>
    <h2 className="h2style" id="reviewsID">Отзывы</h2>
    <Carousel arrows infinite={true}>
      {reviews.map((review, index) => (
        <div key={index}>
          <div style={contentStyle}>
            <Avatar
              size={64}
              icon={<UserOutlined />}
              src={review.avatar || null}
              style={avatarStyle}
            />

            <div>
              <h4 style={{ marginBottom: 0 }}>{review.name}</h4>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: 4 }}>{review.date}</div>
              <Rate disabled defaultValue={review.rating} />
              <p style={{ marginTop: 8, whiteSpace: 'wrap' }}>{review.text}</p>
              {review.images && review.images.length > 0 && (
                <Image.PreviewGroup>
                  <div style={imageGridStyle}>
                    {review.images.map((imgUrl, imgIndex) => (
                      <Image
                        key={imgIndex}
                        width={100}
                        height={100}
                        src={imgUrl}
                        style={{ objectFit: 'cover', borderRadius: 8 }}
                      />
                    ))}
                  </div>
                </Image.PreviewGroup>
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Reviews;