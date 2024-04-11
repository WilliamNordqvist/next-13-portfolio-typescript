import { CvIcon } from "../icons/cv";
import Link from "next/link";
import { Title } from "../title/title";

export const CV = () => {
  return (
    <div className="flex flex-col items-center">
      <Title>My CV</Title>
      <Link
        href="https://assets.ctfassets.net/dgbqz1h8siux/1STy1sjXfeRf5aCo9krQVv/2abbe651f461a51a042301c3383747e1/WilliamN_FE_2024.pdf"
        download="WilliamNordvist - CV/Personal Letter"
      >
        <CvIcon />
      </Link>
    </div>
  );
};
