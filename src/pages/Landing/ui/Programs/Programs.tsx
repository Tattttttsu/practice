import styles from './Programs.module.scss'
import MarkaIcon from '@/shared/api/assets/icons/marka.svg'
import PeopleIcon from '@/shared/api/assets/icons/people.svg'
import SheetsIcon from '@/shared/api/assets/icons/sheets.svg'
import { info } from 'console'

export const Programs = () => {
    const {
        programs,
        container,
        content,
        info,
        title,
        subtitle,
        description,
        features,
        feature,
        iconWrapper,
        featureTitle,
        featureText,
        button,
        gallery,
        galleryImage,
    } = styles

    return (
        <section className={programs}>
            <div className={container}>
                <div className={content}>
                    <div className={info}>
                        <h3 className={subtitle}>наше предложение</h3>
                        <h2 className={title}>Лучшие программы для тебя</h2>
                        <p className={description}>
                            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
                            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
                            латыни из колледжа.
                        </p>
                        <div className={features}>
                            <div className={feature}>
                                <div className={iconWrapper}>
                                    <img src={PeopleIcon} alt="Опытный гид" />
                                </div>
                                <div>
                                    <h3 className={featureTitle}>Опытный гид</h3>
                                    <p className={featureText}>
                                        Для современного мира базовый вектор развития предполагает
                                        независимые способы реализации соответствующих условий
                                        активизации.
                                    </p>
                                </div>
                            </div>

                            <div className={feature}>
                                <div className={iconWrapper}>
                                    <img src={SheetsIcon} alt="Безопасный поход" />
                                </div>
                                <div>
                                    <h3 className={featureTitle}>Безопасный поход</h3>
                                    <p className={featureText}>
                                        Для современного мира базовый вектор развития предполагает
                                        независимые способы реализации соответствующих условий
                                        активизации.
                                    </p>
                                </div>
                            </div>

                            <div className={feature}>
                                <div className={iconWrapper}>
                                    <img src={MarkaIcon} alt="Лояльные цены" />
                                </div>
                                <div>
                                    <h3 className={featureTitle}>Лояльные цены</h3>
                                    <p className={featureText}>
                                        Для современного мира базовый вектор развития предполагает
                                        независимые способы реализации соответствующих условий
                                        активизации.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className={button}>Стоимость программ</button>
                    </div>

                    <div className={gallery}>
                        <img
                            className={galleryImage}
                            src="/images/programs/lake.png"
                            alt="Озеро в горах"
                        />
                        <img
                            className={galleryImage}
                            src="/images/programs/mount.png"
                            alt="Путешествие в горах"
                        />
                        <img
                            className={galleryImage}
                            src="/images/programs/winter.png"
                            alt="Зимняя программа"
                        />
                        <img
                            className={galleryImage}
                            src="/images/programs/summer.png"
                            alt="Летняя программа"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}