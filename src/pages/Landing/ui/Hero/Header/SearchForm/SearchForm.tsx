import styles from './SearchForm.module.scss'

export const SearchForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Локация для тура
          </option>
          <option value="altai">Алтай</option>
          <option value="dagestan">Дагестан</option>
          <option value="elbrus">Эльбрус</option>
        </select>
        <span className={styles.hint}>выберите из списка</span>
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          type="text"
          placeholder="Дата похода"
        />
        <span className={styles.hint}>укажите диапазон</span>
      </div>

      <div className={styles.field}>
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Участники
          </option>
          <option value="4">4 человека</option>
          <option value="5">5 человек</option>
          <option value="6">6 человек</option>
        </select>
        <span className={styles.hint}>минимум 4 человека</span>
      </div>

      <button type="submit" className={styles.button}>
        Найти программу
      </button>
    </form>
  )
}