const counterReducer = (state = 10, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return state = state + action.payload;
    default:
      return state
  }
}

export default counterReducer;