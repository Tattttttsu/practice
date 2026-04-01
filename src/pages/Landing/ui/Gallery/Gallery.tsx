import styles from './Gallery.module.scss'

import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'

import gallery1 from '@/shared/assets/images/Sky.png'
import gallery2 from '@/shared/assets/images/map.png'
import gallery3 from '@/shared/assets/images/Dubai.png'
import gallery4 from '@/shared/assets/images/boat.png'
import gallery5 from '@/shared/assets/images/usamount.png'
import gallery6 from '@/shared/assets/images/notebook.png'

export const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <Container>
        <h3 className={styles.subtitle}>Фото-отчет</h3>
        <h2 className={styles.title}>Делимся впечатлениями</h2>

        <div className={styles.gallery}>
          <img
            src={gallery1}
            alt="Фото путешествия 1"
            className={styles.item1}
          />
          <img
            src={gallery2}
            alt="Фото путешествия 2"
            className={styles.item2}
          />
          <img
            src={gallery3}
            alt="Фото путешествия 3"
            className={styles.item3}
          />
          <img
            src={gallery4}
            alt="Фото путешествия 4"
            className={styles.item4}
          />
          <img
            src={gallery5}
            alt="Фото путешествия 5"
            className={styles.item5}
          />
          <img
            src={gallery6}
            alt="Фото путешествия 6"
            className={styles.item6}
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button>Наш pinterest</Button>
        </div>
      </Container>
    </section>
  )
}