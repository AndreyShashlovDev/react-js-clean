import { DataSourceLocalStorage } from '../../../../common/repository/source/local-storage/DataSourceLocalStorage'
import { CounterRepository } from './CounterRepository'

export class CounterRepositoryImpl extends CounterRepository {

  private static readonly COUNTER_KEY = 'EXAMPLE_COUNTER_KEY'

  constructor(private readonly localStorage: DataSourceLocalStorage) {super()}

  public async getCounter(): Promise<number> {
    const result = await this.localStorage.getRaw<number>(CounterRepositoryImpl.COUNTER_KEY)

    return result ?? 0
  }

  public async updateCounter(value: number): Promise<number> {
    await this.localStorage.save<number>(CounterRepositoryImpl.COUNTER_KEY, value)
    return value
  }
}
