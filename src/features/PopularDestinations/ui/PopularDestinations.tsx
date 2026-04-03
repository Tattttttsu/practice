import { useState } from 'react';
import styles from './PopularDestinations.module.scss';

const destinations = [
  {
    id: 1,
    title: 'Озеро возле гор',
    subtitle: 'романтическое приключение',
    price: '480 $',
    rating: '4.9',
    image: '/images/lake.jpg',
    description: 'Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.'
  },
  {
    id: 2,
    title: 'Ночь в горах',
    subtitle: 'в компании друзей',
    price: '500 $',
    rating: '4.5',
    image: '/images/night.jpg',
    description: 'Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.'
  },
  {
    id: 3,
    title: 'Йога в горах',
    subtitle: 'для тех, кто заботится о себе',
    price: '230 $',
    rating: '5.0',
    image: '/images/yoga.jpg',
    description: 'Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.'
  }
];

export const PopularDestinations = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className={styles.destinations}>
      <p className={styles.label}>по версии отдыхающих</p>
      <h2 className={styles.title}>Популярные направления</h2>

      <div className={styles.grid}>
        {destinations.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.card} ${activeId === item.id ? styles.active : ''}`}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          >
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.rating}>★ {item.rating}</div>

            <div className={styles.info}>
              <div className={styles.text}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <div className={styles.price}>{item.price}</div>
            </div>

            <div className={styles.overlay}>
              <div className={styles.overlayHeader}>
                <h3>{item.title}</h3>
                <div className={styles.priceBadge}>{item.price}</div>
              </div>
              <p className={styles.description}>{item.description}</p>
              <button className={styles.btn}>Программа тура</button>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.mainBtn}>Рейтинг направлений</button>
    </section>
  );
};