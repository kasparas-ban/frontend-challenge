import { useNavigate } from 'react-router-dom'
import { stacksTableColumns } from './stacksTableConfig'
import DataTable from '@/components/DataTable/DataTable'
import { useStacks } from '@/hooks/stackHooks'
import { Stack } from '@/types/stack'

export default function StacksTable() {
  const { data, isLoading } = useStacks()
  const navigate = useNavigate()

  return (
    <DataTable<Stack>
      columns={stacksTableColumns}
      data={data}
      isLoading={isLoading}
      onRowClick={item => navigate(item.id)}
      aria-label='Table listing all stacks'
    />
  )
}
