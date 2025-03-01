const ResumenReserva = ({ reserva }) => {
  return (
    <div className="alert alert-info">
      <h4>Resumen de Reserva</h4>
      <p>Espacio: {reserva.espacio}</p>
      <p>Duración: {reserva.duracion} horas</p>
      <p>Total: ${reserva.total}</p>
    </div>
  );
};

export default ResumenReserva;
