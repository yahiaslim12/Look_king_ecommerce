'use client'
import { useSession } from "next-auth/react"
import { List } from "../../../svg"
export default function Settings() {
  const {data:session,status} = useSession()
  return (
    <div className="w-full">
        <div className="flex items-center justify-between">
            <h1 className="text-gray-800 text-3xl">Account Settings</h1>
            <button><List width={20} height={20} color={'gray'}/></button>
        </div>
        <div className="mt-3 pb-10 border-bottom w-full">
            <h3 className="text-gray-800 text-xl">Account Details</h3>
            <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp" alt="Dr. Johnnie Kassulke" title="Dr. Johnnie Kassulke" draggable="false" loading="lazy" width="50" height="50" className="rizzui-avatar-img mt-3 inline-flex items-center justify-center flex-shrink-0 rounded-full object-cover" style={{width: "40px", height: "40px", backgroundColor: 'rgb(255, 104, 71)'}}/>
            <form action="" className="mt-3 w-6/12">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray_text text-sm text-capitalize">
                    email*
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={`rounded border px-3 py-2 outline-none`}
                    value={session.user.email}
                    readOnly
                />
            </div>
            <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="name" className="text-gray_text text-sm text-capitalize">
                    name*
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className={`rounded border px-3 py-2 outline-none`}
                    value={session.user.name}
                />
            </div>
            <div className="flex flex-col gap-2 mt-3">
                <label htmlFor="number" className="text-gray_text text-sm text-capitalize">
                    number*
                </label>
                <input
                    type="text"
                    name="number"
                    id="number"
                    className={`rounded border px-3 py-2 outline-none`}
                    value={''}
                />
                <small className="text-danger">You do not have a number in this account. Please add one.</small>
            </div>
            <button className="text-capitalize rounded px-2.5 mt-3 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm">Save details</button>
            </form>
        </div>
        <div className="py-10 border-bottom">
            <h3 className="text-gray-800 text-xl">Password</h3>
            <form action="" className="w-full flex gap-5">
            <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="npassword" className="text-gray_text text-sm text-capitalize">
                    new password*
                </label>
                <input
                    type="password"
                    name="npassword"
                    id="npassword"
                    className={`rounded border px-3 py-2 outline-none`}
                    placeholder="**********"
                />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="cpassword" className="text-gray_text text-sm text-capitalize">
                    current password*
                </label>
                <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    className={`rounded border px-3 py-2 outline-none`}
                    placeholder="**********"
                />
            </div>
            </form>
            <div className="flex flex-col gap-0.5 items-start justify-center mt-2">
                <small className="text-gray-600 ">You must write the current password to save changements</small>
                <button className="text-capitalize rounded px-2.5 mt-3 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm">Save details</button>
            </div>
        </div>
        <div className="py-10">
            <h3 className="text-gray-800 text-xl">Delete Account</h3>
            <p className="mb-0 text-gray-500 text-sm" style={{fontWeight : '500 !important'}}>Would you like to delete your account? <br />
This account contain 12 orders, Deleting your account will remove all the order details associated with it.</p>
        <button className="px-3 mt-3 py-2 rounded bg-red-500 text-white font-semibold">Delete Account</button>
        </div>
    </div>
  )
}