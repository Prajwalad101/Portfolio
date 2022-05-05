import type { NextComponentType } from 'next';

import Link from 'next/link';

const Projects: NextComponentType = () => {
  return (
    <div className="font-sen my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://bug-engine.vercel.app" passHref>
          <a
            className="h-[9rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">BugEngine</p>
              <p>An issue tracker made with NextJS and Tailwind</p>
            </div>
          </a>
        </Link>

        <Link href="https://aims-web.vercel.app" passHref>
          <a
            className="h-[9rem] w-[15rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">AIMS</p>
              <p>Agriculture Information Management System made with NextJS</p>
            </div>
          </a>
        </Link>
        <Link href="https://nayashop.netlify.app" passHref>
          <a
            className="h-[9rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Naya</p>
              <p>An E-commerce site made with react and tailwindcss</p>
            </div>
          </a>
        </Link>
        <Link href="https://github.com/avneesh0612/Orbits-UI" passHref>
          <a
            className="h-[9rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Blog</p>
              <p>A Personal Blog made using NextJS </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
