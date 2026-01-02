import SingleArticle from '@/components/SingleArticle'
import React from 'react'

const Page = async ({ params }) => {
  const { article } = await params;
  return (
    <div>
      <SingleArticle slug={article} />
    </div>
  )
}

export default Page;