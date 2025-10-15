import {FaBuilding, FaDraftingCompass, FaHardHat, FaRoad, FaClipboardCheck,
} from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import DesignHills from "../assets/Images/designhills-unsplash.jpg";
import Team1 from "../assets/Images/Teams/Team1.jpg";
import Team2 from "../assets/Images/Teams/Team2.jpg";
import Team3 from "../assets/Images/Teams/Team3.jpg";
import Team4 from "../assets/Images/Teams/Team4.jpg";
import Team5 from "../assets/Images/Teams/Team5.jpg";
import Team6 from "../assets/Images/Teams/Team6.jpg";
import Clock8 from "../assets/Images/icons8-clock.png";
import Hammer from "../assets/Images/icons8-hammer.png";
import Innovation from "../assets/Images/icons8-innovation.png";
import Customer from "../assets/Images/icons8-customer-service.png";
import StarRating from "../assets/Images/icons8-star.png";
import Project7 from "../assets/Images/Project/Project7.jpg";
import Project2 from "../assets/Images/Project/Project2.jpg";
import Project5 from "../assets/Images/Project/Project5.jpg";
import Project6 from "../assets/Images/Project/Project6.jpg";
import Project8 from "../assets/Images/Project/Project8.jpg";
import EngIntegration from "../assets/Images/Services/Engineering-Integrations.jpg"
import PDesign from "../assets/Images/Services/PDesign.jpg"
import CManage from "../assets/Images/Services/CManage.jpg"
import ConstructServ from "../assets/Images/Services/Construct.jpg"
import SiteE from "../assets/Images/Services/SiteE.jpg"
import EngCon from "../assets/Images/Services/EngCon.jpg"
import Sewer from "../assets/Images/Services/sewer1.jpg"
import SiteEarth from "../assets/Images/Services/SiteEarth.jpg"
import TransportPlan from "../assets/Images/Services/TransportPlan.jpg"
import StrucDes from "../assets/Images/Services/StrucDesAnalysis.jpg"
import CostEstimation from "../assets/Images/Services/CostEstimation.jpg"
import Reinforce from "../assets/Images/Services/Reinforce.jpg"
import SeismicLoad from "../assets/Images/Services/seismicload.jpg"
import ProjPlan from "../assets/Images/Services/ProjPlan.jpg"
import QualityRisk from "../assets/Images/Services/quality-risk.jpg"
import Compass from "../assets/Images/Services/compass_icon1.png"
import ConstructIcon from "../assets/Images/Services/construction_icon2.png"
import CraneIcon from "../assets/Images/Services/crane_icon3.png"
import HoriArrow from "../assets/Images/Services/horizontal_arrow.png"



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
    name: "Project",
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
    img: "https://static.wixstatic.com/media/a4c183_4e220068b0b34a7b871ffc3b63680950~mv2.jpg/v1/crop/x_0,y_100,w_1920,h_1080/fill/w_546,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/scott-blake-x-ghf9LjrVg-unsplash.jpg",
    alt: "story building",
    headtxt: "Civil Engineering",
  },
  {
    Id: 2,
    img: "https://static.wixstatic.com/media/a4c183_b1542aa5cee3499d97f40397e361b4f4~mv2.jpg/v1/crop/x_0,y_156,w_3000,h_1687/fill/w_546,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-1254413327.jpg",
    alt: "workers at work",
    headtxt: "Structural Engineering",
  },
  {
    Id: 3,
    img: "https://static.wixstatic.com/media/a4c183_41a680c0ed504e07b25a16ff251e96fb~mv2.jpg/v1/fill/w_546,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-183371607.jpg",
    alt: "crane at work",
    headtxt: "Project Development",
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
    text: "Our civil engineering services encompass a wide range of infrastructure projects, including transportation systems, water resources management, environmental engineering, and urban development. We are committed to delivering sustainable and innovative solutions that meet the unique needs of each project.",
  },
  {
    Id: 2,
    SocialIcon: FaBuilding,
    title: "Structural Engineering",
    classNames: " lg:border-l lg:border-[#415D43] lg:pl-4",
    text: " Our structural engineering team specializes in designing safe, efficient, and cost-effective structures for various applications, including commercial buildings, residential complexes, bridges, and industrial facilities. We utilize advanced analysis and design techniques to ensure the integrity and longevity of our structures.",
  },
  {
    Id: 3,
    SocialIcon: FaClipboardCheck,
    title: "Project Management",
    classNames: " lg:border-t lg:border-[#415D43] lg:pt-4",
    text: " We offer comprehensive project management services to ensure the successful execution of engineering projects from inception to completion. Our experienced project managers coordinate all aspects of the project, including budgeting, scheduling, resource allocation, and stakeholder communication, to deliver projects on time and within budget.",
  },
];

