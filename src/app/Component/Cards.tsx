"use client"
import Typewriter from 'typewriter-effect';
export default function Cards() {
  return (
    <>

      <section className="bg-blue-100">
        <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8 lg:py-6">
          <h2 className="text-center text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl">
            <Typewriter
              options={{
                strings: ['About Me', '&', 'My Skills'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className='mt-8 flex justify-center flex-col md:flex-row gap-8 items-center'>
            <div className="w-full max-w-xs overflow-hidden bg-blue-500 rounded-lg shadow-lg dark:bg-blue-500">
              <img className="object-contain w-full h-56" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkx19QbFAcx0xK7Y6vQPMo4jexwSIN0nY5w&s" alt="HTML" />

              <div className="py-5 text-center">
                <span className="block text-xl font-bold text-black  dark:text-white" role="link">HTML 5</span>
                <span className="text-sm text-black dark:text-gray-200">I have a strong foundation in HTML, enabling me to structure web pages effectively and create accessible, SEO-friendly content...</span>
              </div>
            </div>
            <div className="w-full max-w-xs overflow-hidden bg-blue-500 rounded-lg shadow-lg dark:bg-blue-500">
              <img className="object-contain w-full h-56" src="https://blog.logrocket.com/wp-content/uploads/2024/06/responsive-image-gallery-css-flexbox.png" alt="CSS" />

              <div className="py-5 text-center">
                <span className="block text-xl font-bold text-black dark:text-white" role="link">CSS 3</span>
                <span className="text-sm text-black dark:text-gray-200">I have a strong foundation in CSS, allowing me to structure web pages effectively and create responsive, SEO-friendly designs...</span>
              </div>
            </div>
            <div className="w-full max-w-xs overflow-hidden bg-blue-500 rounded-lg shadow-lg dark:bg-blue-500">
              <img className="object-cotain w-full h-56" src="https://file-uploads.teachablecdn.com/4c16c4adca0d401bb4295cfbda05ecf1/e1c0e6c521414dbfae2fe1ca931c2f8f" alt="TYPE SCRIPT" />

              <div className="py-5 text-center">
                <span className="block text-xl font-bold text-black dark:text-white" role="link">TYPE SCRIPT</span>
                <span className="text-sm text-black dark:text-gray-200">TypeScript helps me write maintainable, error-free code, enhancing JavaScript&rsquo;s capabilities for large-scale applications...</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}