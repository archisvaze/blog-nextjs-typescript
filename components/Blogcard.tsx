import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
import { formatDate } from '../utils';
interface IPropType {
    article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
  console.log(article.author)
    return (
        <div>
            <Link href={`/article/${article.slug}`}>
                <a className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                    {article.title}
                </a>
            </Link>
            <div className="flex items-center my-4">
                <div className="rounded-full overflow-hidden flex items-center justify-center mr-2 rounded-full">
                    <Image alt=""
                        src={`https://strapi-sls4.onrender.com${article.author.avatar}`}
                        height={40}
                        width={40}
                    />
                </div>
                <span className="text-sm font-bold text-gray-600">
                    {article.author.firstname}{' '}
                    {article.author.lastname} on
                    &nbsp;
                    <span className="text-gray-400">
                        {formatDate(article.timestamp)}
                    </span>
                </span>
            </div>
            <div className="text-gray-500">
                {article.content.slice(0, 250)}...
            </div>
        </div>
    );
};

export default Blogcard;