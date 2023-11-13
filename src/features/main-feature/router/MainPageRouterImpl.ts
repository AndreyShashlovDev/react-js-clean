import { BasicRouter } from '../../../common/router/BasicRouter'
import { MainPageRouter } from './MainPageRouter'

export class MainPageRouterImpl extends MainPageRouter {

  public openCounterPage(): void {
    BasicRouter.router.navigate('/counters')
  }

  public openPhonebookPage(): void {
    BasicRouter.router.navigate('/phonebook')
  }
}
