import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text_hello = "Say Hello";

    return (
        <>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center bg-light text-dark dark:bg-dark dark:text-light min-h-screen">
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <AnimatedText 
                        text="Let's Connect!" 
                        className="mb-16 text-8xl lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8 text-center" 
                    />
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 md:w-full flex items-center justify-center text-6xl">
                            <div className="flex">
                                {text_hello.split("").map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 0 }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.1,
                                        }}
                                        className="inline-block text-black dark:text-light"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                                <span className="ml-2">😊</span>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-full mt-8 lg:mt-12 relative">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light shadow-lg dark:shadow-xl" />
                            <div className="z-10 rounded-2xl border-2 border-dark dark:border-light bg-light dark:bg-dark p-8 shadow-lg">
                                <form className="flex flex-col gap-6 w-full max-w-lg mx-auto font-bold">
                                    <div className="flex gap-6">
                                        <input 
                                            type="text" 
                                            placeholder="Name" 
                                            className="placeholder:text-dark dark:placeholder:text-light text-dark dark:text-light bg-light dark:bg-dark border border-dark dark:border-light p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-light w-full transition-shadow duration-300 ease-in-out"
                                        />
                                        <input 
                                            type="text" 
                                            placeholder="Email" 
                                            className="placeholder:text-dark dark:placeholder:text-light text-dark dark:text-light bg-light dark:bg-dark border border-dark dark:border-light p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-light w-full transition-shadow duration-300 ease-in-out"
                                        />
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Subject" 
                                        className="placeholder:text-dark dark:placeholder:text-light text-dark dark:text-light bg-light dark:bg-dark border border-dark dark:border-light p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-light w-full transition-shadow duration-300 ease-in-out"
                                    />
                                    <textarea 
                                        placeholder="Message" 
                                        className="placeholder:text-dark dark:placeholder:text-light text-dark dark:text-light bg-light dark:bg-dark border border-dark dark:border-light p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-light w-full h-40 resize-none transition-shadow duration-300 ease-in-out"
                                    />
                                    <button className="text-bold placeholder:text-dark dark:placeholder:text-light w-1/2 bg-dark text-light dark:bg-light dark:text-dark rounded-full font-semibold p-4 mt-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        Let's Talk
                                    </button>
                                    {success && (
                                        <motion.span 
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }} 
                                            className="text-green-600 font-semibold mt-4"
                                        >
                                            Your message has been sent successfully!
                                        </motion.span>
                                    )}
                                    {error && (
                                        <motion.span 
                                            initial={{ opacity: 0 }} 
                                            animate={{ opacity: 1 }} 
                                            className="text-red-600 font-semibold mt-4"
                                        >
                                            Something went wrong!
                                        </motion.span>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Contact;
