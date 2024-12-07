import  React, {useState}  from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (userData.nombre.trim().length > 5 && emailRegex.test(userData.email)) {
      console.log(userData);
      setMensaje("Gracias "+userData.nombre+", te contactaremos cuando antes vía mail");
    }else{
      setMensaje("Por favor verifique su información nuevamente");
    }
  };

  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={userData.nombre}
            onChange={handleChange}
        />
        <input
            type="email"
            name="email"
            placeholder="Ingresa tu correo"
            value={userData.email}
            onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && (
        <h5>{mensaje}</h5>
      )}
    </div>
  );
};

export default Form;
