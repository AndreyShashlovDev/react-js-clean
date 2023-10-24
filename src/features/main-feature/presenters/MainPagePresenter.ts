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
  }

  public openCounterPage(): void {
    this.router.openCounterPage()
  }
}
