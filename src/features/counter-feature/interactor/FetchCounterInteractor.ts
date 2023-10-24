import { Interactor } from '../../../utils/Interactor'
import { InteractorParams } from '../../../utils/InteractorParams'
import { CounterRepository } from '../repository/counters/CounterRepository'

export interface Params extends InteractorParams {

}

export class FetchCounterInteractor extends Interactor<Params, number> {

  constructor(private readonly counterRepository: CounterRepository) {super()}

  public invoke(params: Params): Promise<number> {
    return this.counterRepository.getCounter()
  }
}
