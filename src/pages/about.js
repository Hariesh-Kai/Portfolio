import Head from 'next/head'
import React, { useRef , useEffect } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { useInView,useSpring,useMotionValue } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref,{once:true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0)<=value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue,value])

    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
            <title>HarieshKai | About Page</title>
            <meta name="description" content="About HarieshKai, a software engineer, designer, and freelancer." />
        </Head> 
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>Biography</h2>
                    <p className='font-medium'>
                    Hi, I&lsquo;m Hariesh R., an AI enthusiast specializing in deep learning, dedicated to transforming research into practical solutions that address real-world challenges. With a foundation in full-stack development, I aim to create intelligent applications that not only enhance user experiences but also meet the needs of diverse audiences.
            </p>
            
<p className='my-4 font-medium'>
I believe that technology should go beyond just solving problems; it should also be user-friendly and enjoyable. My passion lies in developing AI models that leverage deep learning techniques to drive innovation and provide impactful solutions. I continuously explore new technologies to stay at the forefront of this rapidly evolving field.
</p>

<p className='font-medium'>
Whether I&lsquo;m creating an AI model or integrating new advancements, I infuse every project with my dedication to excellence and creativity. I eagerly anticipate the opportunity to apply my skills and passion for AI in your next project!
</p>

                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2
                 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                 '>
                     <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light xl:col-span-4 md:order-1 md:col-span-8' />
                    <Image src={profilePic} alt="HarieshKai" className='w-full h-auto rounded-2xl'  
                    priority
                    sizes="(max-width:768px) 
                    100vw,(max-width: 1200px) 50vw, 
                    33vw"
                    />
                </div>
                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={50}/>+ 
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg 
                        sm-text-base'>
                            Satisfied Clients</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={40}/>+ 
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base'>Projects Completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={2}/>+ 
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base'>Years of Experience</h2>
                    </div>
                </div>
                
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
            

        </main>
    </>
  )
}

export default about
