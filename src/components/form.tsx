import React, { useState } from "react";
import { agregarPerfil, AgregarPerfilRespuesta } from "../app/utils";

const Form: React.FC = () => {
  const [nombrePerfil, setNombrePerfil] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombrePerfil(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const respuesta: AgregarPerfilRespuesta = await agregarPerfil({
        nombre: nombrePerfil,
      });
      setMensaje(respuesta.mensaje);
      setNombrePerfil(""); // Clear the input field after successful submission
      window.location.reload(); // Refresh the page xq sino solo aparecia el msj "cargado con exito"
    } catch (error) {
      setMensaje("Error agregando perfil");
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nombrePerfil">Nombre del Perfil:</label>
          <input
            type="text"
            id="nombrePerfil"
            value={nombrePerfil}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">
          Agregar Perfil
        </button>
      </form>
      {mensaje && <p className="form-message">{mensaje}</p>}
    </div>
  );
};

export default Form;
