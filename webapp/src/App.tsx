import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllNotesRoute, getViewNoteRoute, viewNoteRouteParams } from './lib/routes.ts'
import { TrpcProvider } from './lib/trpc'
import { AllNotesPage } from './pages/AllNotesPage'
import { ViewNotePage } from './pages/ViewNotePage'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllNotesRoute()} element={<AllNotesPage />} />
          <Route path={getViewNoteRoute(viewNoteRouteParams)} element={<ViewNotePage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
