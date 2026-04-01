import styles from './Header.module.scss'

import { Button } from '@/shared/ui/Button/Button'
import logo from '@/shared/assets/icons/logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="Румтибет" />
      </a>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Про гида</a></li>
          <li><a href="#">Программа тура</a></li>
          <li><a href="#">Стоимость</a></li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>

      <div className={styles.buttonWrapper}>
        <Button>Консультация</Button>
      </div>
    </header>
  )
}