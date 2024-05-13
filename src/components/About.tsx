import React from "react";
import { Bio } from "../../constants";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div id="about" className="h-[500px] bg-gray-800  px-4">
      <div className="flex flex-col md:flex-row items-center justify-center mb-10">
        <div className="text-center md:mr-8 mb-4">
          <p className="font-bold font-serif text-2xl md:text-3xl lg:text-4xl">
            Hi, I am {Bio.name}
            <br />
            <i className="font-serif text-blue-500">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </i>
          </p>
        </div>
        <div className="w-52 h-52 md:w-72 md:h-72 relative">
          <Image
            src="/profile.jpg"
            alt="profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center max-sm:gap-20 lg:gap-52 md:gap-40  justify-center">
        <Link href={Bio.resume}>
          <Button className="text-xl  w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white">Resume</Button>
        </Link>
        <Link href={Bio.github}>
          <Button className="w-full text-xl md:w-auto bg-gray-700 hover:bg-gray-200 text-white hover:text-black">Github</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
