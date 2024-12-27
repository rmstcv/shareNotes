export const App = () => {
  const notes = [
    {
      nick: "note-nick-1",
      name: "Note 1",
      description: "Description of note 1..",
    },
    {
      nick: "note-nick-2",
      name: "Note 2",
      description: "Description of note 2..",
    },
    {
      nick: "note-nick-3",
      name: "Note 3",
      description: "Description of note 3..",
    },
    {
      nick: "note-nick-4",
      name: "Note 4",
      description: "Description of note 4..",
    },
    {
      nick: "note-nick-5",
      name: "Note 5",
      description: "Description of note 5..",
    },
  ];
  return (
    <div>
      <h1>Notenick</h1>
      {notes.map((note) => {
        return (
          <div key={note.nick}>
            <h2>{note.name}</h2>
            <p>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
};
