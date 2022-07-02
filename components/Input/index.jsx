import style from './index.module.css'
export const Input = ({ label, type, value, onChange }) => {

  return (
    <label className={style.label}>
      {label}
      {
        label.toUpperCase().includes('MESSAGE')
          ?
          <textarea
            className={`${style.input} ${style.textArea}`}
            value={value}
            onChange={onChange}
          />
          : <input className={style.input}
            type={type}
            name={type}
            value={value}
            onChange={onChange}
          />
      }
    </label>
  )
}
