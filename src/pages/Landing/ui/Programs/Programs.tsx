import styles from './Programs.module.scss'
import MarkaIcon from '@/shared/assets/icons/marka.svg'
import PeopleIcon from '@/shared/assets/icons/people.svg'
import SheetsIcon from '@/shared/assets/icons/sheets.svg'

import Lake from '@/shared/assets/images/lake.png'
import Mount from '@/shared/assets/images/mount.png'
import Summer from '@/shared/assets/images/summer.png'
import Winter from '@/shared/assets/images/winter.png'

import { Button } from '@/shared/ui/Button/Button'
import { Container } from '@/shared/ui/Container/Container'

export const Programs = () => {


    return (
        <>
            <section className={styles.programs}>
                <Container>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            <h3 className={styles.subtitle}>наше предложение</h3>
                            <h2 className={styles.title}>Лучшие программы для тебя</h2>
                            <p className={styles.description}>
                                Его корни уходят в один фрагмент классической латыни 45 года н.э.,
                                то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
                                латыни из колледжа.
                            </p>
                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <div className={styles.iconWrapper}>
                                        <img src={PeopleIcon} alt="Опытный гид" />
                                    </div>
                                    <div>
                                        <h3 className={styles.featureTitle}>Опытный гид</h3>
                                        <p className={styles.featureText}>
                                            Для современного мира базовый вектор развития предполагает
                                            независимые способы реализации соответствующих условий
                                            активизации.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.feature}>
                                    <div className={styles.iconWrapper}>
                                        <img src={SheetsIcon} alt="Безопасный поход" />
                                    </div>
                                    <div>
                                        <h3 className={styles.featureTitle}>Безопасный поход</h3>
                                        <p className={styles.featureText}>
                                            Для современного мира базовый вектор развития предполагает
                                            независимые способы реализации соответствующих условий
                                            активизации.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.feature}>
                                    <div className={styles.iconWrapper}>
                                        <img src={MarkaIcon} alt="Лояльные цены" />
                                    </div>
                                    <div>
                                        <h3 className={styles.featureTitle}>Лояльные цены</h3>
                                        <p className={styles.featureText}>
                                            Для современного мира базовый вектор развития предполагает
                                            независимые способы реализации соответствующих условий
                                            активизации.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.buttonWrapper}>
                                <Button>Стоимость программ</Button>
                            </div>
                        </div>

                        <div className={styles.gallery}>
                            <img
                                className={styles.galleryImage}
                                src={Lake}
                                alt="Озеро в горах"
                            />
                            <img
                                className={styles.galleryImage}
                                src={Mount}
                                alt="Путешествие в горах"
                            />
                            <img
                                className={styles.galleryImage}
                                src={Winter}
                                alt="Зимняя программа"
                            />
                            <img
                                className={styles.galleryImage}
                                src={Summer}
                                alt="Летняя программа"
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}