import styles from './MountainIntro.module.css';

export const MountainIntro = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <div className={styles.bgImage}>
          <img src="/images/mountains.jpg" alt="Mountains" />
        </div>
        <div className={styles.fgImage}>
          <img src="/images/cabin.jpg" alt="Cabin" />
          <div className={styles.playButton}>▶</div>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.label}>о нашем походе</h3>
        <h2 className={styles.title}>
          Исследуйте все горные массивы 
 мира вместе с нами
        </h2>
        <p className={styles.description}>
          Его корни уходят в один фрагмент классической латыни 45 года н. э., 
          то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных
          слов в Lorem Ipsum, «consectetur» и занялся его поисками в классической 
          латинской литературе.
        </p>
        <button className={styles.ctaButton}>Программа тура</button>
      </div>
    </section>
  );
};