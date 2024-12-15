import Link from "next/link"
export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Eo_circle_blue_letter-t.svg/1024px-Eo_circle_blue_letter-t.svg.png" alt="logo" />
            <span className="ml-9 text-xl">Hafiz Taha Siddiqui</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-blue-500" href={"/"}>Home</Link>
            <Link className="mr-5 hover:text-blue-500" href={"../About"}>About </Link>
            <Link className="mr-5 hover:text-blue-500" href={"../Contact"}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  )
}