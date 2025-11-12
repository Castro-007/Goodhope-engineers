import {FaBuilding, FaDraftingCompass, FaHardHat, FaRoad, FaClipboardCheck,
} from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import Team1 from "../assets/Images/Teams/OJ Ajayi_1S.jpg";

import Clock8 from "../assets/Images/icons8-clock.png";
import Professional from "../assets/Images/icons8-professional.png";
import Excellence from "../assets/Images/icons8-graduation-cap.png";
import TeamCollab from "../assets/Images/icons8-teamwork.png";
import Innovation from "../assets/Images/icons8-innovation.png";
import Customer from "../assets/Images/icons8-customer-service.png";
import StarRating from "../assets/Images/icons8-star.png";
import Project7 from "../assets/Images/Project/Project7.jpg";
import Project2 from "../assets/Images/Project/Project2.jpg";
import Project5 from "../assets/Images/Project/Bostwana Academic Hospital.jpeg";
import Project6 from "../assets/Images/Project/Project6.jpg";
import Project8 from "../assets/Images/Project/Project8.jpg";
import EngIntegration from "../assets/Images/Services/Engineering-Integrations.jpg"
import PDesign from "../assets/Images/Services/PDesign.jpg"
import CManage from "../assets/Images/Services/ConSupervision.jpg"
import SiteE from "../assets/Images/Services/SiteE.jpg"

import Sewer from "../assets/Images/Services/sewer1.jpg"
import SiteEarth from "../assets/Images/Services/shane-mclendon.jpg"
import StrucDes from "../assets/Images/Services/danist-struct.jpg"
import Reinforce from "../assets/Images/Services/Reinforce.jpg"
import ProjPlan from "../assets/Images/Services/ProjPlan.jpg"
import Compass from "../assets/Images/Services/compass_icon1.png"
import ConstructIcon from "../assets/Images/Services/construction_icon2.png"
import CraneIcon from "../assets/Images/Services/crane_icon3.png"
import HoriArrow from "../assets/Images/Services/horizontal_arrow.png"
import ECSA from "../assets/Images/ECSA.png"
import CESA from "../assets/Images/CESA.png"
import NSE from "../assets/Images/society.jpg"
import COREN from "../assets/Images/coren1.jpeg"
import CivilEngi from "../assets/Images/Services/Road-project.jpg"



const starInc = Array(5).fill(StarRating);

export const NavBlink = [
  {
    Id: 1,
    name: "Home",
    Link: "/",
  },
  {
    Id: 2,
    name: "About",
    Link: "/About",
  },
  {
    Id: 3,
    name: "Solutions",
    Link: "/Services",
  },
  {
    Id: 4,
    name: "Projects",
    Link: "/Project",
  },
  {
    Id: 5,
    name: "Contact",
    Link: "/Contact",
  },
];

export const imageSlider = [
  {
    Id: 1,
    img: CivilEngi,
    alt: "story building",
    headtxt: "Civil Engineering",
  },
  {
    Id: 2,
    img: "https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_546,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg",
    alt: "workers at work",
    headtxt: "Structural Engineering",
  },
  {
    Id: 3,
    img: "https://static.wixstatic.com/media/a4c183_41a680c0ed504e07b25a16ff251e96fb~mv2.jpg/v1/fill/w_546,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-183371607.jpg",
    alt: "crane at work",
    headtxt: "Construction Project Management",
  },
];

export const ScrollText = [
  {
    Id: 1,
    text: "Crafting Exceptional Result, For Every Project since 2013  ",
  },
  {
    Id: 2,
    text: "Crafting Exceptional Result, For Every Project since 2013  ",
  },
  {
    Id: 3,
    text: "Crafting Exceptional Result, For Every Project since 2013  ",
  },
  {
    Id: 4,
    text: "Crafting Exceptional Result, For Every Project since 2013  ",
  },
  {
    Id: 5,
    text: "Crafting Exceptional Result, For Every Project since 2013  ",
  },
];

