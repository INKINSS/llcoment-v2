import { InteractiveHoverButton } from "../../magicui/interactive-hover-button";

const PrimaryButton = ({ title }: { title: string }) => {
  return <InteractiveHoverButton className="ssm:text-[.7rem]">{title}</InteractiveHoverButton>;
};

export default PrimaryButton;
