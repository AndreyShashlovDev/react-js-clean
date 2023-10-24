export abstract class CounterRepository {

  public abstract updateCounter(value: number): Promise<number>

  public abstract getCounter(): Promise<number>
}