export const Achievements = [
  {
    Id: 1,
    number: 500,
    title: "Completed Projects",
    suffix: "+",
    text: "Actively engaged in driving innovation across diverse areas.",
  },
  {
    Id: 2,
    number: 75,
    title: "Skilled Experts",
    text: "A team of passionate and skilled engineers, scientists, and researchers.",
  },
  {
    Id: 3,
    number: 22,
    title: "Awards & Accolades",
    text: "Recognition for groundbreaking engineering advancements",
  },
  {
    Id: 4,
    number: 25,
    title: "Years of Experience",
    text: "A proven track record of success in delivering high-quality engineering solutions",
  },
];

export const UncoverImg = [
  {
    Id: 1,
    img: EngIntegration,
    alt: "story building",
    classNames: "w-[350px] h-[430px] rounded shadow-md sma:mb-5 mda:mb-5",
  },
  {
    Id: 2,
    img: "https://static.wixstatic.com/media/c837a6_caf5a4c57b7048e89e4581428458dad9~mv2.jpg/v1/fill/w_558,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mads-eneqvist-J9jYy9S1zAk-unsplash.jpg",
    alt: "workers at work",
    classNames: "w-[350px] shadow-md rounded-[0%_0%_39%_0%_/_10%_10%_52%_34%]",
  },
];

export const ServiceHome = [
  {
    Id: 1,
    SocialIcon: FaHardHat,
    title: "Civil Engineering",
    text: "Our civil engineering services encompasses a wide range of infrastructure project, including infrastructure planning (Roads & Stormwater), water and sanitation, traffic studies and planning and urban/Township planning. We are committed to delivering sustainable and innovative solutions that meet the unique needs of each project.",
  },
  {
    Id: 2,
    SocialIcon: FaBuilding,
    title: "Structural Engineering",
    classNames: " lg:border-l lg:border-[#415D43] lg:pl-4",
    text: " Our structural engineering team specializes in designing safe, efficient, and cost-effective structures for various applications, including commercial, residential, academic, healthcare buildings, industrial facilities and bridges and culverts. We utilise advanced analysis tools and techniques to ensure the integrity of our structures.",
  },
  {
    Id: 3,
    SocialIcon: FaClipboardCheck,
    title: "Construction Project Management",
    classNames: " lg:border-t lg:border-[#415D43] lg:pt-4",
    text: " We offer comprehensive project management services to ensure the successful execution of engineering projects from inception to completion. Our experienced project managers coordinate all aspects of the project, including budgeting, scheduling, resource allocation, and stakeholder communication, to deliver projects on time and within budget.",
  },
];

export const ProjectHome = [
 
  {
    Id: 1,
    img: Project8,
    alt: "Botswana New Student Centre",
    title: "New Student Centre- Botswana",
    Abouttext:
      "An elegant castle-inspired residence that combines classic design with contemporary amenities.",
  },
  {
    Id: 2,
    img: Project2,
    alt: "A Residential Mansion Ikoyi",
    title: "Residential Mansion Ikoyi",
    Abouttext:
      "A cultural landmark showcasing art and history, designed to blend seamlessly with its natural surroundings.",
  },

  {
    Id: 3,
    img: Project5,
    alt: "Teaching Hospital-Botswana ",
    title: "Teaching Hospital-Botswana ",
    Abouttext:
      "A stunning mansion featuring a unique spiral design, offering panoramic views and luxurious living spaces.",
  },
  {
    Id: 4,
    img: Project6,
    alt: "University Building South Africa",
    title: "University Academic Building South Africa",
    Abouttext:
      "A contemporary home that redefines luxury living, with state-of-the-art amenities and exquisite design details.",
  },
];

export const Affiliates = [
  {
    Id: 1,
    Logo:CESA

  },
  {
    Id: 2,
    Logo:ECSA

  },
  {
    Id: 3,
    Logo:COREN

  },
  {
    Id: 4,
    Logo:NSE

  },
]

