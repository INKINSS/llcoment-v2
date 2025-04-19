import axios from "axios";

interface Props {
  nickname: string;
  tag: string;
  content: string;
}

export const publishArticle = async (articleData: Props) => {
  const response = await axios.post(
    "http://localhost:3000/api/article",
    articleData
  );
  return response.data;
};
