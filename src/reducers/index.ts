const actions = {
  ['INCREMENT'](state) {
    return state.number + 1;
  },
  ['DECREMENT'](state) {
    return state.number - 1;
  }
};

const initialState = {
  number: 1,
};

export default function reducer(state = initialState, action: object) {
  if (action.type in actions) {
    return actions[action.type](state, action);
  }

  return state;
}
