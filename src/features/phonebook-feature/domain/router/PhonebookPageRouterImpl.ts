import { BasicRouter } from '../../../../common/router/BasicRouter'
import { PhonebookPageRouter } from './PhonebookPageRouter'

export class PhonebookPageRouterImpl extends PhonebookPageRouter {

  public openCounterPage(): void {
    BasicRouter.router.navigate('/counters')
  }

  public back(): void {
    BasicRouter.router.navigate('/')
  }
}
