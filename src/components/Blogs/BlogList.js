import BlogListItem from './BlogListItem';
import Wrapper from '../Wrapper';

export default function BlogList({ articleList }) {
  return (
    <Wrapper>
      {articleList?.map((article) => (
        <BlogListItem
          title={article.title}
          date={article.date}
          id={article.id}
          key={article.id}
        />
      ))}
    </Wrapper>
  )
}