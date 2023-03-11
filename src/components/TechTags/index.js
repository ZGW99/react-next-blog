import { Button } from 'antd';
import Link from 'next/link';
import styles from './index.module.css';

const TechTags = ({ children }) => {
    return (<div>
        <div className={styles.tags}>
            <Link href={`/blogList/html`}>
                <Button size='large' className={styles.button}>HTML</Button>
            </Link>

            <Link href={`/blogList/css`}>
                <Button size='large' className={styles.button}>CSS</Button>
            </Link>

            <Link href={`/blogList/javascript`}>
                <Button size='large' className={styles.button}>JavaScript</Button>
            </Link>

            <Link href={`/blogList/react`}>
                <Button size='large' className={styles.button}>React</Button>
            </Link>

            <Link href={`/blogList/vue`}>
                <Button size='large' className={styles.button}>Vue</Button>
            </Link>

            <Link href={`/blogList/node`}>
                <Button size='large' className={styles.button}>Nodejs</Button>
            </Link>

            <Link href={`/blogList/webpack`}>
                <Button size='large' className={styles.button}>Webpack</Button>
            </Link>

            <Link href={`/blogList/next`}>
                <Button size='large' className={styles.button}>Nextjs</Button>
            </Link>
        </div>
        {children}
    </div>
    )
}
export default TechTags;