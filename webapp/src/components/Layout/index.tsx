import { Link, Outlet } from 'react-router-dom'
import { getAllNotesRoute } from '../../lib/routes'
import css from './index.module.scss'

export const Layout = () => {
  return (
   <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>NotesNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllNotesRoute()}>
              All Notes
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}