import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

const notes = _.times(100, (i) => ({
  nick: `cool-idea-nick-${i}`,
  name: `Note ${i}`,
  description: `Description of note ${i}...`,
  text: _.times(100, (j) => `<p>Text paragrph ${j} of note ${i}...</p>`).join(''),
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getNotes: trpc.procedure.query(() => {
    return { notes: notes.map((note) => _.pick(note, ['nick', 'name', 'description'])) }
  }),
  getNote: trpc.procedure
    .input(
      z.object({
        noteNick: z.string(),
      })
    )
    .query(({ input }) => {
      const note = notes.find((note) => note.nick === input.noteNick)
      return { note: note || null }
    }),
})

export type TrpcRouter = typeof trpcRouter
