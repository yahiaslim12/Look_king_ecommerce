'use client'
import { signOut } from "next-auth/react";
import { Logout, Order, Settings } from "../../svg";
import { useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";
export default function ONE({ handleList, list }) {
    const LOGOUT =() => {
        handleList('logout')
        signOut()
    }
    const { data: session ,status} = useSession();
  return (
    <div className="ONE border-end pr-14 w-3/12 hidden md:block">
      <ul className="pl-0 pt-5 pb-3 border-bottom w-full">
        <li
          className={`px-4 py-1.5 rounded flex items-center gap-2 hover:cursor-pointer ${list.settings ? 'bg-gray-800 text-white' : ' text-black'} ${!list.settings ? 'hover:bg-gray-100' : ''}`}
          onClick={() => handleList('settings')}
        >
          <Settings color={list.settings ? 'white' : 'black'} width={15} height={15} />
          <span>Settings</span>
        </li>

        <li
          className={`px-4 py-1.5 mt-1 rounded flex items-center gap-2 hover:cursor-pointer ${
            list.commands ? 'bg-gray-800 text-white' : 'text-black'
          } ${!list.commands ? 'hover:bg-gray-100' : ''}`}
          onClick={() => handleList('commands')}
        >
          <Order color={list.commands ? 'white' : 'black'} width={15} height={15} />
          <span>My commandes</span>
        </li>
      </ul>
      <button
        className={`px-4 py-1.5 rounded flex items-center gap-2 w-full ${
          list.logout ? 'bg-gray-800 text-white' : ' text-black'
        } ${!list.logout ? 'hover:bg-gray-100' : ''}`}
        onClick={() => LOGOUT() }
      >
        <Logout width={15} height={15} color={list.logout ? 'white' : 'black'} />
        <span>{status === 'loading' ? <CircularProgress style={{width:"15px" , height : '15px'}}/> : 'Logout'}</span>
      </button>
    </div>
  );
}
