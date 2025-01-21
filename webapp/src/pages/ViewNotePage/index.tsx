import { useParams } from 'react-router-dom'
import { type ViewNoteRouteParams } from '../../lib/routes'

export const ViewNotePage = () => {
  const { noteNick } = useParams() as ViewNoteRouteParams
  return (
    <div>
      <h1>{noteNick}</h1>
      <p>Description of idea 1...</p>
      <div>
        <p>Text paragrph 1 of idea 1...</p>
        <p>Text paragrph 2 of idea 1...</p>
        <p>Text paragrph 3 of idea 1...</p>
      </div>
    </div>
  )
}