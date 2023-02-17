import Link from "next/link";
import { CvIcon } from "../icons/cv";
import { Title } from "../title/title";

export const CV = () => {
  return (
    <div className="flex flex-col items-center">
      <Title>My CV</Title>
      <Link
        href="https://assets.ctfassets.net/dgbqz1h8siux/1STy1sjXfeRf5aCo9krQVv/7cb9b541ed232f1d2ab01537aec0d677/WilliamFE2022.pdf"
        download="WilliamNordvist - CV/Personal Letter"
      >
        <CvIcon />
      </Link>
    </div>
  );
};
