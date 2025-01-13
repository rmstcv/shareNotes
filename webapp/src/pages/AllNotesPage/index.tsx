import { trpc } from '../../lib/trpc'

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
      <h1>All Notes</h1>
      {data.notes.map((note) => (
        <div key={note.nick}>
          <h2>{note.name}</h2>
          <p>{note.description}</p>
        </div>
      ))}
    </div>
  )
}
