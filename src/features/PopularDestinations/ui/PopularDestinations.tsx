import { useState } from 'react';
import styles from './PopularDestinations.module.css';

const destinations = [
  {
    id: 1,
    title: 'Озеро возле гор',
    subtitle: 'романтическое приключение',
    price: '480 $',
    rating: '4.9',
    image: '/images/lake.jpg',
    description: 'Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысяч лет назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.'
  },
  {
    id: 2,
    title: 'Ночь в горах',
    subtitle: 'в компании друзей',
    price: '500 $',
    rating: '4.5',
    image: '/images/night.jpg',
    description: 'Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысяч лет назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.'
  },
  {
    id: 3,
    title: 'Йога в горах',
    subtitle: 'для тех, кто заботится о себе',
    price: '230 $',
    rating: '5.0',
    image: '/images/yoga.jpg',
    description: 'Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысяч лет назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.'
  }
];

export const PopularDestinations = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <p className={styles.topLabel}>по версии отдыхающих</p>
      <h2 className={styles.mainTitle}>Популярные направления</h2>

      <div className={styles.grid}>
        {destinations.map((item) => (
          <div 
            key={item.id} 
            className={`${styles.card} ${activeId === item.id ? styles.active : ''}`}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          >
            <img src={item.image} alt={item.title} className={styles.cardImage} />
            <div className={styles.rating}>★ {item.rating}</div>

            <div className={styles.cardInfo}>
              <div className={styles.textGroup}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <div className={styles.priceTag}>{item.price}</div>
            </div>

            <div className={styles.overlay}>
               <div className={styles.overlayHeader}>
                  <h3>{item.title}</h3>
                  <div className={styles.priceTagSmall}>{item.price}</div>
               </div>
               <p className={styles.fullDesc}>{item.description}</p>
               <button className={styles.ctaButton}>Программа тура</button>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.ratingButton}>Рейтинг направлений</button>
    </section>
  );
};