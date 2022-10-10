import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

export interface MetaLayoutProps {
  title: string
  description?: string
}

function MetaLayout({
  title,
  description,
  children,
}: PropsWithChildren<MetaLayoutProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  )
}

export default MetaLayout
