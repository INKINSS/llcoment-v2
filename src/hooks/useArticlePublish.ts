// src/hooks/useArticlePublish.ts
import { useState } from "react";
import { publishArticle } from "../services/articleServices";

export const useArticlePublish = (initialContent: string) => {
  const [nickname, setNickname] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!nickname || !tag) {
      setError("Nickname y tag son requeridos");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await publishArticle({
        nickname,
        tag,
        content: initialContent,
      });
      setIsSuccess(true);
      setNickname('')
      setTag('')
    } catch (err) {
      setError("Error al publicar el artículo");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    nickname,
    setNickname,
    tag,
    setTag,
    handleSubmit,
    isLoading,
    error,
    isSuccess,
  };
};
