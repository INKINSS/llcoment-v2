import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

interface Props {
  onClick: () => void;
  defaultContent: string;
  onClickContent: string;
}

export function PublishButton({
  onClick,
  defaultContent,
  onClickContent,
}: Props) {
  return (
    <AnimatedSubscribeButton className="md:text-[1rem] md:w-36" onClick={onClick}>
      <span className="group inline-flex items-center">
        {defaultContent}
        <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <span className="group inline-flex items-center">
        <CheckIcon className="mr-2 size-4" />
        {onClickContent}
      </span>
    </AnimatedSubscribeButton>
  );
}
