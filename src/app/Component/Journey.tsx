"use client"
import Typewriter from 'typewriter-effect';
export default function Journey() {
  return (
    <>
      <div className="mx-2 md:mx-0">
        <section
          className="relative bg-[url(https://wallpapercave.com/wp/wc1685422.jpg)] bg-cover bg-center bg-no-repeat"
        >
          <div className="max-w-screen-xl mx-auto text-center text-blue-500">
            <h1 className="text-3xl font-bold"><Typewriter
              options={{
                strings: ['My Journey'],
                autoStart: true,
                loop: true,
              }}
            /></h1>
          </div>
          <div
            className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
          ></div>

          <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 "
          >
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="block font-serif font-extrabold text-black py-7 px-5 bg-blue-400 rounded-3xl"> I have been working in web development for about 2 years, and this journey started in 2022. Initially, I had no idea about the basics of web development, but in 2023, I focused on learning HTML and CSS, which helped me create basic layouts and websites.
                <br />
                After that, I worked on improving my skills by learning Bootstrap, which proved to be very useful for creating mobile-friendly and responsive designs.
                <br />
                By the end of 2023, I began learning JavaScript, which was a game-changer for me as it taught me how to add interactivity to websites.
                <br />
                In 2024, I started learning TypeScript, which provides a structured and secure coding experience.
                <br />
                Currently, I am learning Next.js, a powerful React framework that is equipping me with advanced tools and techniques to build full-stack web applications.
                <br />
                This journey has been all about continuous learning and self-improvement, bringing new challenges and opportunities every day.</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}