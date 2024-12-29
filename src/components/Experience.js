import { useRef, React } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work, techStack }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position} <a href={companyLink} className='text-primary dark:text-primaryDark capitalize'>@ {company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
                {techStack && (
                    <p className='font-medium text-dark/75 dark:text-light/75 mt-2'>
                        <strong>Tech Stack:</strong> {techStack}
                    </p>
                )}
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        position="Research Intern"
                        company="Universiti Teknologi PETRONAS"
                        companyLink="https://www.utp.edu.my"
                        time="Jan 2024 – June 2024"
                        address="Perak, Malaysia (Remote)"
                        work="Collaborated with UTP researchers on Deep and Reinforcement Learning models, including Q-Learning, Deep Q-Learning, and CNN-LSTM. Enhanced sentiment analysis by optimizing and evaluating model performance."
                        techStack="Python, TensorFlow, Keras, Scikit-learn"
                    />
                    <Details
                        position="Web Developer Intern"
                        company="Fabromen"
                        companyLink="#"
                        time="March 2023 - April 2023"
                        address="Erode, TN (Remote)"
                        work="Developed the company’s first website, focusing on front-end and UX/UI design. Collaborated on UI prototypes in Figma and implemented responsive designs using HTML and CSS."
                        techStack="HTML, CSS, Figma"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
