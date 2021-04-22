import defaultState from './state'

export default {
  increment(state: typeof defaultState) {
    return state.count++
  }
}
