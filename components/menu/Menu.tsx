import React from 'react'
import {MenuItem} from "@/components/menu/MenuItem";
import Link from "next/link";
import {IoMdHome} from "react-icons/io";
import {LuCalendar} from "react-icons/lu";
import {FaUserLarge} from "react-icons/fa6";
import {GrAdd} from "react-icons/gr";

export default function Menu() {

    return (
        <div className='absolute bottom-0 flex bg-white w-full p-3 border-t shadow-black shadow-2xl'>
            <div className='menu-item-container basis-2/5'>
                <MenuItem text='Home' href='/dashboard'>
                    <IoMdHome/>
                </MenuItem>
                <MenuItem text='Calendar' href='/dashboard/calendar'>
                    <LuCalendar/>
                </MenuItem>
            </div>
            <div className='menu-item-container basis-1/5'>
                <Link href='/todo/create' className='create-button'>
                    <GrAdd/>
                </Link>
            </div>
            <div className='menu-item-container basis-2/5'>
                <MenuItem text='Account' href='/dashboard/account'>
                    <FaUserLarge/>
                </MenuItem>
            </div>
        </div>
    )
}