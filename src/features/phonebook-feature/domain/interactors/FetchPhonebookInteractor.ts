import { Interactor } from '../../../../utils/Interactor'
import { InteractorParams } from '../../../../utils/InteractorParams'
import { PhonebookRepository } from '../../repository/phonebook/PhonebookRepository'
import { PhonebookContactModel } from '../model/PhonebookContactModel'

export interface Params extends InteractorParams {

}

export class FetchPhonebookInteractor extends Interactor<Params, PhonebookContactModel[]> {

  constructor(private readonly phonebookRepository: PhonebookRepository) {
    super()
  }

  public async invoke(params: Params): Promise<PhonebookContactModel[]> {
    const result = await this.phonebookRepository.getAllContacts()

    return result.map(PhonebookContactModel.valueOfEntity)
  }
}
