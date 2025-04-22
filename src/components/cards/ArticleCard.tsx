import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  slug: string;
  content: string;
  tag: string;
  nickname: string;
  createAt?: string;
}

const ArticleCard = ({ title, slug, content, tag, nickname }: Props) => {
  return (
    <NavLink
      to={`/article/${slug}`}
      className="block border border-gray-200 rounded-xl p-6 hover:shadow-lg transition ssm:w-full md:w-2/3 lg:w-[500px]"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <div
        className="prose ssm:w-full prose-h1:ssm:text-[1.2rem] prose-h1:md:text-[1.7rem] prose-h1:lg:text-[2.1rem] text-sm text-gray-light md:text-[1rem] lg:text-[1.2rem] line-clamp-3 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>

      <div className="mt-4 flex justify-between text-gray-light ssm:text-xs md:text-[1rem] lg:text-[1.2rem]">
        <span>#{tag}</span>
        <span>por {nickname}</span>
      </div>
    </NavLink>
  );
};

export default ArticleCard;
