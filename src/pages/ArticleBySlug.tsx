import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BlurFade } from "../components/magicui/blur-fade";

interface Article {
  id: number;
  title: string;
  content: string;
  tag: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
}

const ArticleBySlug = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/article/${slug}`
      );
      setArticle(response.data);
    };
    fetchArticle();
  }, [slug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <BlurFade>
      <main>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </main>
    </BlurFade>
  );
};

export default ArticleBySlug;
