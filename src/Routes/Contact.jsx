import React from 'react'
import Form from '../Components/Form'
import {useContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state: { theme } } = useContextGlobal();
  return (
    <div className={`px-5 py-3 ${theme === "light" ? "bg-white" : "bg-secondary"}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact