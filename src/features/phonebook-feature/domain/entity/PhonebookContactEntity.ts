export class PhonebookContactEntity {

  public readonly id: string
  public readonly name: string
  public readonly phone: string
  public readonly createdAt: string // some external service data
  public readonly updatedAt: string // some external service data

  constructor(id: string, name: string, phone: string, createdAt: string, updatedAt: string) {
    this.id = id
    this.name = name
    this.phone = phone
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
