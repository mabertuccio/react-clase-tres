import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// Crear el contexto
const CacheContext = createContext();

// Reducer para manejar el estado de la caché
const cacheReducer = (state, action) => {
  switch (action.type) {
    case "SET_CACHE":
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

// Proveedor del contexto
export const CacheProvider = ({ children }) => {
  const [cache, dispatch] = useReducer(cacheReducer, {});

  return (
    <CacheContext.Provider value={{ cache, dispatch }}>
      {children}
    </CacheContext.Provider>
  );
};

// Definir el tipo de `children` usando PropTypes
CacheProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exportar el contexto
export default CacheContext;
