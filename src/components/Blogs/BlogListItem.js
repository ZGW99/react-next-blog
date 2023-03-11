import styles from '../../styles/Post.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'

const BlogListItem = ({ title, date, id, path }) => {
  
  return (
    <Link href={`/blogList/${path}/${id}`}>
      <div className={styles.post}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </Link>
  );
};

export default BlogListItem;
