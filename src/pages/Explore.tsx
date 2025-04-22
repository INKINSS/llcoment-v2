import { useEffect, useState } from "react";
import axios from 'axios'
import ArticleCard from "../components/cards/ArticleCard";
import { BlurFade } from "../components/magicui/blur-fade";

interface Props {
  _id: string;
  title: string;
  slug: string;
  content: string;
  tag: string;
  nickname: string;
  createdAt?: string;
  updatedAt?: string;
}

const Explore = () => {

  const [articles, setArticles] = useState<Props[]>([])

  useEffect(() => {
    const fetchArticles = async() => {
      try {
        const response = await axios.get('http://localhost:3000/api/articles')
        setArticles(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticles()
  }, [])

  return (
    <BlurFade>
    <main className="flex ssm:flex-col md:flex">
      {articles.map(article => (
        <ArticleCard
          key={article._id}
          title={article.title}
          slug={article.slug}
          content={article.content}
          tag={article.tag}
          nickname={article.nickname}
        />
      ))}
    </main>
    </BlurFade>
  );
};

export default Explore;