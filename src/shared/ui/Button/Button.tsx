import styles from './Button.module.scss'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit'
}

export const Button = ({ children, type = 'button' }: Props) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  )
}