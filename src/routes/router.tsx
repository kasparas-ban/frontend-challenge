import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/home/HomePage'
import StacksOutlet from '@/pages/stacks/StacksOutlet'
import StackComponentsPage from '@/pages/stacks/stackComponentsPage/StackComponentsPage'
import StackComponentInfo from '@/pages/stacks/stackComponentsPage/stackComponentInfo/StackComponentInfo'
import StacksPage from '@/pages/stacks/stacksPage/StacksPage'
import StackInfoPage from '@/pages/stacks/stacksPage/stackInfo/StackInfoPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
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
    </Route>
  )
)

export default router
