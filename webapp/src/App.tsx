import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { getAllNotesRoute, getViewNoteRoute, viewNoteRouteParams } from './lib/routes.ts'
import { TrpcProvider } from './lib/trpc'
import { AllNotesPage } from './pages/AllNotesPage'
import { ViewNotePage } from './pages/ViewNotePage'
import './styles/global.scss'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllNotesRoute()} element={<AllNotesPage />} />
            <Route path={getViewNoteRoute(viewNoteRouteParams)} element={<ViewNotePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
