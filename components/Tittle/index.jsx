import style from './index.module.css'
export const Tittle = ({ children }) => {
  return (
    <h2 className={style.h2}>
      {children}
    </h2>
  )
}
