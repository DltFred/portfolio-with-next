import { Form } from '../modules/Form'
import style from '../styles/ContactMe.module.css'
export default function ContactMe() {
  const INITIAL_VALUES = {
    email: '',
    message: ''
  }
  const validator = (form) => {
    console.log(form)
    let errors = {}
    if (!form.email) {
      errors.email = 'Email is required'
    }
    if (!form.message) {
      errors.message = 'Message is required'
    }
    return errors
  }
  return (
    <div className={style.contactMe}>
      <Form initialValues={INITIAL_VALUES} validator={validator} />
    </div>
  )
}
