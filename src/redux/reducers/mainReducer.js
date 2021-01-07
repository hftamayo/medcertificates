const initialState = {
  theme: 'awsmcolor',
  lang: 'es-ES',
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'main/setTheme':
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
