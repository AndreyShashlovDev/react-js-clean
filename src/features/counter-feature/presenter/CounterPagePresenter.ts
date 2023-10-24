import { Presenter } from '../../../utils/Presenter'
import { DecreaseCounterInteractor } from '../interactor/DecreaseCounterInteractor'
import { FetchCounterInteractor } from '../interactor/FetchCounterInteractor'
import { IncreaseCounterInteractor } from '../interactor/IncreaseCounterInteractor'
import { CounterPageRouter } from '../router/CounterPageRouter'
import { CounterPageViewInterface } from './CounterPageViewInterface'

export class CounterPagePresenter implements Presenter<CounterPageViewInterface> {

  public view?: CounterPageViewInterface

  constructor(
    private readonly increaseCounterInteractor: IncreaseCounterInteractor,
    private readonly decreaseCounterInteractor: DecreaseCounterInteractor,
    private readonly fetchCounterInteractor: FetchCounterInteractor,
    private readonly router: CounterPageRouter,
  ) {}

  public setView(view: CounterPageViewInterface): void {
    this.view = view
  }

  public fetchCounter(): void {
    this.view?.showLoading(true)

    this.fetchCounterInteractor.invoke({})
      .then(counter => this.view?.setCounter(counter))
      .finally(() => this.view?.showLoading(false))
  }

  public increaseCounter(): void {
    this.view?.showLoading(true)

    this.increaseCounterInteractor.invoke({})
      .then(counter => this.view?.setCounter(counter))
      .finally(() => this.view?.showLoading(false))
  }

  public decreaseCounter(): void {
    this.view?.showLoading(true)

    this.decreaseCounterInteractor.invoke({})
      .then(counter => this.view?.setCounter(counter))
      .finally(() => this.view?.showLoading(false))
  }

  public moveToMain(): void {
    this.router.back()
  }
}
