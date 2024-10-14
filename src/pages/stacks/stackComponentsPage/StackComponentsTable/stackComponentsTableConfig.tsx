import { TableCell } from '@nextui-org/react'
import dayjs from 'dayjs'
import { StackComponent } from '@/types/stackComponent'
import { TableColumns } from '@/types/table'

export const stackComponentsTableColumns: TableColumns<StackComponent> = [
  {
    key: 'name',
    name: 'Name',
    render: item => (
      <TableCell className='py-3 font-semibold'>{item.name}</TableCell>
    ),
  },
  {
    key: 'type',
    name: 'Type',
    render: item => <TableCell className='py-3'>{item.type}</TableCell>,
  },
  {
    key: 'flavor',
    name: 'Flavor',
    render: item => <TableCell className='py-3'>{item.flavor}</TableCell>,
  },
  {
    key: 'updated',
    name: 'Updated at',
    render: item => (
      <TableCell className='py-3'>
        {dayjs(item.updated).format('DD/MM/YYYY, HH:mm')}
      </TableCell>
    ),
  },
]
