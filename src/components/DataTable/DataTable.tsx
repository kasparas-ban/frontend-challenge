import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableProps,
} from '@nextui-org/react'
import { TableColumns } from '@/types/table'

type DataTableProps<T extends { id: string }> = TableProps & {
  columns: TableColumns<T>
  isLoading: boolean
  data?: T[]
}

export default function DataTable<T extends { id: string }>(
  props: DataTableProps<T>
) {
  const { columns, data, isLoading, ...tableProps } = props

  return (
    <Table removeWrapper fullWidth {...tableProps}>
      <TableHeader>
        {columns.map(col => (
          <TableColumn
            key={col.key.toString()}
            className='border-b border-gray-300 bg-transparent text-[13px]'
          >
            {col.name}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody
        emptyContent={<span className='text-sm'>No data</span>}
        loadingContent={<LoadingSpinner />}
        loadingState={isLoading ? 'loading' : 'idle'}
      >
        {data?.map(row => (
          <TableRow
            key={row.id}
            className='cursor-pointer transition-colors duration-100 hover:bg-gray-200'
          >
            {columns.map(col => col.render(row))}
          </TableRow>
        )) || []}
      </TableBody>
    </Table>
  )
}
