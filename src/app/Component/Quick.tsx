"use client"
import Typewriter from 'typewriter-effect';
export default function Quick() {
    return (
        <>
            <div className="mx-2 md:mx-0">
                <section id='journey' className="py-12 bg-blue-500 text-black">
                    <div className="max-w-screen-xl mx-auto text-center">
                        <h2 className="text-3xl font-bold"><Typewriter
                            options={{
                                strings: ['Quick Id'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h2>
                        <div className='text-black' style={{ textAlign: 'center', marginTop: '50px' }}></div>
                        <h1>
                            <em style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                                    <span>Phone :-</span>
                                    <span>+92-317-238-0930</span>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                                    <span>Snapchat Id :-</span>
                                    <a href="https://accounts.snapchat.com/v2/welcome">taha_xiddiqui</a>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                                    <span>Email :-</span>
                                    <span>tahaxiddiqui17@gmail.com</span>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                                    <span>Address :-</span>
                                    <span>Usmania Collage Nazimabad, Karachi</span>
                                </div>
                            </em>
                        </h1>
                    </div>
                </section>
            </div>
        </>
    )
}