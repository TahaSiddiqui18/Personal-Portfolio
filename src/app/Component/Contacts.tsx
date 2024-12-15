export default function Contacts() {
  return (
    <>
      <div className="mx-2 md:mx-0 ">
        <section className="text-gray-400 bg-blue-100 body-font relative ">
          <div className="absolute inset-0 bg-black rounded-lg">
            <iframe title="map" width="100%" height="100%" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi%20Nazimabad&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16);" }}></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-blue-300 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
              <h1 className="text-blue-900 text-lg mb-1 font-medium title-font"><em>Contact</em></h1>
              <h3 className="leading-relaxed mb-5 text-black"><em>Fill out the form below to get in touch with me...</em></h3>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-black"><em>Email</em></label>
                <input type="email" id="email" name="email" className="w-full bg-blue-100 rounded border border-black focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-black"><em>Message</em></label>
                <textarea id="message" name="message" className="w-full bg-blue-100 rounded border border-black focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-black bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"><em>Button</em></button>
              <h3 className="text-xs text-black text-opacity-90 mt-3"><em>Chicharrones blog helvetica normcore iceland tousled brook viral artisan...</em></h3>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}