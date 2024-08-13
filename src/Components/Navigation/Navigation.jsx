import { Link } from 'react-router-dom'
import s from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav className={s.container}>
			<Link to='/generate'>Генерировать QRcode</Link>
			<Link to='/scan'>Сканировать QRcode</Link>
			<Link to='/generateHistory'>История генерирования</Link>
			<Link to='/scanHistory'>История сканирования</Link>
		</nav>
	)
}
