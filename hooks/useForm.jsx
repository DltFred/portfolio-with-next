import { useState } from "react"

export const useForm = ({ initialValues, validator }) => {
  const [form, setForm] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit!!!')
  }
  const handleBlur = (e) => {
    handleChange(e)
    setErrors(validator(form))
  }

  return {
    form,
    errors,
    loading,
    handleChange,
    handleSubmit,
    handleBlur
  }
}
