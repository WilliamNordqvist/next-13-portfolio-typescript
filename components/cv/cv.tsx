import Link from "next/link";
import { CvIcon } from "../icons/cv";
import { Title } from "../title/title";

export const CV = () => {
  return (
    <div className="flex flex-col items-center">
      <Title>My CV</Title>
      <Link
        href="https://assets.ctfassets.net/dgbqz1h8siux/1STy1sjXfeRf5aCo9krQVv/eb6f56af531d508befec9a9a441d59e9/WilliamFE2023.pdf"
        download="WilliamNordvist - CV/Personal Letter"
      >
        <CvIcon />
      </Link>
    </div>
  );
};
