const initialState = {
    espacios: [
      { id: 1, nombre: 'Espacio 1', disponible: true },
      { id: 2, nombre: 'Espacio 2', disponible: false },
     
    ],
    reserva: {},
  };
  
  export const espaciosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESERVAR_ESPACIO':
        // Lógica para reservar espacio
        return {
          ...state,
          reserva: {
            espacio: action.payload,
            duracion: 2, // Ejemplo de duración
            total: 20, // Ejemplo de total
          },
        };
      case 'SELECCIONAR_ZONA':
        // Lógica para seleccionar zona
        return state;
      default:
        return state;
    }
  };
  