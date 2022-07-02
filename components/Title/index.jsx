import style from './index.module.css'
export const Title = ({ children }) => {
  return (
    <h2 className={style.h2}>
      {children}
    </h2>
  )
}
