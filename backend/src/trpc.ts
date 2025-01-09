import { initTRPC } from '@trpc/server'

const notes = [
  {
    nick: 'note-nick-1',
    name: 'Note 1',
    description: 'Description of note 1..',
  },
  {
    nick: 'note-nick-2',
    name: 'Note 2',
    description: 'Description of note 2..',
  },
  {
    nick: 'note-nick-3',
    name: 'Note 3',
    description: 'Description of note 3..',
  },
  {
    nick: 'note-nick-4',
    name: 'Note 4',
    description: 'Description of note 4..',
  },
  {
    nick: 'note-nick-5',
    name: 'Note 5',
    description: 'Description of note 5..',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getNotes: trpc.procedure.query(() => {
    return { notes }
  }),
})

export type TrpcRouter = typeof trpcRouter
