import Head from 'next/head'
import React from 'react'

export interface MetaLayoutProps {
  title: string
  description: string
}

function MetaLayout({
  title,
  description,
  children,
}: React.PropsWithChildren<MetaLayoutProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  )
}

export default MetaLayout
