import defaultState from './state'

export default {
  double(state: typeof defaultState) {
    return state.count * 2
  }
}
