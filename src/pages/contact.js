import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    return (
        <>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center bg-light text-dark dark:bg-dark dark:text-light min-h-screen">
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <AnimatedText 
                        text="Let&apos;s Connect!" 
                        className="mb-16 text-8xl lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8 text-center" 
                    />
                    <div className="flex items-start justify-between w-full lg:flex-col gap-8">
                        {/* Wrapper to Ensure Equal Box Sizes */}
                        <div className="flex w-full gap-8 lg:flex-col lg:gap-6">
                            {/* Contact Information Section */}
                            <div className="flex-1 rounded-2xl border-2 border-dark dark:border-light bg-light dark:bg-dark p-8 shadow-lg flex flex-col justify-between min-h-[400px]">
                                <div>
                                    
                                    <p className="text-left text-lg text-gray-700 dark:text-gray-300 mb-8">
                                        Every great journey begins with a simple connection. Feel free to reach out and let&apos;s explore ideas, collaborate on projects, or discuss opportunities. Together, we can turn concepts into reality and challenges into achievements. Let&apos; connect and make something extraordinary happen!
                                    </p>
                                    <ul className="space-y-4 text-left">
                                        <li className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                                            <span className="text-lg text-dark dark:text-light">+91 7806844832</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                                            <span className="text-lg text-dark dark:text-light">Perunduai, Madurai</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-600"></div>
                                            <span className="text-lg text-dark dark:text-light">hariehkai@example.com</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-8 text-left">
                                    <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
                                    <div className="flex space-x-6">
                                        <a
                                            href="https://github.com/your-github"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-3xl text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
                                        >
                                            <FaGithub />
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/your-linkedin"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-3xl text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
                                        >
                                            <FaLinkedin />
                                        </a>
                                        <a
                                            href="https://instagram.com/your-instagram"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-3xl text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
                                        >
                                            <FaInstagram />
                                        </a>
                                        <a
                                            href="https://twitter.com/your-twitter"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-3xl text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
                                        >
                                            <FaTwitter />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Messenger Section */}
                            <div className="relative flex-1 rounded-2xl border-2 border-dark dark:border-light bg-gradient-to-tr from-light  to-light dark:from-dark dark:to-dark p-8 shadow-xl flex flex-col justify-between min-h-[400px]">
                            {/* Decorative Shadow Background */}
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light shadow-lg dark:shadow-xl" />
                                <form className="flex flex-col gap-6 w-full font-bold">
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
                                    <button className="text-bold placeholder:text-dark dark:placeholder:text-light w-1/2 bg-dark text-light dark:bg-light dark:text-dark rounded-full font-semibold p-4 mt-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out self-center">
                                        Let&apos;s Talk
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
