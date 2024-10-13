import { stackComponentsTableColumns } from './stackComponentsTableConfig'
import DataTable from '@/components/DataTable/DataTable'
import { useStackComponents } from '@/hooks/stackComponentHooks'

export default function StacksTable() {
  const { data, isLoading } = useStackComponents()

  return (
    <DataTable
      columns={stackComponentsTableColumns}
      data={data}
      isLoading={isLoading}
    />
  )
}
