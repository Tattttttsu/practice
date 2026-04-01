import styles from './TravelBlogCard.module.scss'

type Props = {
  image: string
  title: string
  description: string
  date: string
  dateTime: string
}

export const TravelBlogCard = ({
  image,
  title,
  description,
  date,
  dateTime,
}: Props) => {
  return (
    <article className={styles.blogitem}>
      <img src={image} alt={title} />
      <div className={styles.blogtext}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className={styles.blogdown}>
          <time className={styles.blogdate} dateTime={dateTime}>
            {date}
          </time>
          <a className={styles.bloglink} href="#">
            читать статью
          </a>
        </div>
      </div>
    </article>
  )
}