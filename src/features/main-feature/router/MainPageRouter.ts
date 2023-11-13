import { BasicRouter } from '../../../common/router/BasicRouter'

export abstract class MainPageRouter extends BasicRouter {

  public abstract openCounterPage(): void

  public abstract openPhonebookPage(): void
}
