// src/components/FormDialog.tsx
import { DialogClose } from "@radix-ui/react-dialog";
import { PublishButton } from "../buttons/PublishButton";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useArticlePublish } from "../../hooks/useArticlePublish";

interface Props {
  contentEditor: string;
}

export function FormDialog({ contentEditor }: Props) {
  const {
    nickname,
    setNickname,
    tag,
    setTag,
    handleSubmit,
    isLoading,
    error,
    isSuccess,
  } = useArticlePublish(contentEditor);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-[1.1rem] px-10 py-2 font-normal bg-secondary-foreground text-white h-12">
          Publicar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[1.5rem]">
            solo faltan unos datos y listo
          </DialogTitle>
          <DialogDescription>
            antes de publicar debes de identificar quién es el autor y la
            etiqueta del artículo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nickname
            </Label>
            <Input
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="col-span-3"
              placeholder="ej: @samito"
              disabled={isLoading}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tag" className="text-right">
              Tag
            </Label>
            <Input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              id="tag"
              className="col-span-3"
              placeholder="ej: node.js"
              disabled={isLoading}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm col-span-4 text-center">
              {error}
            </div>
          )}
        </div>
        <DialogFooter className="flex flex-row gap-3 items-center justify-center">
          <DialogClose className="flex justify-center items-center" asChild>
            <Button
              className="h-10"
              type="button"
              variant="secondary"
              disabled={isLoading}
            >
              Cerrar
            </Button>
          </DialogClose>
          <PublishButton
            onClick={handleSubmit}
            defaultContent="Publicar"
            onClickContent={isSuccess ? "Publicado!" : "Publicando..."}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
