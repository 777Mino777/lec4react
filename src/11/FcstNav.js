import { Link } from "react-router-dom"
import { FcHome } from "react-icons/fc"
const FcstNav = () => {
    return (
        <nav className="flex justify-between items-center h-10 p-8 bg-green-200">
            <ul>
                <li className="text-lg font-bold"><strong>기상청 예보</strong></li>
            </ul>
            <ul>
                <li>
                    <Link to='/'>
                        <FcHome className="text-4xl font-bold text-sky-500" />
                    </Link>
                </li>
                {/* <li><Link to='/village' role="button">단기예보</Link></li>
                    <li><Link to='/ultra' role="button">초단기예보</Link></li> */}
            </ul>
        </nav>
    )
}

export default FcstNav
