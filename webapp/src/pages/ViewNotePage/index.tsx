import { useParams } from 'react-router-dom'
import { type ViewNoteRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

export const ViewNotePage = () => {
  const { noteNick } = useParams() as ViewNoteRouteParams
  
  const { data, error, isLoading, isFetching, isError } = trpc.getNote.useQuery({
    noteNick,
  })

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  
    if (!data.note) {
      return <span>Note not found</span>
  }

  return (
    <div>
      <h1>{data.note.name}</h1>
      <p>{data.note.description}</p>
      <div dangerouslySetInnerHTML={{ __html: data.note.text }} />
    </div>
  )
}