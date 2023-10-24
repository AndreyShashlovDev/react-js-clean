import { Interactor } from '../../../utils/Interactor'
import { InteractorParams } from '../../../utils/InteractorParams'
import { CounterRepository } from '../repository/counters/CounterRepository'

export interface Params extends InteractorParams {

}

export class IncreaseCounterInteractor extends Interactor<Params, number> {

  constructor(private readonly counterRepository: CounterRepository) {super()}

  public async invoke(params: Params): Promise<number> {
    const currentValue = await this.counterRepository.getCounter()
    const increasedValue = Math.min(10, currentValue + 1)

    return this.counterRepository.updateCounter(increasedValue)
  }
}
