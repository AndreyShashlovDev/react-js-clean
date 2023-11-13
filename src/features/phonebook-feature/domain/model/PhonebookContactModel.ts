import { PhonebookContactEntity } from '../entity/PhonebookContactEntity'

export class PhonebookContactModel {

  public static valueOfEntity(entity: PhonebookContactEntity): PhonebookContactModel {
    return new PhonebookContactModel(
      entity.id,
      entity.name,
      entity.phone,
    )
  }

  public readonly id: string
  public readonly name: string
  public readonly phone: string

  constructor(id: string, name: string, phone: string) {
    this.id = id
    this.name = name
    this.phone = phone
  }
}
