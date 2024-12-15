export default function Footer() {
  return (
    <>
      <footer className="text-gray-400 bg-blue-500 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <img className="w-10" src="https://t4.ftcdn.net/jpg/03/16/32/17/360_F_316321700_QhXMFis4h8yzlnk2lTGUMtlReUBlKJ4a.jpg" alt="logo" />
            <span className="ml-3 text-xl">Hafiz Taha Siddiqui</span>
          </a>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">© 2k24 Hafiz Taha Siddiqui Porfolio — Latest  |
            <a href="https://github.com/TahaSiddiqui18" className="text-black ml-1" target="_blank" rel="noopener noreferrer">Github</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-black" href="https://www.youtube.com/channel/UC5KWJBixm-rWIIuPy6YKxgw">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5" >
                <path d="M23.498 6.186a2.998 2.998 0 0 0-2.109-2.12C19.662 3.5 12 3.5 12 3.5s-7.662 0-9.39.565a2.998 2.998 0 0 0-2.11 2.121A31.82 31.82 0 0 0 0 11.999a31.82 31.82 0 0 0 .5 5.814 2.998 2.998 0 0 0 2.11 2.12c1.728.565 9.39.565 9.39.565s7.662 0 9.389-.565a2.998 2.998 0 0 0 2.11-2.12 31.824 31.824 0 0 0 .5-5.814 31.825 31.825 0 0 0-.5-5.813zM9.75 15.567V8.43l6.321 3.568-6.32 3.568z" />
              </svg>
            </a>
            <a className="ml-3 text-black" href="https://www.facebook.com/taha.siddiqui.77985741">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-black" href="https://www.instagram.com/xiddiqui_hun_yawr/">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-black" href="https://www.linkedin.com/in/taha-xiddiqui-b36686301/">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}