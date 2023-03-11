
import Head from 'next/head';
import { getPostById, getAllIds } from '../../../utils/formatterMd';
import styles from '../../../styles/Markdown.module.css';
import Wrapper from '../../../components/Wrapper';
import { useRouter } from 'next/router'

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

export const getStaticPaths = async (data) => {
    const paths = await getAllIds('javascript');

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const data = await getPostById(params.id, 'javascript');
    return {
        props: {
            data,
        },
    };
};