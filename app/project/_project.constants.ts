type ProjectType = {
  name: string;
  description: string;
  link: string;
  github: string;
};

export const projects: ProjectType[] = [
  {
    name: "Knotit",
    description: "A minimal note-taking app with a rich text editor, dark mode, and fast search.",
    link: "https://notes.ghostkode.com/",
    github: "https://github.com/JayakrishnanMurali/note-it",
  },
  {
    name: "Codify",
    description: "A code snippet beautifier — paste code, pick a theme, export a clean image.",
    link: "https://codify.ghostkode.com/",
    github: "https://github.com/JayakrishnanMurali/codify",
  },
  {
    name: "LogoIt",
    description: "A simple logo generator for quickly creating clean app icons and brand marks.",
    link: "https://logoit.ghostkode.com/",
    github: "https://github.com/JayakrishnanMurali/logoit",
  },
];
