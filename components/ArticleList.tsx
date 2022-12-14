import React from 'react'
import { IArticle } from '../types'
import Blogcard from './Blogcard';

interface IPropType {
    articles: IArticle[];

}

const ArticleList = ({ articles }: IPropType) => {
    console.log(articles)
    return (
        <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16'>
            {articles.map(article => {
                return <Blogcard article={article} key={article._id}/>
            })}

        </div>
    )
}

export default ArticleList