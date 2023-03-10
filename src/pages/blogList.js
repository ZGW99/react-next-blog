import Head from 'next/head';
import { getSortedPostData } from '../utils/formatterMd';
import BlogList from '../components/Blogs/BlogList'

const Blog = ({ articleList }) => {
  return (
    <>
      <Head>
        <title>StarDreams&apos;s Blog</title>
      </Head>
      <BlogList articleList={articleList} />
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const articleList = await getSortedPostData('html');
  return {
    props: {
      articleList,
    },
  };
};
