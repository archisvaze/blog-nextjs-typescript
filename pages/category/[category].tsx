import React from 'react'
import Head from 'next/head'
import Tabs from '../../components/Tabs'
import { GetServerSideProps } from 'next'
import { IArticle, ICategory, ICollectionResponse, IPagination } from '../../types'
import { fetchArticles, fetchCategories } from '../../http'
import { AxiosResponse } from 'axios';
import qs from 'qs';
import ArticleList from '../../components/ArticleList'
import { useRouter } from 'next/router'
import { debounce  } from '../../utils';
interface IPropType {
    categories: {
        items: ICategory[];
        pagination: IPagination;
    },
    articles: {
        items: IArticle[],
        pagination: IPagination;
    },
    slug: string,

}

const Category = ({ categories, articles, slug }: IPropType) => {
    const router = useRouter();

    const handleOnSearch = (query: String) => {
        router.push(`/?search=${query}`)
    }

    const formattedCategory = () => {
        return slug
    }
    return (
        <>
            <Head>
                <title>Blog {formattedCategory()}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Tabs categories={categories.items} handleOnSearch={debounce(handleOnSearch, 500)} />
            <ArticleList articles={articles.items} />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const options = {
        populate: ['author.avatar'],
        sort: ["id:desc"],
        filters: {
            category: {
                slug: query.category
            }
        }
    };

    const queryString = qs.stringify(options)

    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
        await fetchArticles(queryString);


    const {
        data: categories,
    }: AxiosResponse<ICollectionResponse<ICategory[]>> =
        await fetchCategories();

    return {
        props: {
            categories: {
                items: categories.data,
                pagination: categories.meta.pagination,
            },
            articles: {
                items: articles.data,
                pagination: articles.meta.pagination
            },
            slug: query.category,
        }
    }
}


export default Category
