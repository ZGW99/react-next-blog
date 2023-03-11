import BlogList from '@/components/Blogs/BlogList';
import Head from 'next/head';
import { getSortedPostData } from '../../../utils/formatterMd';

const ReactBlogs = ({ articleList }) => {
  return (
    <>
      <Head>
        <title>StarDreams&apos;s Blog</title>
      </Head>
      <BlogList articleList={articleList} />
    </>
  );
};

export default ReactBlogs;

export const getStaticProps = async () => {
  const articleList = await getSortedPostData('html');
  return {
    props: {
      articleList,
    },
  };
};
