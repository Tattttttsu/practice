import styles from './Gallery.module.scss'

export const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h3 className={styles.subtitle}>фото-отчет</h3>
            <h2 className={styles.title}>Делимся впечатлениями</h2>
            <div className={styles.gallery}>
                <img src="" className={styles.big} />
                <img src="" />
                <img src="" />

                <img src="" />
                <img src="" className={styles.big} />
                <img src="" />
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>
                    Наш pinterest
                </button>
            </div>
        </section>
    )
}