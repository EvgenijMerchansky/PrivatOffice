const initialState = {}

export default function(state=initialState, action){
  switch (action.type) {
    case 'ACTION_TEST':
      return [...state, action.payload]
  }
  return state
}
