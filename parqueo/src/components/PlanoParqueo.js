import Espacio from './Espacio';

const PlanoParqueo = ({ espacios }) => {
  return (
    <div className="d-flex flex-wrap">
      {espacios.map((espacio) => (
        <Espacio key={espacio.id} espacio={espacio} />
      ))}
    </div>
  );
};

export default PlanoParqueo;
