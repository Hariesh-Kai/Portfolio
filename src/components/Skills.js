import React from "react";
import { motion } from "framer-motion";

// Skill Card Component
const SkillCard = ({ category, skills }) => {
    return (
        <motion.div
            className="w-32 h-auto p-4 space-y-2 bg-light dark:bg-dark rounded-lg shadow-md hover:shadow-lg transition duration-300 group mx-4 border-2 border-black dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
        >
            {/* Category Title */}
            <h3 className="text-sm font-semibold text-dark dark:text-light group-hover:text-dark/80 group-hover:dark:text-light/80 break-words">
                {category}
            </h3>

            {/* Skill List (Initially hidden, shown on hover) */}
            <ul className="space-y-1 text-dark/75 dark:text-light/75 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-60 overflow-hidden transition-all duration-300 ease-in-out">
                {skills.map((skill, index) => (
                    <li key={index} className="text-xs font-medium break-words">
                        <div className="flex justify-between">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full mt-1">
                            <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Skills = () => {
    const skillData = [
        {
            category: "AI",
            skills: [
                { name: "Machine Learning", level: 80 },
                { name: "Deep Learning", level: 75 },
                { name: "Natural Language Processing", level: 70 },
            ],
        },
        {
            category: "Web Development",
            skills: [
                { name: "HTML", level: 85 },
                { name: "CSS", level: 80 },
                { name: "JavaScript", level: 75 },
                { name: "ReactJS", level: 70 },
                { name: "NextJS", level: 65 },
            ],
        },
        {
            category: "Design",
            skills: [
                { name: "Figma", level: 70 },
                { name: "Adobe XD", level: 60 },
                { name: "Wireframing", level: 65 },
            ],
        },
        {
            category: "Hosting",
            skills: [
                { name: "Firebase", level: 70 },
                { name: "Vercel", level: 75 },
                { name: "Netlify", level: 80 },
            ],
        },
    ];

    return (
        <>
            <div className="w-full flex flex-wrap justify-start gap-6">
                {/* Side-by-Side Layout for Skill Categories */}
                {skillData.map((skill, index) => (
                    <SkillCard key={index} category={skill.category} skills={skill.skills} />
                ))}
            </div>
        </>
    );
};

export default Skills;
