import { getRandomNumber } from '../../../../utils/GetRandomNumber'

export class DataSourceLocalStorage {

  public async save<T>(key: string, value: T): Promise<void> {
    await new Promise<void>((resolve => setTimeout(() => resolve(), getRandomNumber(100, 300))))

    localStorage.setItem(key, JSON.stringify(value))
  }

  public async getRaw<T>(key: string): Promise<T | undefined> {
    await new Promise<void>((resolve => setTimeout(() => resolve(), getRandomNumber(300, 500))))

    try {
      const data = localStorage.getItem(key)

      return data ? JSON.parse(data) : undefined
    } catch (e) {
      // ignore
    }
  }

  public async removeKey(key: string): Promise<void> {
    await new Promise<void>((resolve => setTimeout(() => resolve(), getRandomNumber(100, 300))))

    localStorage.removeItem(key)
  }
}
