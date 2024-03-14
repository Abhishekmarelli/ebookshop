import { Link, useNavigate } from "react-router-dom"


export const DropdownLoggedIn = ({ setdropdown }) => {
    const navigate = useNavigate()

    function logout() {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('uid')
        setdropdown(false)
        navigate('/')
    }
    

    return (
        <div id="dropdownAvatar" className="select-none	absolute top-14 right-5 z-10 w-40 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <div className="font-medium truncate">shubham@example.com</div>
            </div>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link onClick={() => setdropdown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
                </li>
                <li>
                    <Link onClick={() => setdropdown(false)} to="/orders" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
            </ul>
            <div className="py-1">
                <span onClick={logout}className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</span>
            </div>
        </div>
    )
}