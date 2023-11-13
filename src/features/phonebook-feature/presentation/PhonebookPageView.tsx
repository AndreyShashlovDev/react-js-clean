import { useEffect, useState } from 'react'
import { AppHeaderView } from '../../../common/presentation/component/AppHeaderView'
import { getDIValue } from '../../../Injection'
import { ContactItemView } from './component/ContactItemView'
import './PhonebookPageModule'
import { PhonebookPagePresenter } from './PhonebookPagePresenter'

export const PhonebookPageView = () => {

  const [presenter] = useState<PhonebookPagePresenter>(() => getDIValue(PhonebookPagePresenter))
  const [title, setTitle] = useState<string>('')
  const [phonebookList, setPhonebookList] = useState([])
  const [phonebookLoading, setPhonebookLoading] = useState<boolean>(true)
  const [showIsEmpty, setShowIsEmpty] = useState<boolean>(false)
  useEffect(() => {
    presenter.setView({
      setTitle,
      setIsLoading: setPhonebookLoading,
      setPhonebookList,
      showIsEmpty: setShowIsEmpty,
    })
  }, [presenter])

  if (!title) {
    return <></>
  }

  return <div>
    <AppHeaderView title={title} />
    <div>
      {phonebookLoading && <div>Loading...</div>}
      {showIsEmpty && <div>List is empty</div>}
      <div>
        {phonebookList.map(item => <ContactItemView item={item} />)}
      </div>
    </div>
    <div>
      <button onClick={() => presenter.openCounterPage()}>To Counter page</button>
    </div>
    <div>
      <button onClick={() => presenter.back()}>To main page</button>
    </div>
    <div>
      <button onClick={() => alert('not implemented yet')}>Add new contact</button>
    </div>
  </div>
}

export default PhonebookPageView
