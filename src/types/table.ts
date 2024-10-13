import { ReactElement } from 'react'
import { TableCellProps } from '@nextui-org/react'

export type TableColumns<T extends { id: string }> = {
  key: keyof T
  name: string
  render: (item: T) => ReactElement<TableCellProps>
}[]
