/* eslint-disable react-hooks/rules-of-hooks */
import { Search } from '@/components/Search'
import { Button } from '@/components/ui/button'
import { FaPlus } from 'react-icons/fa6'
import React from 'react'
import { useRouter } from 'next/router'
import { DataTable } from '@/components/data-table'
import data from '@/services/data.json'

export default function index() {
  const router = useRouter()

  const handleAddUserClick = () => {
    router.push('/configuration/users/adduser')
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[26px] font-semibold">Configuration</h2>
      <Search />
      <Button className="w-max cursor-pointer bg-[#4763E4]" onClick={handleAddUserClick}>
        Add a user
        <FaPlus />
      </Button>
      <div className="container mx-auto rounded-md bg-white py-10 shadow-md">
        <DataTable data={data} />
      </div>
    </div>
  )
}
