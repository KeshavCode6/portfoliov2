"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { motion, useInView } from "framer-motion"

const projects = [
    {
        title: "CodeAAI",
        type: "Functional App",
        description:
            "This is a fully functional leetcode-inspired coding challenge website. Check it out at CodeAAI.org. It was made using NextJS, TailwindCSS and more. Code is not public on GitHub yet for security purposes.",
        size: "lg",
        links: [{ href: "https://www.codeaai.org", icon: <FaExternalLinkAlt /> }],
    },
    {
        title: "AAI CTF",
        type: "Functional App",
        description:
            "This is a fully cybersecurity challenge website. It was built upon CTFD. I created many challenges for the website, along with the home page. (Currently down for maintenance)",
        size: "sm",
        links: [{ href: "https://www.aaictf.org", icon: <FaExternalLinkAlt /> }],
    },
    {
        title: "DartCTF",
        type: "Functional App",
        description:
            "This was a fully functional cybersecurity challenge website. I created the entire framework for the website from scratch using Express JS and Bootstrap",
        size: "sm",
        links: [
            { href: "https://github.com/KeshavCode6/dartctf", icon: <FaGithub /> },
        ],
    },
    {
        title: "My Portfolio",
        type: "Static Site",
        description: "This was my personal portfolio website, which you are on now and is also available on GitHub! This site was created using NextJS and Tailwind CSS",
        size: "sm",
        links: [{ href: "https://github.com/KeshavCode6/portfoliov2", icon: <FaGithub /> }],
    },
    {
        title: "Cosiva",
        type: "Static Site",
        description:
            "This is a unpolished static site designed for a nonprofit that was discontinued. The site was created using NextJS and Tailwind CSS",
        size: "sm",
        links: [{ href: "https://github.com/KeshavCode6/cosiva", icon: <FaGithub /> }, { href: "https://cosiva.keshav.pro", icon: <FaExternalLinkAlt /> }],
    },
    {
        title: "GemPlay",
        type: "Functional App",
        description:
            "A desktop app created for the Intro to Programming competition in FBLA. It is built upon Tauri and React. GemPlay creates dynamic ai stories using Gemini!",
        size: "lg",
        links: [{ href: "https://github.com/KeshavCode6/GemPlay", icon: <FaGithub /> },],
    },
    {
        title: "NSACC",
        type: "Static Site",
        description:
            "This is a unpolished static site designed for a nonprofit that was discontinued. The site was created using NextJS and Tailwind CSS",
        size: "sm",
        links: [{ href: "https://github.com/KeshavCode6/nsacc", icon: <FaGithub /> }, { href: "https://nsacc.keshav.pro", icon: <FaExternalLinkAlt /> }],
    },
]

export function Projects() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <div className="flex flex-col w-full items-center py-16 pt-44 pb-24  xl:px-16" id="projects">
            <p className="text-primary text-base sm:text-lg">My Projects</p>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-8 text-center">What else have I made?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-4 mt-8 px-8 z-40 md:mx-32" ref={ref}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={project.size == "lg" ? "col-span-2" : `col-span-1`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                            x: {
                                duration: 1
                            }
                        }}
                        whileHover={{ y: -10 }}
                    >
                        <Card className="p-6 h-full flex flex-col justify-between ">
                            <div>
                                <p className="font-semibold text-sm sm:text-base text-blue-500 mb-2">{project.type}</p>
                                <h3 className="font-bold text-lg sm:text-xl mb-2">{project.title}</h3>
                                <p className="text-sm sm:text-base text-muted-foreground">{project.description}</p>
                            </div>
                            <div className="flex flex-col lg:flex-row mt-4 gap-2">
                                {project.links.map((link, idx) => (
                                    <Button key={idx} size="sm" variant="secondary" asChild>
                                        <Link href={link.href} target="_blank" className="flex items-center">
                                            {link.icon}
                                            <span className="ml-2 hidden sm:inline">{link.icon.type === FaGithub ? "GitHub" : "Visit"}</span>
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