export const ProjectHome = [
  {
    Id: 1,
    img: DesignHills,
    alt: "Design Hills",
    title: "Hillside Rock",
    Abouttext:
      "A modern architectural masterpiece nestled in the hills, offering breathtaking views and luxurious living.",
  },
  {
    Id: 2,
    img: Project8,
    alt: "House Frontage",
    title: "Botswana International University",
    Abouttext:
      "An elegant castle-inspired residence that combines classic design with contemporary amenities.",
  },
  {
    Id: 3,
    img: Project2,
    alt: "A Museum Building",
    title: "Ikoyi Lagos",
    Abouttext:
      "A cultural landmark showcasing art and history, designed to blend seamlessly with its natural surroundings.",
  },

  {
    Id: 5,
    img: Project5,
    alt: "A spiral building",
    title: "Red Brick Mansion",
    Abouttext:
      "A stunning mansion featuring a unique spiral design, offering panoramic views and luxurious living spaces.",
  },
  {
    Id: 6,
    img: Project6,
    alt: "A House in the Garden",
    title: "Red Hill Johannesburg",
    Abouttext:
      "A contemporary home that redefines luxury living, with state-of-the-art amenities and exquisite design details.",
  },
];

export const Affiliates = [
  {
    Id: 1,

  },
]

export const AboutTeam = [
  {
    Id: 1,
    img: Team1,
    alt: "CEO Image",
    name: "ENGR. OLUMIDE AJAYI",
    position: "Founder & CEO",
    email: "Ajayi@goodhopeconsult.com",
  },
  {
    Id: 2,
    img: Team2,
    alt: "Chief Architect Image",
    name: "Mrs. Emily Davis",
    position: "Chief Architect",
    email: "Emily@goodhopeconsult.com",
  },
  {
    Id: 3,
    img: Team3,
    alt: "Construction manager Image",
    name: "MARK JOHNSON",
    position: "Construction Manager",
    email: "Mark@goodhopeconsult.com",
  },
  {
    Id: 4,
    img: Team4,
    alt: "Project Coordinator Image",
    name: "SARAH LEE",
    position: "Project Coordinator ",
    email: "Sarah@goodhopeconsult.com",
  },
  {
    Id: 5,
    img: Team5,
    alt: "Michael Brown Image",
    name: "MICHAEL BROWN",
    position: "Lead Engineer",
    email: "Micheal@goodhopeconsult.com",
  },
  {
    Id: 6,
    img: Team6,
    alt: "Jack Brown Image",
    name: "Jack BROWN",
    position: "Chief interior Designer",
    email: "Jack@goodhopeconsult.com",
  },
];

export const FactsComp = [
  {
    Id: 1,
    image: Clock8,
    Heading: " Integrity",
    text: "Our commitment to honesty, transparency, and reliability ensures that every client can trust us to maintain the highest ethical standards.",
  },
  {
    Id: 2,
    image: Hammer,
    Heading: " Craftsmanship",
    text: "Our commitment is to provide the highest quality results, ensuring every detail is handled with precision and care.",
  },
  {
    Id: 3,
    image: Innovation,
    Heading: "Innovation",
    text: "By embracing creativity and innovative solutions, we consistently enhance our services to provide results that endure.",
  },
  {
    Id: 4,
    image: Customer,
    Heading: "Client-Centric",
    text: "Our clients are at the core of our mission. We take the time to listen, understand, and customize our services to meet their needs while exceeding expectations.",
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
    Service: "Drainage and Stormwater System",
    ServiceTitle: "Our drainage solutions prevent flooding and erosion by effectively managing surface water through sustainable engineering practices.",
    image: Sewer, 
  },

  {
    Id:"03",
    Category: "Civil Engineering",
    Service: "Site Development & Earthworks",
    ServiceTitle: "From grading to land preparation, we ensure your project site is properly designed for stability, functionality, and ease of construction.",
    image: SiteEarth
  },
  {
    Id:"04",
    Category: "Structural Engineering",
    Service: "Structural Design & Analysis",
    ServiceTitle: "We create robust designs that balance safety, performance, and efficiency using advanced modeling and engineering tools.",
    image: StrucDes
  },
  {
    Id:"05",
    Category: "Structural Engineering",
    Service: "Building Reinforcement & Retrofitting",
    ServiceTitle: "We strengthen existing structures through advanced reinforcement and retrofitting techniques that meet modern safety codes.",
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
    Category: "Project Management",
    Service: "Project Planning & Scheduling",
    ServiceTitle: "We define project goals, timelines, and milestones to ensure smooth execution and efficient resource allocation.",
    image: ProjPlan
  },
  
  
]


export const HowWeWork = [
  {
    Id: 1,
    image:ConstructIcon,
    Number: "01",
    StepTitle:"Consultation & Project Brief",
    Arrow: HoriArrow,
    Summary: "We begin with a detailed consultation to understand your project goals, site conditions, and technical requirements. Our team reviews your ideas, budget, and timelines to create a clear project brief and define the best approach for your needs.",
  },
  {
    Id: 2,
    image:Compass,
    Number: "02",
    StepTitle:"Design & Planning",
    Arrow: HoriArrow,
    Summary: "Our engineers and designers develop precise plans, structural models, and cost estimates that align with safety standards and industry best practices. We ensure every design is functional, efficient, and tailored to meet your vision.",
  },
  {
    Id: 3,
    image:CraneIcon,
    Number: "03",
    StepTitle:"Execution & Delivery",
    Summary: "Once approved, we oversee every stage of implementation — from construction supervision and quality control to final project handover. Our goal is to deliver durable, sustainable, and high-quality results on time and within budget.",
  },
]
