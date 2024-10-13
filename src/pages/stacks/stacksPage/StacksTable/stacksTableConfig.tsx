import { TableCell } from '@nextui-org/react'
import dayjs from 'dayjs'
import { Stack } from '@/types/stack'
import { TableColumns } from '@/types/table'

export const stacksTableColumns: TableColumns<Stack> = [
  {
    key: 'name',
    name: 'Name',
    render: item => (
      <TableCell className='py-3 font-semibold'>{item.name}</TableCell>
    ),
  },
  {
    key: 'created',
    name: 'Created at',
    render: item => (
      <TableCell className='py-3'>
        {dayjs(item.created).format('DD/MM/YYYY, HH:mm')}
      </TableCell>
    ),
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
