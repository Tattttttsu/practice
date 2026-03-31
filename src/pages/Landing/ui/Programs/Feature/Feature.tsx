import styles from './Feature.module.scss'

type Props = {
  icon: string
  title: string
  text: string
}

export const Feature = ({ icon, title, text }: Props) => {
  return (
    <div className={styles.feature}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={title} />
      </div>
      <div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureText}>{text}</p>
      </div>
    </div>
  )
}