import { PhonebookContactModel } from '../../domain/model/PhonebookContactModel'

export interface ContactItemViewProps {
  item: PhonebookContactModel
}

export const ContactItemView = ({ item }: ContactItemViewProps) => {
  return <div>{item.name}</div>
}

export default ContactItemView
