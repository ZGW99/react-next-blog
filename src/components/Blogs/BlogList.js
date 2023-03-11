import BlogListItem from './BlogListItem';
import Wrapper from '../Wrapper';
import TechTags from '@/components/TechTags';

export default function BlogList({ articleList }) {

  return (
    <Wrapper>
      <TechTags>
        {articleList?.map((article) => (
          <BlogListItem
            title={article.title}
            date={article.date}
            id={article.id}
            key={article.id}
            path={article.path}
          />
        ))}
      </TechTags>
    </Wrapper>
  )
}