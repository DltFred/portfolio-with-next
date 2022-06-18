import style from './index.module.css'
export const Button = ({ children, type, onClick, styles }) => {
  return (
    <button
      style={styles}
      className={`
      ${style.button} 
      ${type === 'orange-outline' ? style.orangeOutline : ''}
      ${type === 'orange-fill' ? style.orangeFill : ''}
      `}
      onClick={onClick}>
      {children}
    </button>
  )
}
