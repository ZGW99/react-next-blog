import styles from '../../styles/Post.module.css';
import Link from 'next/link';

const BlogListItem = ({ title, date, id }) => {
    
  return (
    <Link href={`/blogList/${id}`}>
      <div className={styles.post}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </Link>
  );
};

export default BlogListItem;
