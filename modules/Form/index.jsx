import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { useField } from '../../hooks/useField'
import style from './index.module.css'
export const Form = () => {
  const nameField = useField({ type: 'email', label: 'Email', value: '' })
  const messageField = useField({ type: 'text', label: 'Message', value: '' })
  return (
    <form className={style.form}>
      <Title>Contact me </Title>
      <Input
        label={nameField.label}
        type={nameField.type}
        value={nameField.value}
        onChange={nameField.onChange}
      />
      <Input
        label={messageField.label}
        type={messageField.type}
        value={messageField.value}
        onChange={messageField.onChange}
      />
      <Button styles={{ width: '10rem' }} type='orange-fill'>
        Send
      </Button>
    </form>
  )
}
