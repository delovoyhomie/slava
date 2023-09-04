import { tondocs1, tondocs2, hackathon, hackathon_crew, start } from "../assets";

const home = [
    {
        title: "Professional Goal:",
        info: "I am enthusiast with immense inspiration and passion for playing a key role in shaping and fostering a dynamic developer community. My mission is to drive engagement and contribute to the creation of innovative applications, especially in the field of TON blockchain.",
    },
    {
        title: "Experience and Efforts:",
        info: "I actively invest my time and efforts into blockchain technology development and enhancement. My work is dedicated to improving the technological aspects of blockchain to make this world more perfect. I am committed to continuous learning and collaboration with influential figures in the field to enrich my experience and contribute to the development of the blockchain community.",
    },
    {
        title: "Values:",
        info: "I am inspired by the values of innovation, learning, and collaboration. I firmly believe that only through collective efforts and continuous education can we reach new heights in the world of blockchain development.",
    },
]

const skills = [
{
    id: "Programming Languages",
    info: [
        "Python",
        "JavaScript",
        "FunC",
        "C++",
    ],
},
{
    id: "Tech skills",
    info: [
        "Linux",
        "Git",
        "SQL",
    ],
},
];

const skills2 = [
    {
    id: "Required for a DevRel Career:",
    info: [
        "Relationship Building",
        "Ability to Communicate Effectively",
        "Technical Knowledge",
        "Analytical Skills",
        "Sharing Your Knowledge",
        "Leadership and Organization",
        "Market and Community Awareness",
        "Marketing Skills (soon)",
    ],
    },

    {
    id: "Life Skills",
    info: [
        "Time Management",
        "Self-Discipline",
        "Networking",
        "Problem Solving",
        "Financial Literacy",
        "Emotional Intelligence",
        "Self-Awareness",
        "Adaptability",
        "Analytical Thinking",
    ],
    },

    {
    id: "Languages",
    info: [
        "English B1+",
        "Russian Native",
    ],
    },
];

const work = [
    {
        title: "Developer Relation Manager at TON Foundation",
        extra: "TON Foundation is a non-profit organization powering the development of the TON ecosystem.",
        data: "Full-time | Remote | 09.2023 - PRESENT",
        info: [
            "DevRel Manager is vital for cultivating an engaged developer community and facilitating innovative TON blockchain app creation.",
            "Advance the development of the TON Blockchain, particularly focusing on enhancing its development ecosystem."
        ],
        skills_title: "Key Responsibilities",
        skills: [
            "Collaborative development of the TON Blockchain",
            "Managing of TON Footsteps"
        ]
    },
    {
        title: "Managing director of TON Footsteps",
        extra: "TON Footsteps is a grant program for the development of the TON ecosystem through community initiatives.",
        data: "Part-time | Remote | 01.2023 - 08.2023",
        info: [
            "Overseeing new initiatives, sourcing executors, coordinating deliveries",
            "Curating public-facing materials for TON grant program projects, specifically those categories that previously aligned with TON Footsteps.",
            "Communicate among different teams to understand and satisfy business needs.",
        ],
        skills_title: "Key Responsibilities",
        skills: [
            "Community Engagement",
            "Developer Advocacy",
            "Strategic Planning",
            "Content Creation",
            "Technical Support",
            "Feedback Collection",
            "Metrics and Reporting"
        ]
    },
];

const education = [
    {
        title: "ITMO University",
        data: "Graduation in 2027",
        info: "Software Engeenering",
    },
];

const activities = [
    { 
        title: "Prize winner of TON Smart Challenge #3 and #4", 
        info: "Enthusiastic developer of smart contracts on FunC.", 
        imgs: [ 
             
        ], 
        link: "https://www.tonsmartchallenge4.com", 
    },
    {
        title: "Contributing to TON Documentation",
        info: "An experienced article & tutorial author in TON Documentation with a portfolio of over five successfully published materials. An active contributor to the improvement and development of documentation.",
        imgs: [
            tondocs1,
            tondocs2,
        ],
        link: "https://docs.ton.org/contribute",
    },
    {
        title: "Multiple-time winner and prize recipient of All-Russian school hackathons",
        info: "Frequent awardee at All-Russian conferences, school olympiads, and various engineering, entrepreneurship, and programming competitions.",
        imgs: [
            hackathon,
            start,
            hackathon_crew
        ],
        link: "https://cybergarden.ru",
    },
    
];

export { home, skills, skills2, work, education, activities };
