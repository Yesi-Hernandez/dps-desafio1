import { useEffect, useState, useIsomorphicLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reservarEspacio } from '../store/actions';

const Espacio = ({ espacio }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const dispatch = useDispatch();

  useIsomorphicLayoutEffect(() => {
    // Marcar como hidratado después de la primera renderización
    setIsHydrated(true);
  }, []);

  const handleReserve = () => {
    dispatch(reservarEspacio(espacio.id));
  };

  return (
    <div>
      {isHydrated ? (
        <button
          className={`btn m-2 ${espacio.disponible ? 'btn-success' : 'btn-danger'}`}
          onClick={espacio.disponible ? handleReserve : null}
          disabled={!espacio.disponible}
        >
          {espacio.nombre}
        </button>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Espacio;
