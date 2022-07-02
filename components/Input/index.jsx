import style from './index.module.css'
export const Input = ({ label, type, value, onChange, onBlur, onError }) => {

  return (
    <label className={style.label}>
      {label}
      {
        label.toUpperCase().includes('MESSAGE')
          ?
          <textarea
            name='message'
            className={`${style.input} ${style.textArea}`}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          : <input className={style.input}
            type={type}
            name={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
      }
      {
        onError && <span className={style.error}>{onError}</span>
      }
    </label>
  )
}
