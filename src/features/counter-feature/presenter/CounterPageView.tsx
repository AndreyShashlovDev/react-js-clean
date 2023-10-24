import { useEffect, useState } from 'react'
import { getDIValue } from '../../../Injection'
import './CounterPageModule'
import { CounterPagePresenter } from './CounterPagePresenter'

export const CounterPageView = () => {

  const [presenter] = useState<CounterPagePresenter>(() => getDIValue(CounterPagePresenter))
  const [counter, setCounter] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>()

  useEffect(() => {
    presenter.setView({
      setCounter: setCounter,
      showLoading: setIsLoading,
    })

    presenter.fetchCounter()
  }, [presenter])

  return <div>
    <h1>Counter values</h1>
    {
      isLoading
        ? 'Loading. Please wait...'

        : (
          <>
            <div>counter is: {counter}</div>
            <button onClick={() => presenter.decreaseCounter()}>decrease</button>
            <button onClick={() => presenter.increaseCounter()}>increase</button>
            <div />
            <button onClick={() => presenter.moveToMain()}>back</button>
          </>
        )
    }

  </div>
}
