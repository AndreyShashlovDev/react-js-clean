import { Presenter } from '../../../utils/Presenter'
import { PhonebookPageRouter } from '../domain/router/PhonebookPageRouter'
import { PhonebookPageViewInterface } from './PhonebookPageViewInterface'

export class PhonebookPagePresenter implements Presenter<PhonebookPageViewInterface> {

  public view?: PhonebookPageViewInterface

  constructor(
    private readonly router: PhonebookPageRouter,
  ) {}

  public setView(view: PhonebookPageViewInterface): void {
    this.view = view
    this.view.setTitle('Phonebook page')
  }

  public openCounterPage(): void {
    this.router.openCounterPage()
  }

  public back(): void {
    this.router.back()
  }
}
