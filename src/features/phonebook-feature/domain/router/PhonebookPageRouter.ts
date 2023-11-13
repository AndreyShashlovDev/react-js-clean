import { BasicRouter } from '../../../../common/router/BasicRouter'

export abstract class PhonebookPageRouter extends BasicRouter {

  public abstract openCounterPage(): void

  public abstract back(): void
}
