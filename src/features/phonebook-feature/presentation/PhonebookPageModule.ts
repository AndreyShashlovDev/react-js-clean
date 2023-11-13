import { Factory, injectionKernel } from '../../../Injection'
import { PhonebookPagePresenter } from './PhonebookPagePresenter'
import { PhonebookPageRouterImpl } from '../domain/router/PhonebookPageRouterImpl'

injectionKernel.set(
  PhonebookPagePresenter,
  new Factory<PhonebookPagePresenter>(
    () => new PhonebookPagePresenter(new PhonebookPageRouterImpl()),
    false,
  ),
)
