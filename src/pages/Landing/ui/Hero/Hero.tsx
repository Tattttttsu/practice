import styles from './Hero.module.scss'

import { Container } from '@/shared/ui/Container/Container'
import { Header } from './Header/Header'
import { SearchForm } from './Header/SearchForm/SearchForm'

import heroBg from '@/shared/assets/images/hero-bg.png'

export const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Container>
        <Header />

        <div className={styles.content}>
          <h1 className={styles.title}>
            Насладись прогулкой в горах
            <br />
            с командой единомышленников
          </h1>

          <SearchForm />
        </div>
      </Container>
    </section>
  )
}