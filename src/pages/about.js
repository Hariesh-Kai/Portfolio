import Head from 'next/head';
import React, { useRef, useEffect } from 'react';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import { useInView, useSpring, useMotionValue } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const About = () => {
    return (
        <>
            <Head>
                <title>HarieshKai | About Page</title>
                <meta name="description" content="About HarieshKai, a software engineer, designer, and freelancer." />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Passion Fuels Purpose!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-center"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        {/* Biography Section */}
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium text-justify">
                                Hi, I’m Hariesh R., an AI enthusiast passionate about transforming cutting-edge research into impactful real-world solutions. With expertise in deep learning and full-stack development, I build intelligent applications that enhance user experiences and solve complex challenges.
                            </p>
                            <p className="my-4 font-medium text-justify">
                                My philosophy revolves around creating technology that is both functional and delightful to use. By leveraging deep learning, I innovate and push boundaries, continuously learning and evolving in this fast-paced domain.
                            </p>
                            <p className="font-medium text-justify">
                                I am eager to collaborate on projects where I can apply my skills to make a meaningful difference. Let’s build the future, together!
                            </p>
                        </div>

                        {/* Profile Image Section */}
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="HarieshKai"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* Skills Section */}
                        <div className="col-span-2 flex flex-col items-start justify-start xl:col-span-8 xl:flex-row xl:items-center md:order-3 gap-2">
    <h2 className="mb-2 font-bold uppercase text-dark/75 dark:text-light/75">Skills stats</h2>
    <Skills />
</div>

                    </div>

                    {/* Experience & Education Section */}
                    <div className="mt-16">
                        <h2 className="font-bold text-8xl mb-8 w-full text-center md:text-6xl xs:text-4xl">My Journey </h2>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
                            {/* Experience */}
                            <div>
                                <h3 className="text-4xl font-bold uppercase text-dark/75 dark:text-light/75 mb-4 text-center md:text-3xl">
                                    Experience
                                </h3>
                                <Experience />
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="text-4xl font-bold uppercase text-dark/75 dark:text-light/75 mb-4 text-center md:text-3xl">
                                    Education
                                </h3>
                                <Education />
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default About;
