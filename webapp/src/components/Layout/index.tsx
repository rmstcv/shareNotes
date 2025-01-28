import { Link, Outlet } from 'react-router-dom'
import { getAllNotesRoute } from '../../lib/routes'

export const Layout = () => {
  return (
    <div>
      <p>
        <b>NoteNick</b>
      </p>
      <ul>
        <li>
          <Link to={getAllNotesRoute()}>All Ideas</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}