const initialState = {}

export default function(state=initialState, action){
  switch (action.type) {
    case 'GET_OFFICES':
      return [...state]
    case 'GET_OFFICES_FULFILLED':
      return [...state,action.payload]
      break
  }
  return state
}
