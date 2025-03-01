export const reservarEspacio = (id) => ({
    type: 'RESERVAR_ESPACIO',
    payload: id,
  });
  
  export const seleccionarZona = (zona) => ({
    type: 'SELECCIONAR_ZONA',
    payload: zona,
  });
  