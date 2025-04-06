/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function index() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/blog/base')
  }, [router])
  return null
}
