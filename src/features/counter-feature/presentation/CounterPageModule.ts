import { DataSourceLocalStorage } from '../../../common/repository/source/local-storage/DataSourceLocalStorage'
import { Factory, getDIValue, injectionKernel } from '../../../Injection'
import { DecreaseCounterInteractor } from '../interactor/DecreaseCounterInteractor'
import { FetchCounterInteractor } from '../interactor/FetchCounterInteractor'
import { IncreaseCounterInteractor } from '../interactor/IncreaseCounterInteractor'
import { CounterRepository } from '../repository/counters/CounterRepository'
import { CounterRepositoryImpl } from '../repository/counters/CounterRepositoryImpl'
import { CounterPageRouterImpl } from '../router/CounterPageRouterImpl'
import { CounterPagePresenter } from './CounterPagePresenter'

injectionKernel.set(
  CounterRepository,
  new Factory<CounterRepository>(
    () => new CounterRepositoryImpl(getDIValue(DataSourceLocalStorage)),
    false,
  ),
)

injectionKernel.set(
  CounterPagePresenter,
  new Factory<CounterPagePresenter>(
    () => new CounterPagePresenter(
      new IncreaseCounterInteractor(getDIValue(CounterRepository)),
      new DecreaseCounterInteractor(getDIValue(CounterRepository)),
      new FetchCounterInteractor(getDIValue(CounterRepository)),
      new CounterPageRouterImpl(),
    ),
    false,
  ),
)
