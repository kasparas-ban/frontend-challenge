import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import HomePage from '@/pages/home/HomePage'
import StackComponentsPage from '@/pages/stacks/StackComponentsPage'
import StacksOutlet from '@/pages/stacks/StacksOutlet'
import StacksPage from '@/pages/stacks/StacksPage'
import StackComponentInfo from '@/pages/stacks/stackComponentInfo/StackComponentInfo'
import StackInfoPage from '@/pages/stacks/stackInfo/StackInfoPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Home */}
      <Route path={ROUTES.home.path} element={<HomePage />} />

      {/* Stacks */}
      <Route element={<StacksOutlet />}>
        <Route path={ROUTES.stacks.path}>
          <Route index element={<StacksPage />} />
          <Route
            path={ROUTES.stacks.stackInfo.path}
            element={<StackInfoPage />}
          />
        </Route>

        <Route path={ROUTES.stackComponents.path}>
          <Route index element={<StackComponentsPage />} />
          <Route
            path={ROUTES.stackComponents.componentInfo.path}
            element={<StackComponentInfo />}
          />
        </Route>
      </Route>
    </>
  )
)

export default router
