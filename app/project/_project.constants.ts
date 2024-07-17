type ProjectsType = {
  name: string;
  link: string;
  github: string;
  images: {
    alt: string;
    img: string;
  }[];
};

export const projects: ProjectsType[] = [
  {
    name: "Knotit",
    link: "https://notes.ghostkode.com/",
    github: "https://github.com/JayakrishnanMurali/note-it",
    images: [
      {
        alt: "Landing page",
        img: "/images/project/knotit/landing.png",
      },
      {
        alt: "Dashboard page",
        img: "/images/project/knotit/dashboard.png",
      },
      {
        alt: "Editor view dark mode",
        img: "/images/project/knotit/editor.png",
      },
      {
        alt: "Search project",
        img: "/images/project/knotit/new.png",
      },
    ],
  },
  {
    name: "Codify",
    link: "https://codify.ghostkode.com/",
    github: "https://github.com/JayakrishnanMurali/codify",
    images: [
      {
        alt: "Og image of codify webapp",
        img: "/images/project/codify/og-image.jpg",
      },
      {
        alt: "Dark mode screenshot of codify webapp",
        img: "/images/project/codify/dark.png",
      },
      {
        alt: "Light mode screenshot of codify webapp",
        img: "/images/project/codify/light.png",
      },
      {
        alt: "Dark mode with color gradient screenshot of codify webapp",
        img: "/images/project/codify/dark-gradient.png",
      },
    ],
  },
  {
    name: "LogoIt",
    link: "https://logoit.ghostkode.com/",
    github: "https://github.com/JayakrishnanMurali/logoit",
    images: [
      {
        alt: "Logo it app image 1",
        img: "/images/project/logoit/logo-it-icon-1.png",
      },
      {
        alt: "Logo it app image 2",
        img: "/images/project/logoit/logo-it-icon-2.png",
      },
      {
        alt: "Logo it app image 3",
        img: "/images/project/logoit/logo-it-icon-3.png",
      },
      {
        alt: "Logo it app image 4",
        img: "/images/project/logoit/logo-it-icon-4.png",
      },
    ],
  },
];
