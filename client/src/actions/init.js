export const INIT = "INIT"

// use it to init pouchdbMiddleware
export const initPouch = () => {
  return { type: INIT, payload: {} }
}
