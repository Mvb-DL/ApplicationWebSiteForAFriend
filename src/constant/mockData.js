import {
  Blogging,
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  SkillExcel,
  Gaming,
  Google,
  Reading,
  SkillCss,
  SkillFigma,
  SkillHtml5,
  SkillPhotoshop,
  SkillSketch,
  SkillTrello,
  SkillWireframe,
  SkillXd,
  Wu,
  PWC,
  PDF,
  Travelling,
  Udemy,
  English,
  German,
  SkillPowerpoint,
  Hantel,
  Castell,
  GymVeits,
  THWS,
  Arrow,
  Veits,
  Notes,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Sep 2022",
      endDate: "Feb 2023",
      position: "Internship",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        logo: PWC,
        name: "PWC",
        info: "Wirtschaftsprüfungsgesellschaft, Frankfurt am Main",
      },
      description:
        "PwC bietet branchenspezifische Dienstleistungen in den Bereichen Wirtschaftsprüfung, Steuerberatung und Unternehmensberatung.",
      links: [
        {
          label: "PWC",
          url: "https://www.pwc.de/",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "März 2022",
      endDate: "-",
      position: "Finanzen",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: Castell,
        name: "Fürstliche Castell Bank",
        info: "Bank, Castell",
      },
      description:
        "Die Fürstlich Castell’sche Bank, Credit-Casse AG ist ein in Franken ansässiges Kreditinstitut. Juristischer Sitz des Unternehmens ist Castell, die Hauptverwaltung und die Geschäftsführung befinden sich seit 1972 in Würzburg.",
      links: [
        {
          label: "Bank Castell",
          url: "https://www.castell-bank.de/",
        },
      ],
    },
    
  ],
  educationalExperiences: [

    {
      id: "edu_1",
      icon: Veits,
      course: "Veitshöchheim Gymnasium",
      institution: "Veitshöchheim Gymnasium",
      degree: "Abitur",
      startDate: "2007",
      endDate: "2021",
    },


    {
      id: "edu_2",
      icon: THWS,
      course: "Betriebswirtschaftslehre",
      institution: "THWS",
      degree: "Bachelor",
      startDate: "2021",
      endDate: "2024",
    },

    {
      id: "edu_3",
      icon: Wu,
      course: "Wirtschaftsuniversität Wien",
      institution: "WU Wien",
      degree: "Master",
      startDate: "2024",
      endDate: "2025",
    },


   
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillExcel,
      name: "Excel",
      description: "Statistik, Finanzen",
      skill_level: "7/10",
    },
    {
      id: "skill_2",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
      skill_level: "4/10",
    },
    {
      id: "skill_3",
      icon: SkillPowerpoint,
      name: "PowerPoint",
      description: "Präsentationen",
      skill_level: "9/10",
    },
    {
      id: "skill_4",
      icon: SkillPhotoshop,
      name: "Adobe Photoshop",
      description: "Bildbearbeitung",
      skill_level: "6/10",
    },
    {
      id: "skill_5",
      icon: SkillSketch,
      name: "Sketch",
      description: "UI Design & Prototyping",
      skill_level: "5/10",
    },
    {
      id: "skill_6",
      icon: SkillTrello,
      name: "Trello",
      description: "Project Management",
      skill_level: "10/10",
    },
    {
      id: "skill_7",
      icon: SkillWireframe,
      name: "-",
      description: "-",
      skill_level: "10/10",
    },
    {
      id: "skill_8",
      icon: SkillWireframe,
      name: "-",
      description: "-",
      skill_level: "10/10",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: GymVeits,
      provider: "Sportverein Veitshöchheim",
      course: "Ausgebildeter Fitness-Trainer",
      startDate: "Dez 2019",
      endDate: "-",
    },
    {
      id: "cert_award_2",
      icon: SkillWireframe,
      provider: "-",
      course: "-",
      startDate: "-",
      endDate: "-",
    },
    {
      id: "cert_award_3",
      icon: SkillWireframe,
      provider: "-",
      course: "-",
      startDate: "-",
      endDate: "-",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Hantel,
      name: "Gym",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "-",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Reisen",
    },
    {
      id: "hob_4",
      icon: Blogging,
      name: "-",
    },
  ],

  model:{
    modelUrl: ""
  },

  langOption:{
    german_icon: German,
    english_icon: English,
  },

  externDocs: 
    {
      logo: PDF,
      notes: Notes,
      realpdf: "./docs/lebenslauf.pdf"
      
    }


  
};

export default DATA;
