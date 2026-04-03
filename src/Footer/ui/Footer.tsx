import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribeCard}>
        <div className={styles.subLeft}>
          <p className={styles.subLabel}>актуально</p>
          <h2 className={styles.subTitle}>Получайте полезные рассылки о путешествиях</h2>
        </div>
        <div className={styles.subRight}>
          <p className={styles.inputLabel}>Введите e-mail адрес</p>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="name@domain.com" className={styles.input} />
            <button className={styles.subButton}>Подписаться на новости</button>
          </div>
          <p className={styles.policy}>
            подписываясь на новости, вы автоматически соглашаетесь с <u>условиями обработки персональных данных</u> и <u>правилами рекламных рассылок</u>
          </p>
        </div>
      </div>

      <div className={styles.mainFooter}>
        <div className={styles.column}>
          <h3>Компания «РумТибет»</h3>
          <p>Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысячелетий назад.</p>
          <div className={styles.contacts}>
            <a href="mailto:info@domain.com">info@domain.com</a>
            <a href="tel:+71234567890">+7 (123) 456-78-90</a>
          </div>
          <div className={styles.socials}>
             <span>TG</span> <span>VK</span> <span>PN</span> <span>SK</span>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Наши услуги</h3>
          <ul>
            <li>Прогулки в горы летом</li>
            <li>Зимние походы в горы</li>
            <li>Походы в джунглях Амазонии <span className={styles.badge}>new</span></li>
            <li>Поездка в Африку</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Важно для путешествий</h3>
          <ul>
            <li>Как собрать в долгий поход?</li>
            <li>Жизненно важные предметы</li>
            <li><a href="#" className={styles.linkUnderline}>Медицинская страховка</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};