import { useState } from "react"

export const useField = (init) => {

  const [value, setValue] = useState(init)
  const handleChange = (e) => {
    setValue({ ...value, value: e.target.value })
  }
  return {
    type: value.type,
    label: value.label,
    value: value.value,
    onChange: handleChange
  }
}
