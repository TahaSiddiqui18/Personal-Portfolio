"use client"
import Typewriter from 'typewriter-effect';


export default function Hero() {
  return (
    <>
      <section
        className="relative bg-[url(https://image.cdn2.seaart.me/2024-11-29/ct4l2jte878c73cghb80-2/a085557e2db4ae5d23c8db6cee977be2_high.webp)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 "
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-black sm:text-5xl"><Typewriter
              options={{
                strings: ['Salam'],
                autoStart: true,
                loop: true,
              }}
            />
              <strong className="block font-extrabold text-blue-500"> My Name Is Hafiz Taha Siddiqui </strong>
            </h1>

            <p className="mt-4 max-w-lg text-black sm:text-xl/relaxed">
              As a passionate web developer, I specialize in creating responsive, user-friendly websites and applications. With a strong foundation in front-end and back-end technologies like HTML, CSS, JavaScript, tailwind Css, and Next js.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/About"
                className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-blue-500 shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto"
              >
                About Me
              </a>

              <a
                href="/Contact"
                className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-black-600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}