import { useRef, React } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm block'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full mt-2 text-justify'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        type="Bachelor Of Technology in Artificial Intelligence and Machine Learning"
                        time="2021 – Expected March 2025"
                        place="Kongu Engineering College"
                        info="Cumulative GPA: 7.58/10. Relevant courses include Machine Learning, Deep Learning, and Ethical AI."
                    />
                    <Details
                        type="High School (HSC)"
                        time="2020 – 2021"
                        place="CEOA Matriculation Higher Secondary School"
                        info="Scored 84.064%. Key subjects: Physics, Chemistry, and Mathematics."
                    />
                    <Details
                        type="Secondary School (CBSE)"
                        time="2018 – 2019"
                        place="GEMS Our Own English High School (Boys Branch)"
                        info="Scored 73.33%. Focus on Mathematics and Science."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
