import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarContext } from "@/context/SidebarContext";
import { AuthContext, useAuth } from "@/context/authContext";
import { IoCreate } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";


const Sidebar = () => {
    const pathname = usePathname();
    const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
    const { userType, login } = useContext(AuthContext);
    const [sidebarItems, setSidebarItems] = useState([]);


    useEffect(() => {
        console.log("User Type:", userType);
        if (userType) {
            let items = [];
            if (userType === "admin") {
                items = [
                    { name: "Dashboard", href: "/dashboard", icon: AiOutlineHome },
                    { name: "Category", href: "/dashboard/category", icon: BsPeople },
                    { name: "Admin", href: "/dashboard/admin", icon: FiMail },
                    { name: "Experts Listing", href: "/dashboard/experts", icon: TiContacts },
                    { name: "Courses", href: "/dashboard/course", icon: IoCreate },
                    { name: "Task", href: "/dashboard/task", icon: FaTasks },

                    // Add other admin sidebar items here
                ];
            } else if (userType === "staff") {
                items = [
                    { name: "Dashboard", href: "/dashboard", icon: AiOutlineHome },
                    { name: "Category", href: "/dashboard/category", icon: BsPeople },
                    { name: "Staff", href: "/dashboard/staff", icon: FiMail },
                    { name: "Student Listing", href: "/dashboard/student", icon: TiContacts },
                    // Add other staff sidebar items here
                ];
            } else if (userType === "student") {
                items = [
                    { name: "Dashboard", href: "/dashboard", icon: AiOutlineHome },
                    { name: "Category", href: "/dashboard/category", icon: BsPeople },
                    { name: "Student", href: "/dashboard/student", icon: FiMail },
                    // Add other student sidebar items here
                ];
            }
            console.log("Sidebar Items:", items);
            setSidebarItems(items);
        }
    }, [userType]);

    return (
        <div className="sidebar__wrapper">
            <button className="btn" onClick={toggleSidebarcollapse}>
                {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="sidebar" data-collapse={isCollapsed}>
                <div className="sidebar__top">
                    <Image
                        width={80}
                        height={80}
                        className="sidebar__logo"
                        src="/logo.png"
                        alt="logo"
                    />
                    <p className="sidebar__logo-name">Seasonly Admin</p>
                </div>
                <ul className="sidebar__list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li className="sidebar__item" key={name}>
                            <Link
                                className={`sidebar__link ${pathname === href ? "sidebar__link--active" : ""
                                    }`}
                                href={href}
                            >
                                <span className="sidebar__icon">
                                    <Icon />
                                </span>
                                <span className="sidebar__name">{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
