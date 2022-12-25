import React, { useState } from 'react'

const FormComp = (props) => {
  const { initTitle, initPrice, initDescription, onSubmitProp, errors } = props
  const [title, setTitle] = useState(initTitle)
  const [price, setPrice] = useState(initPrice)
  const [description, setDescription] = useState(initDescription)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitProp({ title, price, description })
    setTitle("")
    setPrice("")
    setDescription("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}

        <input type="text" placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='Enter Desc' value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FormComp