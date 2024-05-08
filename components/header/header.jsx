"use client";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineMailOutline, MdOutlineContactPage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineStar, AiOutlineSetting } from "react-icons/ai";
import { CiDroplet } from "react-icons/ci";
import { useDropdown } from "@/context/DropDownContext";
import Link from "next/link";
import DropDown from "../DropDown/DropDown";
import "./header.css";
const Header = () => {
    const { open, setOpen, menuRef } = useDropdown();

    return (
        <nav className="navbar">
            <div className="leftSide">
                <DropDown
                    icon={<FiMessageSquare className="iconStyling" />}
                    name="John Doe"
                    message="Hello, world!"
                    heading="Messages"
                />
                <DropDown
                    icon={<MdOutlineMailOutline className="iconStyling" />}
                    name="John Doe"
                    message="Hello, world!"
                    heading="E-mail"
                />

                <div className="about">
                    <Link href="">About</Link>
                </div>
            </div>
            <div className="rightSide">
                <div className="search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="image" ref={menuRef}>
                    <img
                        src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                        alt="profileImage"
                        onClick={() => setOpen(!open)}
                    />
                    {open && (
                        <div className="dropdown-menu">
                            <div className="profileImage">
                                <img
                                    src="https://monster-react-main.netlify.app/assets/user2-70147984.jpg"
                                    alt=""
                                />
                                <div>
                                    <h6>Name</h6>
                                    <span>email@gmail.com</span>
                                </div>
                            </div>
                            <Link href="/dashboard/profile" className="iconofProfile">
                                <span>
                                    <CgProfile />
                                </span>
                                <p>My Profile</p>
                            </Link>
                            <div id="button" className="iconofProfile ">
                                <button>Logout</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
