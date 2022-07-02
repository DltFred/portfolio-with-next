import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import { useForm } from '../../hooks/useForm'
import style from './index.module.css'
export const Form = ({ initialValues, validator }) => {
  const { loading, errors, form, handleBlur, handleChange, handleSubmit } = useForm({ initialValues, validator })

  return (
    <form
      onSubmit={handleSubmit}
      className={style.form}>
      <Title>Contact me </Title>
      <Input
        label='Email'
        type='email'
        value={form.email}
        onChange={handleChange}
        onBlur={handleBlur}
        onError={errors.email}
      />
      <Input
        label='Message'
        type='text'
        value={form.message}
        onChange={handleChange}
        onBlur={handleBlur}
        onError={errors.message}
      />
      <Button
        styles={{ width: '10rem' }}
        type='orange-fill'
      >
        Send
      </Button>
    </form>
  )
}
