import React from 'react'
import * as UserServices from "@/api/services/user"
import {Avatar} from "@nextui-org/react";
import {redirect} from "next/navigation";
import {FaHouseUser, FaPhoneAlt} from "react-icons/fa";
import Image from "next/image";
import {AvatarAnimation, CardAnimation} from "@/app/dashboard/account/Animation";

export default async function AccountPage() {

    const user = await UserServices.getCurrentUser({countActiveToDos: true, countCompletedToDos: true})

    if (!user) redirect('/')

    return (
        <div className='h-full my-auto py-4'>
            <AvatarAnimation className='p-4 my-auto'>
                <Avatar src={undefined} alt={user.name} size={"lg"}
                        ImgComponent={Image}
                        className='w-40 h-40 mx-auto'
                />
                <h1 className='mx-auto text-2xl font-bold text-center'>
                    {user.name}
                </h1>
                <h2 className='mx-auto font-semibold text-center text-gray-500'>
                    {user.email}
                </h2>
            </AvatarAnimation>
            <CardAnimation className='flex flex-col gap-3 bg-black/90 w-10/12 p-4'>
                <>
                    {
                        user.phone_number && (
                            <div className='flex gap-2'>
                                <h3>
                                    <FaPhoneAlt className='bg-white p-1 rounded-full text-3xl'/>
                                    <span className='text-white text-sm'>Phone</span>
                                </h3>
                                <span className='text-white py-2'>{user.phone_number}</span>
                            </div>
                        )
                    }
                    {user.address && (
                        <div className='flex gap-2'>
                            <h3>
                                <FaHouseUser className='bg-white p-1 rounded-full text-3xl'/>
                                <span className='text-white text-sm'>Address</span>
                            </h3>
                            <div className='h-full'>
                                <p className='text-white h-full'>{user.address}</p>
                            </div>
                        </div>
                    )}
                </>
            </CardAnimation>
        </div>
    )
}