import { Drawer } from "antd"
import { useState } from "react"
import { FaAngleDown, FaBars, FaRegNewspaper } from "react-icons/fa"
import { FaRegUser } from "react-icons/fa6"
import { FiHash } from "react-icons/fi"
import { IoImageOutline, IoShareSocialOutline } from "react-icons/io5"
import { LiaLayerGroupSolid } from "react-icons/lia"
import { LuUserRoundPen, LuUsersRound } from "react-icons/lu"
import { MdOutlineAppSettingsAlt, MdOutlineDashboard, MdOutlineSettings, MdOutlineVideocam, MdOutlineVideoSettings, MdSettingsBrightness } from "react-icons/md"
import { RiAdvertisementLine } from "react-icons/ri"
import { TbShieldLock } from "react-icons/tb"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import logo from '../assets/logo.svg'

const sidebarLinks = [
    {
        name: 'Dashboard',
        link: '/dashboard',
        icon: <MdOutlineDashboard size={25} />
    },
    {
        name: 'News Category',
        link: '/news-category',
        icon: <LiaLayerGroupSolid size={25} />
    },
    {
        name: 'News',
        link: '/news',
        icon: <FaRegNewspaper size={25} />
    },
    {
        name: 'Image News',
        link: '/image-news',
        icon: <IoImageOutline size={25} />
    },
    {
        name: 'Video News',
        link: '/video-news',
        icon: <MdOutlineVideocam size={25} />
    },
    {
        name: 'Ads Management',
        link: '/ads-management',
        icon: <RiAdvertisementLine size={25} />
    },
    {
        name: 'User Management',
        link: '/user-management',
        icon: <LuUsersRound size={25} />,
        dropdown: [{
            name: 'User',
            link: '/user-management/user',
            icon: <FaRegUser size={20} />
        },
        {
            name: 'Author',
            link: '/user-management/author',
            icon: <LuUserRoundPen size={20} />
        },
        ]
    },
    {
        name: 'Roles & Permissions',
        link: '/roles-permissions',
        icon: <TbShieldLock size={25} />
    },
    {
        name: 'Settings',
        link: '/settings',
        icon: <MdOutlineSettings size={25} />,
        dropdown: [{
            name: 'Site Setting',
            link: '/settings/site-setting',
            icon: <MdSettingsBrightness size={20} />
        },
        {
            name: 'Media Manager',
            link: '/settings/media-manager',
            icon: <MdOutlineVideoSettings size={20} />
        },
        {
            name: 'Menu Manager',
            link: '/settings/menu-manager',
            icon: <MdOutlineAppSettingsAlt size={20} />
        },
        {
            name: 'Hastag Manager',
            link: '/settings/hastag-manager',
            icon: <FiHash size={20} />
        },
        {
            name: 'Social Media',
            link: '/settings/social-media',
            icon: <IoShareSocialOutline size={20} />
        },
        ]
    }
]

const NavWrapper = () => {
    const [openDropdown, setOpenDropdown] = useState('')
    const [openNav, setOpenNav] = useState(false)
    const { pathname: location } = useLocation()

    const sidebar = (
        <>
            <div className="h-[90px] lg:px-3 grid place-content-center">
                <Link to={'/dashboard'}>
                    <img src={logo} alt="logo" className="w-[200px]" />
                </Link>
            </div>
            <div className="flex flex-col mx-1">
                {sidebarLinks?.map((item, i) => item?.dropdown ? <div className="flex flex-col font-medium" key={i}>
                    <div onClick={() => openDropdown === item.name ? setOpenDropdown('') : setOpenDropdown(item.name)} className={` ${location.includes(item.link) ? "!text-white bg-spell-purple" : "!text-spell-gray hover:!text-white hover:bg-spell-purple"} p-2 lg:pl-5 lg:pr-3 flex items-center  gap-2 font-medium ease-in-out duration-500`
                    }>
                        {item.icon} {item.name}  <FaAngleDown size={15} className={openDropdown === item.name ? 'rotate-180' : ''} />
                    </div>
                    {openDropdown === item.name && <div className="flex flex-col text-sm">
                        {item.dropdown.map((e, j) => <NavLink key={j} to={e.link} className={({ isActive }) =>
                            ` ${isActive ? "!text-white !bg-spell-purple" : "!text-spell-gray hover:!text-white hover:bg-spell-purple"} p-2 lg:pl-12 :pr-3 flex items-center  gap-2 font-medium ease-in-out duration-500`
                        }>
                            {e.icon} {e.name}
                        </NavLink>)}</div>}
                </div> : <NavLink key={i} to={item.link} className={({ isActive }) =>
                    ` ${isActive ? "!text-white !bg-spell-purple" : "!text-spell-gray hover:!text-white hover:bg-spell-purple"} p-2 lg:pl-5 lg:pr-3 flex items-center  gap-2 font-medium ease-in-out duration-500`
                }>
                    {item.icon} {item.name}
                </NavLink>)}
            </div></>
    )

    return (
        <div className="flex items-start h-screen overflow-hidden">
            <div className="w-[280px] hidden lg:block bg-spell-white shadow-sm h-full overflow-y-auto">
                {sidebar}
            </div>
            <div className="flex-1 w-[calc(100%-280px)] h-full flex flex-col gap-3">
                <div className="w-full h-[90px] bg-spell-purple/80 text-white shadow-sm flex items-center px-3">   <span onClick={(() => { setOpenNav(true) })} className='rounded-md p-2 lg:hidden bg-spell-purple text-spell-white'>
                    <FaBars size={30} />
                </span></div>
                <div className="h-full w-full overflow-auto px-3 mb-2">
                    <Outlet />
                </div>
            </div>

            <Drawer width={300} closable={false} open={openNav} onClose={() => setOpenNav(false)} className="lg:hidden">
                {sidebar}
            </Drawer>
        </div>
    )
}

export default NavWrapper