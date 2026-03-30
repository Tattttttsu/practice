import styles from './Travel.module.scss'
import { TravelBlogCard } from './TravelBlogCard'

import Italy from '@/shared/assets/images/Italy.png'
import Alone from '@/shared/assets/images/Alone.png'
import India from '@/shared/assets/images/India.png'
import Plane from '@/shared/assets/images/Plane.png'

import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'


export const Travel = () => {
    return (
        <section className={styles.blog}>
            <Container>
                <h3 className={styles.subtitle}>делимся впечатлениями</h3>
                <h2 className={styles.title}>Блог о путешествиях</h2>
                <div className={styles.blogsList}>
                    <TravelBlogCard
                        image={Italy}
                        title="Красивая Италия, какая она в реальности?"
                        description="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
                        date="01/04/2023"
                        dateTime="2023-04-01"
                    />
                    <TravelBlogCard
                        image={Plane}
                        title="Долой сомнения! Весь мир открыт для вас!"
                        description="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ..."
                        date="01/04/2023"
                        dateTime="2023-04-01"
                    />
                    <TravelBlogCard
                        image={Alone}
                        title="Как подготовиться к путешествию в одиночку? "
                        description="Для современного мира базовый вектор развития предполагает."
                        date="01/04/2023"
                        dateTime="2023-04-01"
                    />
                    <TravelBlogCard
                        image={India}
                        title="Индия ... летим?"
                        description="Для современного мира базовый."
                        date="01/04/2023"
                        dateTime="2023-04-01"
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <Button>Наш pinterest</Button>
                </div>
            </Container>
        </section>
    )
}