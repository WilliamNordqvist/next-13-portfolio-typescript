import Link from "next/link";
import { GithubIcon } from "../icons/github";
import { GmailIcon } from "../icons/gmail";
import { LinkedInIcon } from "../icons/linkedIn";

export const Footer = () => {
  return (
    <footer className=" h-40 bg-gradient-to-t from-black to-transparent flex items-end justify-center space-x-10 p-5">
      <Link
        className="pointer"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/william-nordqvist-7221b340/"
      >
        <LinkedInIcon className="w-8 h-8" />
      </Link>
      <Link
        className="pointer"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/WilliamNordqvist"
      >
        <GithubIcon className="w-8 h-8" />
      </Link>
      <Link className="pointer" href="mailto:wnordqvist@gmail.com">
        <GmailIcon className="w-8 h-8" />
      </Link>
    </footer>
  );
};
