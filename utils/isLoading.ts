import { RouterEvent, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

/**
 * Returns true if the router is in the process of changing routes, false otherwise.
 * @returns true if the router is in the process of loading a new page
 */
function isLoading(): boolean {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: RouterEvent) => {
      if (url !== router.asPath) setLoading(true)
    }
    const handleComplete = (url: RouterEvent) => {
      if (url !== router.asPath) setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return loading
}

export default isLoading
