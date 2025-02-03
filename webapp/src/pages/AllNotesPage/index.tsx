import { Link } from 'react-router-dom'
import { getViewNoteRoute } from '../../lib/routes.ts'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'


export const AllNotesPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getNotes.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1 className={css.title}>All Notes</h1>
      <div className={css.notes}>
      {data.notes.map((note) => (
        <div className={css.note} key={note.nick}>
          <h2 className={css.noteName}>
            <Link  className={css.noteLink} to={getViewNoteRoute({ noteNick: note.nick })}>{note.name}</Link>
          </h2>
          <p className={css.noteDescription}>{note.description}</p>
        </div>
      ))}
      </div>
    </div>
  )
}
