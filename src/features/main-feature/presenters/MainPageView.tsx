import { useEffect, useState } from 'react'
import { getDIValue } from '../../../Injection'
import './MainPageModule'
import { MainPagePresenter } from './MainPagePresenter'

export const MainPageView = () => {

  const [presenter] = useState<MainPagePresenter>(() => getDIValue(MainPagePresenter))

  useEffect(() => {
    presenter.setView({})
  }, [presenter])

  return <div>
    <h1>ReactJs Clean architecture + MVP</h1>
    <button onClick={() => presenter.openCounterPage()}>Show Counter page</button>
  </div>
}
