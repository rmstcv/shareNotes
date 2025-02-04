const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

export const getAllNotesRoute = () => '/'

export const viewNoteRouteParams = getRouteParams({ noteNick: true })
export type ViewNoteRouteParams = typeof viewNoteRouteParams
export const getViewNoteRoute = ({ noteNick }: ViewNoteRouteParams) => `/notes/${noteNick}`

export const getNewNoteRoute = () => '/ideas/new'
