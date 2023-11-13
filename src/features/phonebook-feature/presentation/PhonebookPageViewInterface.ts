export interface PhonebookPageViewInterface {

  setTitle(title: string): void

  setIsLoading(visibile: boolean): void

  setPhonebookList(list: []): void

  showIsEmpty(visible: boolean): void
}
