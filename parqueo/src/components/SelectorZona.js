import { useDispatch } from 'react-redux';
import { seleccionarZona } from '../store/actions';

const SelectorZona = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(seleccionarZona(e.target.value));
  };

  return (
    <select className="form-select" onChange={handleChange}>
      <option value="cubierto">Cubierto</option>
      <option value="descubierto">Descubierto</option>
      <option value="vip">VIP</option>
    </select>
  );
};

export default SelectorZona;
