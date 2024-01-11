import React from 'react'
import * as UserServices from "@/api/services/user"
import {Avatar} from "@nextui-org/react";
import {redirect} from "next/navigation";
import {FaHouseUser, FaPhoneAlt} from "react-icons/fa";
import Image from "next/image";
import {AvatarAnimation, CardAnimation} from "@/app/dashboard/account/Animation";
import {ToDoServices} from 'components/api/services';

export default async function AccountPage() {

    const user = await UserServices.getCurrentUser()
    const {actives, completed} = await ToDoServices.countToDos(user.email)

    if (!user) redirect('/')

    return (
        <div className='h-full py-4 mb-20 basis-3/5 after:h-12'>
            <AvatarAnimation className='p-1 my-auto'>
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
            <div className='flex justify-center gap-2 mb-3'>
                <div className='flex flex-col text-center bg-green-300 p-2 rounded-lg'>
                    <span className='text-2xl font-bold text-gray-600'>{actives}</span>
                    <span className='text-sm'>ACTIVES</span>
                </div>
                <div className='flex flex-col text-center bg-gray-300 p-2 rounded-lg'>
                    <span className='text-2xl font-bold text-gray-600'>{completed}</span>
                    <span className='text-sm'>COMPLETED</span>
                </div>
            </div>
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