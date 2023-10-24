import { Factory, injectionKernel } from '../../../Injection'
import { MainPagePresenter } from './MainPagePresenter'
import { MainPageRouterImpl } from '../router/MainPageRouterImpl'

injectionKernel.set(
  MainPagePresenter,
  new Factory<MainPagePresenter>(
    () => new MainPagePresenter(new MainPageRouterImpl()),
    false,
  ),
)
