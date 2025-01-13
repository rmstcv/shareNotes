import { TrpcProvider } from './lib/trpc'
import { AllNotesPage } from './pages/AllNotesPage'

export const App = () => {
  return (
    <TrpcProvider>
      <AllNotesPage />
    </TrpcProvider>
  )
}
