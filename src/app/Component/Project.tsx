"use client"
import Typewriter from 'typewriter-effect';
export default function Project() {
  return (
    <>
      <section id="projects" className="py-16 bg-blue-100">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-500"><Typewriter
            options={{
              strings: ['Its My Projects'],
              autoStart: true,
              loop: true,
            }}
          /></h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 mx-2 md:mx-0">
            <div className="max-w-2xl overflow-hidden bg-blue-500 rounded-lg shadow-md dark:bg-blue-500 ">
              <img className="w-full h-64 object-contain" src="data:image/jpeg;base64,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" alt="Picture" />
              <div className="p-6">
                <div>
                  <span className="text-xl font-medium text-black uppercase ">1: Megashop Website</span><br />
                  <p className="mt-2 text-sm text-black dark:text-black">This is my personal dummy Mega website, which I consider my masterpiece created with HTML & CSS...</p><br />
                  <a href="https://mega-shop-get.netlify.app/" className="mt-4 text-black hover:underline" target="_blank" rel="noopener noreferrer"> View on Browser </a>
                  |
                  <a href="https://github.com/TahaSiddiqui18/Mega-Shop" className="mt-4 text-black hover:underline" target="_blank" rel="noopener noreferrer"> Visit Github </a>
                </div>
              </div>
            </div>
            <div className="max-w-2xl overflow-hidden bg-blue-500 rounded-lg shadow-md dark:bg-gray-800">
              <img className="w-full h-64 object-contain" src="https://img.freepik.com/free-photo/resume-apply-work-form-concept_53876-148017.jpg" alt="Picture" />
              <div className="p-6">
                <div>
                  <span className="text-xl font-medium text-black uppercase ">2: Resume Builder</span><br />
                  <p className="mt-2 text-sm text-black dark:text-black">This is my personal dummy Resume Builder, which I consider my masterpiece created with HTML & CSS...</p><br />
                  <a href="https://milestone-5-2.netlify.app/" className="mt-4 text-black hover:underline" target="_blank" rel="noopener noreferrer"> View on Browser </a>
                  |
                  <a href="https://github.com/TahaSiddiqui18/hackathon" className="mt-4 text-black hover:underline" target="_blank" rel="noopener noreferrer"> Visit Github </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}