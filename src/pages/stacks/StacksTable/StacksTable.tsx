import { stacksTableColumns } from './stacksTableConfig'
import DataTable from '@/components/DataTable/DataTable'
import { useStacks } from '@/hooks/stackHooks'

export default function StacksTable() {
  const { data, isLoading } = useStacks()

  return (
    <DataTable columns={stacksTableColumns} data={data} isLoading={isLoading} />
  )
}
