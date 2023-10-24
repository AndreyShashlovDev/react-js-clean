import { BasicRouter } from '../../../common/router/BasicRouter'
import { CounterPageRouter } from './CounterPageRouter'

export class CounterPageRouterImpl extends CounterPageRouter {

  public back(): void {
    BasicRouter.router.navigate('/')
  }
}
