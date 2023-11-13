import { Presenter } from '../../../utils/Presenter'
import { MainPageRouter } from '../router/MainPageRouter'
import { MainPageViewInterface } from './MainPageViewInterface'

export class MainPagePresenter implements Presenter<MainPageViewInterface> {

  public view?: MainPageViewInterface

  constructor(
    private readonly router: MainPageRouter,
  ) {}

  public setView(view: MainPageViewInterface): void {
    this.view = view
    this.view.setTitle('ReactJs Clean architecture + MVP')
  }

  public openCounterPage(): void {
    this.router.openCounterPage()
  }

  public openPhonebookPage() {
    this.router.openPhonebookPage()
  }
}