export const AboutTeam = [
  {
    Id: 1,
    img: Team1,
    alt: "CEO Image",
    name: "ENGR (OJ) AJAYI",
    position: "DIRECTOR",
    LinkedIn: "https://www.linkedin.com/in/engr-oj-ajayi-3b724b20b/",
    email: "oj.ajayi@goodhopeengineers.com",
  },
  
];

export const FactsComp = [
  {
    Id: 1,
    image: Clock8,
    Heading: " Integrity",
    classNames:"bg-black text-white w-[350px] shadow-lg h-fit sma:h-full mda:h-full rounded-2xl gap-4 px-4 pt-6 mda:w-[98%] sma:w-[98%]",
    headingClassname:"text-lg  mt-5  font-Sora font-medium ",
    textClassName:"text-base font-Nunito mt-2 pb-4 font-normal",
    imgClassName: " w-16 h-16 rounded-full bg-white sma:text-3xl mda:text-3xl font-Sora font-medium mb-12 flex",
    text: "Our commitment to honesty, transparency, and reliability ensures that every client can trust us to maintain the highest ethical standards.",
  },
  {
    Id: 2,
    image: Professional,
    Heading: " Professionalism",
    classNames:"bg-white/20 w-[350px] shadow-lg h-fit sma:h-full mda:h-full rounded-2xl gap-4 px-4 pt-6 mda:w-[98%] sma:w-[98%]",
    headingClassname:"text-lg  mt-5  font-Sora font-medium text-[#000000]",
    textClassName:"text-base font-Nunito mt-2 pb-4 font-normal",
    imgClassName: " w-16 h-16 sma:text-3xl mda:text-3xl font-Sora font-medium mb-12 flex",
    text: "We are devoted to providing a service that is professional to our clientele and consistent with international best practice. We take pride in our work and apply prudence in our craft and skill and our ability to ensure a value proposition of the hight standard",
  },
  {
    Id: 3,
    image: Excellence,
    Heading: " Excellence",
    classNames:"bg-white/20 w-[350px] shadow-lg h-fit sma:h-full mda:h-full rounded-2xl gap-4 px-4 pt-6 mda:w-[98%] sma:w-[98%]",
    headingClassname:"text-lg  mt-5  font-Sora font-medium text-[#000000]",
    textClassName:"text-base font-Nunito mt-2 pb-4 font-normal",
    imgClassName: " w-16 h-16 sma:text-3xl mda:text-3xl font-Sora font-medium mb-12 flex",
    text: "We are committed to delivering exceptional quality in everything we do. Our team of seasoned professionals operated within a robust management framework, ensuring every process is executed with precision, effectiveness, and efficiency. This pursuit of excellence drives us to consistently exceed client expectations and set new benchmarks in service delivery.",
  },
  {
    Id: 4,
    image: Innovation,
    Heading: "Innovation",
    classNames:"bg-black text-white w-[350px] shadow-lg h-fit sma:h-full mda:h-full rounded-2xl gap-4 px-4 pt-6 mda:w-[98%] sma:w-[98%]",
    headingClassname:"text-lg  mt-5  font-Sora font-medium ",
    textClassName:"text-base font-Nunito mt-2 pb-4 font-normal",
    imgClassName: " bg-white rounded-full w-16 h-16 sma:text-3xl mda:text-3xl font-Sora font-medium mb-12 flex",
    text: "We embrace forward-thinking solutions that challenge convention and drive progress. By integrating emerging technologies, advance engineering methodologies, and creative problem-solving, we deliver results that are both visionary and practical",
  },
  {
    Id: 5,
    image: Customer,
    Heading: "Client-Centric",
    classNames:"bg-black text-white w-[350px] shadow-lg h-fit sma:h-full mda:h-full rounded-2xl gap-4 px-4 pt-6 mda:w-[98%] sma:w-[98%]",
    headingClassname:"text-lg  mt-5  font-Sora font-medium ",
    textClassName:"text-base font-Nunito mt-2 pb-4 font-normal",
    imgClassName: "bg-white rounded-3xl p-1 w-16 h-16 sma:text-3xl mda:text-3xl font-Sora font-medium mb-12 flex",
    text: "Our clients are at the core of our mission. We take the time to listen, understand, and customize our services to meet their needs while exceeding expectations.",
  },
  {
    Id: 6,
    image: TeamCollab,
    Heading: "Collaboration",
    classNames:"bg-white/20 w-[350px] shadow-lg h-fit sma:h-full mda:h-full rounded-2xl gap-4 px-4 pt-6 mda:w-[98%] sma:w-[98%]",
    headingClassname:"text-lg  mt-5  font-Sora font-medium text-[#000000]",
    textClassName:"text-base font-Nunito mt-2 pb-4 font-normal",
    imgClassName: " w-16 h-16 sma:text-3xl mda:text-3xl font-Sora font-medium mb-12 flex",
    text: "We believe great outcome are built on strong partnerships. Our teams work closely with clients, consultants, and stakeholders to ensure every project reflects shared goals and collective expertise.",
  },
];

