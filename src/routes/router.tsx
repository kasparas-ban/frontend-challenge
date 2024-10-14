import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import RootErrorBoundary from '@/errorBoundaries/RootErrorBoundary'
import RouteErrorBoundary from '@/errorBoundaries/RouteErrorBoundary'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/home/HomePage'
import NotFoundPage from '@/pages/notFound/NotFoundPage'
import StacksOutlet from '@/pages/stacks/StacksOutlet'
import StackComponentsPage from '@/pages/stacks/stackComponentsPage/StackComponentsPage'
import StackComponentInfo from '@/pages/stacks/stackComponentsPage/stackComponentInfo/StackComponentInfo'
import StacksPage from '@/pages/stacks/stacksPage/StacksPage'
import StackInfoPage from '@/pages/stacks/stacksPage/stackInfo/StackInfoPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<RootErrorBoundary />}>
      {/* Home */}
      <Route path={ROUTES.home.path} element={<HomePage />} />

      {/* Stacks */}
      <Route element={<StacksOutlet />}>
        <Route path={ROUTES.stacks.path}>
          <Route index element={<StacksPage />} />
          <Route
            path={ROUTES.stacks.stackInfo.path}
            element={<StackInfoPage />}
            errorElement={<RouteErrorBoundary />}
          />
        </Route>

        <Route path={ROUTES.stackComponents.path}>
          <Route index element={<StackComponentsPage />} />
          <Route
            path={ROUTES.stackComponents.componentInfo.path}
            element={<StackComponentInfo />}
            errorElement={<RouteErrorBoundary />}
          />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

export default router
