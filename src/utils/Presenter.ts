export interface Presenter<T> {

  view?: T

  setView(view: T): void
}
