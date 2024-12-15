"use client"
import Typewriter from 'typewriter-effect';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export default function Skills() {
  return (
    <>
      <div className="bg-blue-100 text-black pb-10 mt-0.9">
        <h1 className="flex justify-center align-center text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-yellow-500 py-8 rounded-lg">
          My Skils
        </h1>
        <div className="flex justify-center gap-6 flex-wrap">
          <h1 className="text-3xl font-bold text-center my-auto">
            <Typewriter
              options={{
                strings: ['Programing', 'Web Designing', 'Web development'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="flex flex-col items-center bg-black p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-300 transition">
            <FaHtml5 className="text-6xl text-orange-500 mb-2" />
            <p className="text-lg font-semibold text-blue-500">HTML 5</p>
          </div>
          <div className="flex flex-col items-center bg-black p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-300 transition">
            <FaCss3Alt className="text-6xl text-blue-400 mb-2" />
            <p className="text-lg font-semibold text-blue-500">CSS 3</p>
          </div>
          <div className="flex flex-col items-center bg-black p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-300 transition">
            <FaBootstrap className="text-6xl text-purple-700 mb-2" />
            <p className="text-lg font-semibold text-blue-500">Bootstrap 5</p>
          </div>
          <div className="flex flex-col items-center bg-black p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-300 transition">
            <FaJs className="text-6xl text-yellow-400 mb-2" />
            <p className="text-lg font-semibold text-blue-500">JavaScript</p>
          </div>
          <div className="flex flex-col items-center bg-black p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-300 transition">
            <SiTypescript className="text-6xl text-blue-500 mb-2" />
            <p className="text-lg font-semibold text-blue-500">TypeScript</p>
          </div>
        </div>
      </div>
    </>
  );
};
