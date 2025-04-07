import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "../../magicui/interactive-hover-button";

const PrimaryButton = ({ title, href }: { title: string, href: string }) => {
  return (
    <Link to={href}>
      <InteractiveHoverButton className="ssm:text-[.7rem] md:text-[1rem]">
        {title}
      </InteractiveHoverButton>
    </Link>
  );
};

export default PrimaryButton;
