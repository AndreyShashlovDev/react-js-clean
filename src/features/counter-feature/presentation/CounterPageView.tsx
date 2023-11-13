import { useEffect, useState } from 'react'
import { AppHeaderView } from '../../../common/presentation/component/AppHeaderView'
import { getDIValue } from '../../../Injection'
import './CounterPageModule'
import { CounterPagePresenter } from './CounterPagePresenter'

export const CounterPageView = () => {

  const [presenter] = useState<CounterPagePresenter>(() => getDIValue(CounterPagePresenter))
  const [counter, setCounter] = useState<number>(0)
  const [title, setTitle] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    presenter.setView({
      setCounter,
      setTitle,
      showLoading: setIsLoading,
    })

    presenter.fetchCounter()
  }, [presenter])

  if (!title) {
    return <></>
  }

  return <div>
    <AppHeaderView title={title}></AppHeaderView>
    {
      isLoading
        ? 'Loading. Please wait...'

        : (
          <>
            <div>counter is: {counter}</div>
            <button onClick={() => presenter.decreaseCounter()}>decrease</button>
            <button onClick={() => presenter.increaseCounter()}>increase</button>
            <div />
            <button onClick={() => presenter.moveToMain()}>To main page</button>
          </>
        )
    }

  </div>
}

export default CounterPageView
