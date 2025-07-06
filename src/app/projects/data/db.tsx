export interface DevelopmentProject {
  id: number;
  projectName: string;
  projectDescription: string;
  techUsed: string[];
  projectUrl: string | null;
  projectGithub: string;
  images: string[] | null;
  logo: string;
}

export interface DesignProject {
  id: number;
  projectName: string;
  projectDescription: string;
  dribbleUrl: string;
  placeholder: string;
}
export const developmentProjects: DevelopmentProject[] = [
 
  {
    id: 1,
    projectName: "Study Buddyy",
    projectDescription:
      "Study Buddy is a study management application. It helps students organize study materials, schedule events, and shareresources with peers in one place. Includes account creation, real-time resource sharing, and a clean user interface.",
    techUsed: ["Mongodb", "Express Js", "NextJ s", "TypeScript", "Firebase"],
    projectUrl: "https://study-buddyy.vercel.app",
    projectGithub: "https://github.com/nishant-pradhan-8/study-buddy",
    images: [
      "sb-i1.png",
      "sb-i7.png",
      "sb-i2.png",
      "sb-i3.png",
      "sb-i4.png",
      "sb-i5.png",
      "sb-i8.png",
      "sb-i6.png",
    ],
    logo: "/images/studybuddy.svg",
  },
  {
    id: 2,
    projectName: "The Hangout",
    projectDescription:
      "A full-stack real-time chat application that allows users to register, log in, and participate in a live group chat environment. Messages are sent and received instantly using WebSockets, and all chat history is securely stored in a database.",
    techUsed: ["Mongodb", "Express Js", "ReactJs", "TypeScript", "Socket.io"],
    projectUrl: null,
    projectGithub: "https://github.com/nishant-pradhan-8/chatroom",
    images: [
      "login.png",
      "registration.png",
      "home.png",
      "messages.png",
    ],
    logo: "/images/chat.svg",
  },
  {
    id: 3,
    projectName: "Dev Links",
    projectDescription:
      "Dev Links is a Link Sharing Application for developers to manage and share all their important links (GitHub, YouTube, LinkedIn, etc.) through a single profile. Users can create accounts and generate a public link to share their profiles. This is a project from frontendmentor.io",
    techUsed: ["React Js", "Firebase"],
    projectUrl: "https://nishant-pradhan-8.github.io/link-sharing-app",
    projectGithub: "https://github.com/nishant-pradhan-8/link-sharing-app",
    images: [
      "sb2-i1.png",
      "sb2-i2.png",
      "sb2-i3.png",
      "sb2-i4.png",
      "sb2-i5.png",
    ],
    logo: "/images/devlinks.svg",
  },
  {
    id: 4,
    projectName: "Hangman Game",
    projectDescription:
      "A classic Hangman game where user will guess the correct word and if they are able to guess the correct word within the limited chances, They Win! This is a challange project from frontendmentor.io",
    techUsed: ["React Js"],
    projectUrl: "https://nishant-pradhan-8.github.io/hangman-game/",
    projectGithub: "https://github.com/nishant-pradhan-8/hangman-game",
    images: ["sb3-i1.png", "sb3-i2.png", "sb3-i3.png"],
    logo: "/images/hangman.svg",
  },
  {
    id: 5,
    projectName: "Quiz Web App",
    projectDescription:
      "A quiz application where users can test their knowledge on various technical topics through series of muliple-choice questions. This is a challange project from frontendmentor.io",
    techUsed: ["React Js"],
    projectUrl: "https://nishant-pradhan-8.github.io/quiz-app/",
    projectGithub: "https://github.com/nishant-pradhan-8/quiz-app",
    images: ["sb4-i1.png", "sb4-i2.png", "sb4-i3.png", "sb4-i4.png"],
    logo: "/images/quiz.svg",
  },
  {
    id: 6,
    projectName: "Moksh Travels",
    projectDescription:
      "A website from travel agencies for handling booking and business management",
    techUsed: ["React Js", "Laravel", "php"],
    projectUrl: null,
    projectGithub: "https://github.com/nishant-pradhan-8/travel-agency-website",
    images: null,
    logo: "/images/travel.svg",
  },

];
export const designProjects: DesignProject[] = [
  {
    id: 1,
    projectName: "Eight's Advertising ",
    projectDescription:
      "A web design for online agencies like social media marketing agency",
    dribbleUrl:
      "https://dribbble.com/shots/25844090-Agency-Website-Design?utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Agency%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Agency%20Website%20Design&utm_medium=Social_Share",
    placeholder: "/images/SSMADesign.png",
  },
  {
    id: 2,
    projectName: "Street Light Restaurant",
    projectDescription: "Simple Web design for a Restaurant Business",
    dribbleUrl:
      "https://dribbble.com/shots/25844058-Restaurant-Website-Design?utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Restaurant%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Restaurant%20Website%20Design&utm_medium=Social_Share",

    placeholder: "/images/slr.png",
  },

  {
    id: 3,
    projectName: "Luxe Furnishing",
    projectDescription: "Modern web design for a Furnishing Business",
    dribbleUrl:
      "https://dribbble.com/shots/25844110-Furnishing-Business-Website-Design?utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Furnishing%20Business%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Furnishing%20Business%20Website%20Design&utm_medium=Social_Share",
    placeholder: "/images/luxe.png",
  },
  {
    id: 4,
    projectName: "Cozy",
    projectDescription: "Smple web design for a Restaurant Business",
    dribbleUrl:
      "https://dribbble.com/shots/25844069-Restaurant-Website-Design?utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Restaurant%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=webdesigner_nishant&utm_content=Restaurant%20Website%20Design&utm_medium=Social_Share",
    placeholder: "/images/cozy.png",
  },
];
