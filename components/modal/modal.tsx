import { WorksProps } from "@/services/casesService";
import { motion } from "framer-motion";
import Img from "next/image";
import Link from "next/link";
import { GithubIcon } from "../icons/github";
import { WebIcon } from "../icons/web";

type ModalType = {
  work: WorksProps;
  closeModal: () => void;
};

export const Modal = ({
  closeModal,
  work: { name, image, description, link, githubLink },
}: ModalType) => {
  return (
    <motion.div
      initial={{ y: -1500 }}
      animate={{ y: 0 }}
      className="modal fade fixed top-0 left-0  w-full h-full outline-none overflow-x- overflow-y-auto sm:p-5"
      tab-index="-1"
      id="defaultModal"
    >
      <div className=" modal-dialog w-full h-full  modal-xl relative bg-[rgba(72,84,96,.99)] bg-clip-padding sm:rounded-md outline-none text-current p-5 overflow-auto">
        <div className=" modal-header p-4 border-b border-gray-200 rounded-t-md">
          <h3 className=" text-gray-100 text-3xl text-center font-medium leading-normal">
            {name}
          </h3>
          <button
            onClick={closeModal}
            type="button"
            className="cursor-pointer gray-100 absolute top-5 right-3"
            data-modal-hide="defaultModal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="flex justify-center flex-col items-center">
          <Img
            className="my-5 shadow-[0_10px_20px_-6px_rgb(0,0,0)]"
            width={1000}
            height={40}
            src={image.url}
            loader={() => image.url}
            alt={`printscreen from website ${name}`}
          />
          <div
            className="text-white max-w-5xl	text-left font-extralight  w-full ml-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="mt-7 flex justify-center">
          {link && (
            <Link rel="noopener noreferrer" target="_blank" href={link}>
              <WebIcon className="w-7 h-7 mx-2 cursor-pointer" />
            </Link>
          )}

          <Link rel="noopener noreferrer" target="_blank" href={githubLink}>
            <GithubIcon className="w-7 h-7 mx-2 cursor-pointer" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