export const Testimonial = [
  {
    Id: 1,
    svg: starInc,
    Text: `" Goodhope Engineering Consult transformed our housing project from concept to reality with precision and innovation. Their ability to balance cost efficiency with sustainability impressed us, and the project was delivered ahead of schedule. A true partner in success."`,
    Client: "Michael Adeyemi, Project Manager",
    From: "GreenBuild Properties" ,
    style: "bg-[#FFFFFF] rounded-3xl shadow-lg py-2 px-3"
  },
  {
    Id: 2,
    svg: starInc,
    Text: `" We worked with Goodhope on a critical road and drainage rehabilitation project. Their team displayed excellent technical expertise, transparency, and dedication. They consistently updated us on progress and exceeded our expectations in quality"`,
    Client: "Engr. Fatima Musa, Director of Works",
    From: "Ibadan Municipal Council" ,
    style: "bg-[#FFFFFF] rounded-3xl  py-2 px-3"
  },
  {
    Id: 3,
    svg: starInc,
    Text: `" Goodhope Engineering Consult helped us modernize our manufacturing facility. From electrical systems to structural safety upgrades, their engineers provided practical, innovative solutions that boosted our efficiency."`,
    Client: "Samuel Okon",
    From: "Operations Head, PrimeTech Industries" ,
    style: "bg-[#FFFFFF] rounded-3xl shadow-lg py-2 px-3"
  },
  {
    Id: 4,
    svg: starInc,
    Text: `" The professionalism of Goodhope’s engineers during the design and construction of our new science laboratories was exceptional. Their attention to detail and safety made them the ideal choice for our campus expansion."`,
    Client: "Dr. Clara Oke",
    From: "Provost, Sunrise Polytechnic" ,
    style: "bg-[#FFFFFF] rounded-3xl  py-2 px-3"
  },
  {
    Id: 5,
    svg: starInc,
    Text: `"I contacted Goodhope for the structural design of my home, and they delivered beyond my imagination. They listened to my ideas, provided expert guidance, and created a design that was both modern and sustainable."`,
    Client: "Mrs. Tolu Adebayo",
    From: "Home Owner" ,
    style: "bg-[#FFFFFF] rounded-3xl shadow-lg py-2 px-3"
  },
  {
    Id: 6,
    svg: starInc,
    Text: `"Our renewable energy project wouldn’t have been possible without Goodhope’s team. They combined technical knowledge with creative problem-solving to help us install efficient solar systems across multiple sites."`,
    Client: "David Uchenna, CEO",
    From: "BrightFuture Energy Ltd" ,
    style: "bg-[#FFFFFF] rounded-3xl py-2 px-3"
  },
];

