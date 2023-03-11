
import Head from 'next/head';
import { getPostById, getAllIds } from '../../../utils/formatterMd';
import styles from '../../../styles/Markdown.module.css';
import Wrapper from '../../../components/Wrapper';

const BlogListItem = ({ data }) => {

    return (
        <Wrapper>
            <Head>
                <title>{data.title}</title>
            </Head>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.date}>{data.date}</p>
            <article className='md'>
                <div dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
            </article>
        </Wrapper>
    );
};
export default BlogListItem;

export const getStaticPaths = async () => {
    const paths = await getAllIds('react');
    
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const data = await getPostById(params.id, 'react');
    return {
        props: {
            data,
        },
    };
};