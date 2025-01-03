import React from 'react';
import Head from 'next/head';
import { GithubIcon } from '@/components/icons';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import project1 from "../../public/images/projects/Spotify_banner_1.jpg";
import project2 from "../../public/images/projects/CKD.jpg";
import project3 from "../../public/images/projects/Yoga_1.jpg";
import project4 from "../../public/images/projects/Spotify_banner.jpg";

import { motion } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, linkV1, linkV2, github }) => {
  return (
    <article
      className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-3xl xs:rounded-br-3xl xs:p-4'
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'
      />
      <Link href={linkV1} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'> <GithubIcon /></Link>
          <div className='ml-4 flex gap-4'>
            <Link
              href={linkV1}
              target="_blank"
              className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
            >
              Demo V1
            </Link>
            <Link
              href={linkV2}
              target="_blank"
              className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
            >
              Demo V2
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] cs:rounded-[1.5rem]'
      />
      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link
            href={link}
            target="_blank"
            className='text-lg font-semibold underline md:text-base'
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /></Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>HarieshKai | Projects Page</title>
        <meta name="description" content="Projects by HarieshKai showcasing software engineering and AI expertise." />
      </Head>

      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text="Crafting Intelligence, One Project at a Time!"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-8 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title="Emotion-Based Music Recommender: Spotify"
                img={project1}
                summary="A music recommendation app that detects user emotions and suggests songs and artists based on real-time mood analysis."
                linkV1="https://emotionspotifyapp-v1.streamlit.app/"
                linkV2="https://emotionspotifyapp-v2.streamlit.app/"
                github="https://github.com/Hariesh-Kai/Spotify_Based_Emotion_Music_Recommender"
                type="Featured Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Forecasting the Risk of Chronic Kidney Disease"
                img={project2}
                summary="A predictive system leveraging GNN to estimate CKD progression with high accuracy."
                link="https://github.com/Hariesh-Kai/YogaPoseClassifier"
                github="https://github.com/Hariesh-Kai/YogaPoseClassifierb"
                type="Research Project"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Yoga Pose Recognition and Correction"
                img={project3}
                summary="Real-time yoga pose detection and correction system powered by CNN-LSTM and MediaPipe."
                link="https://github.com/Hariesh-Kai/TeenGuard"
                github="https://github.com/Hariesh-Kai/TeenGuard"
                type="AI Application"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Emotion-Based Music Recommender: YouTube"
                img={project4}
                summary="Utilizes TensorFlow for emotion detection and recommends YouTube music content tailored to user preferences."
                linkV1="https://emotuner-v1.streamlit.app/"
                linkV2="https://emotuner-v2.streamlit.app/"
                github="https://github.com/Hariesh-Kai/Youtube_Based_Emotion_Music_Recommender"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
