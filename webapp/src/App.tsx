import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import * as routes from './lib/routes.ts'
import { TrpcProvider } from './lib/trpc'
import { AllNotesPage } from './pages/AllNotesPage'
import { NewNotePage } from './pages/NewNotesPage'
import { ViewNotePage } from './pages/ViewNotePage'
import './styles/global.scss'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getAllNotesRoute()} element={<AllNotesPage />} />
            <Route path={routes.getNewNoteRoute()} element={<NewNotePage />} />
            <Route path={routes.getViewNoteRoute(routes.viewNoteRouteParams)} element={<ViewNotePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
