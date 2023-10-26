export interface AppHeaderViewProps {
  title: string
}

export const AppHeaderView = ({ title }: AppHeaderViewProps) => {
  return <h1>{title}</h1>
}
