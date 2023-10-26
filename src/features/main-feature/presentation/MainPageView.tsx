import { useEffect, useState } from 'react'
import { AppHeaderView } from '../../../common/presentation/component/AppHeaderView'
import { getDIValue } from '../../../Injection'
import './MainPageModule'
import { MainPagePresenter } from './MainPagePresenter'

export const MainPageView = () => {

  const [presenter] = useState<MainPagePresenter>(() => getDIValue(MainPagePresenter))
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    presenter.setView({
      setTitle,
    })
  }, [presenter])

  if (!title) {
    return <></>
  }

  return <div>
    <AppHeaderView title={title} />
    <button onClick={() => presenter.openCounterPage()}>Show Counter page</button>
  </div>
}
