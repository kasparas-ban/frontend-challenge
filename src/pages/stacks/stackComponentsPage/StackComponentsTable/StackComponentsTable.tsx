import { useNavigate } from 'react-router-dom'
import { stackComponentsTableColumns } from './stackComponentsTableConfig'
import DataTable from '@/components/DataTable/DataTable'
import { useStackComponents } from '@/hooks/stackComponentHooks'
import { StackComponent } from '@/types/stackComponent'

export default function StacksTable() {
  const { data, isLoading } = useStackComponents()
  const navigate = useNavigate()

  return (
    <DataTable<StackComponent>
      columns={stackComponentsTableColumns}
      data={data}
      isLoading={isLoading}
      onRowClick={item => navigate(item.id)}
      aria-label='Table listing all stack components'
    />
  )
}