export const ServicesWeDo= [
  {
    Id:"01",
    Category: "Civil Engineering",
    Service: "Project Design",
    ServiceTitle: "We believe every great project begins with a strong design. We combine creativity, functionality, and technical expertise to deliver designs that are both innovative and practical.",
    image: PDesign
  },
  
  
  {
    Id:"02",
    Category: "Civil Engineering",
    Service: "Drainage and Stormwater Management",
    ServiceTitle: "We provide comprehensive drainage and stormwater management services designed to protect your property and infrastructure from flooding and erosion. Using advanced climate data and hydrological modelling, we develop tailored solution that ensure effective water runoff control, compliance with environmental regulations and long-term sustainability.",
    image: Sewer, 
  },

  {
    Id:"03",
    Category: "Civil Engineering",
    Service: "Civil Infrastructure and Bulk & Earthworks",
    ServiceTitle: "We design with purpose and precision-never in isolation. Our solutions are seamlessly integrated into existing infrastructure masterplans, ensuring functional alignment and long-term viability. By combining innovative design methodologies with cost-conscious planning, we deliver infrastructure that is not only practical but also economically and environmentally sustainable. ",
    image: SiteEarth
  },
  {
    Id:"04",
    Category: "Structural Engineering",
    Service: "Structural Design & Analysis",
    ServiceTitle: "We create robust designs that balance safety, performance, and efficiency using advanced modeling and engineering tools.",
    image: StrucDes
  },
  // {
  //   Id:"05",
  //   Category: "Structural Engineering",
  //   Service: "Building Reinforcement & Retrofitting",
  //   ServiceTitle: "We strengthen existing structures through advanced reinforcement and retrofitting techniques that meet modern safety codes.",
  //   image: Reinforce
  // },
 
  {
    Id:"05",
    Category: "Structural Engineering",
    Service: "Repairs and Building Rehabilitation",
    ServiceTitle: "We extend the life of existing structures through advanced retrofitting techniques that align with modern safety standards and building codes. Our rehabilitation solutions are engineered for durability, cost-efficiency, and regulatory compliance- ensuring renewed performance without compromising integrity.",
    image: Reinforce
  },
  {
    Id:"06",
    Category: "Structural Engineering",
    Service: "Site Supervision",
    ServiceTitle: "Our structural experts monitor on-site works to ensure quality materials, correct assembly, and compliance with structural standards.",
    image: Project6
  },
  {
    Id:"07",
    Category: "Construction Project Management",
    Service: "Project Planning & Scheduling",
    ServiceTitle: "We define project goals, timelines, and milestones to ensure smooth execution and efficient resource allocation.",
    image: ProjPlan
  },
  {
    Id:"08",
    Category: "Construction Project Management",
    Service: "Construction Monitoring and Supervision",
    ServiceTitle: "Our experienced engineering team provides rigorous on-site supervision to ensure every aspect of construction aligns with approved design specifications. We implement robust QA/QC frameworks—including ISO 9001-based quality management systems and project-specific inspection protocols—to uphold technical excellence, regulatory compliance, and consistent delivery. Through proactive monitoring and detailed reporting, we minimize risks and ensure that every build meets the highest standards.",
    image: CManage
  },
  
  
]


export const HowWeWork = [
  {
    Id: 1,
    image:ConstructIcon,
    Number: "01",
    StepTitle:"Consultation & Project Brief",
    Arrow: HoriArrow,
    Summary: "We begin with a detailed consultation to understand your project scope and technical requirements. This collaborative phase ensures alignment with your vision, goals, and operation priorities.",
  },
  {
    Id: 2,
    image:Compass,
    Number: "02",
    StepTitle:"Design & Planning",
    Arrow: HoriArrow,
    Summary: "Once the scope is defined, our technical team works closely with all stakeholders to develop a design that reflects the project brief and adheres to industry best practices. Every solution is engineered for functionality, efficiency, and client-specific needs.",
  },
  {
    Id: 3,
    image:CraneIcon,
    Number: "03",
    StepTitle:"Construction & Close Out",
    Summary: "Following our internal quality assurance review, final designs are issued for construction. We supervise every stage- from site execution to final handover-ensuring the delivery of a sustainable, durable and high-quality product, completed on time and within budget.",
  },
]
