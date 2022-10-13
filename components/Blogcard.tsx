import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
import { formatDate } from '../utils';
interface IPropType {
    article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
  console.log(article.attributes.author)
    return (
        <div>
            <Link href={`/article/${article.attributes.Slug}`}>
                <a className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
                    {article.attributes.Title}
                </a>
            </Link>
            <div className="flex items-center my-4">
                <div className="rounded-full overflow-hidden flex items-center justify-center mr-2 rounded-full">
                    <Image alt=""
                        src={`https://strapi-sls4.onrender.com${article.attributes.author.data.attributes.avatar.data?.attributes.formats.thumbnail.url}`}
                        height={40}
                        width={40}
                    />
                </div>
                <span className="text-sm font-bold text-gray-600">
                    {article.attributes.author.data.attributes.firstname}{' '}
                    {article.attributes.author.data.attributes.lastname} on
                    &nbsp;
                    <span className="text-gray-400">
                        {formatDate(article.attributes.createdAt)}
                    </span>
                </span>
            </div>
            <div className="text-gray-500">
                {article.attributes.Body.slice(0, 250)}...
            </div>
        </div>
    );
};

export default Blogcard;