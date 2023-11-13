import { PhonebookContactEntity } from '../../domain/entity/PhonebookContactEntity'

export abstract class PhonebookRepository {

  public abstract getAllContacts(): Promise<PhonebookContactEntity[]>

  public abstract createContact(param: { phone: string; name: string }): Promise<PhonebookContactEntity>
}
