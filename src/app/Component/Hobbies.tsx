"use client"
import Typewriter from 'typewriter-effect';
export default function Hobbies() {
  return (
    <>
      <section id="hobbies" className="py-16 bg-blue-100">
        <div className="max-w-screen-lg text-center mx-auto">
          <h2 className="text-3xl font-bold text-blue-500"><Typewriter
            options={{
              strings: ['Hobbies', '&', 'Interests'],
              autoStart: true,
              loop: true,
            }}
          /></h2>
          <p className="mt-4 text-lg text-black">Outside of coding, I enjoy those moments that allow me to experience every color of life. Gaming, small outings with friends, or spending time with music—these little things make my day special.....</p>
        </div>
        <div className='mx-2 md:mx-0'>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-500 p-6 rounded-lg shadow-md">
              <img
                src="https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg"
                alt="Gamings"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black mt-4">Gamings</h3>
              <p className="mt-2 text-black">Gaming gives me an opportunity to relax and provides a way to experience stories in an interesting and enjoyable manner...</p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg shadow-md">
              <img
                src="https://dp-pic.com/wp-content/uploads/2024/03/four-friends-standing-together-on-a-mountain-in-friendship-friend-dp-friendship-friends-pfp-friends-group-dp-group-dp-2.jpg"
                alt="Outing"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black mt-4">Outing</h3>
              <p className="mt-2 text-black">Outings with friends are a beautiful part of life’s memorable moments, where every moment is filled with friendship, laughter, and the joy of spending time together...</p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg shadow-md">
              <img
                src="https://thumbs.dreamstime.com/b/man-standing-guitar-sunset-time-horizontal-photo-72098233.jpg"
                alt="Music"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-black mt-4">Music</h3>
              <p className="mt-2 text-black">In the notes of the guitar, There are colors that words cannot express. When fingers move on the strings, It feels as if the heart&rsquo;s emotions are captured in those very melodies...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
