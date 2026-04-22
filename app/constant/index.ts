interface BadgeDataItem {
  name: string;
  src: string;
  type: "lang" | "framework" | "tool";
}

export const BadgeData: BadgeDataItem[] = [
  {
    name: "javascript",
    src: "badges/javascript.svg",
    type: "lang",
  },
  {
    name: "typescript",
    src: "badges/typescript.svg",
    type: "lang",
  },
  {
    name: "css",
    src: "badges/css.svg",
    type: "lang",
  },
  {
    name: "php",
    src: "badges/php.svg",
    type: "lang",
  },
  {
    name: "python",
    src: "badges/python.svg",
    type: "lang",
  },
  {
    name: "nextjs",
    src: "badges/nextjs.svg",
    type: "framework",
  },
  {
    name: "tailwind",
    src: "badges/tailwind.svg",
    type: "framework",
  },
  {
    name: "vite",
    src: "badges/vite.svg",
    type: "framework",
  },
  {
    name: "reactjs",
    src: "badges/react.svg",
    type: "framework",
  },
  {
    name: "laravel",
    src: "badges/laravel.svg",
    type: "framework",
  },
  {
    name: "git",
    src: "badges/git.svg",
    type: "tool",
  },
  {
    name: "vscode",
    src: "badges/vscode.svg",
    type: "tool",
  },
  {
    name: "powershell",
    src: "badges/powershell.svg",
    type: "tool",
  },
  {
    name: "figma",
    src: "badges/figma.svg",
    type: "tool",
  },
  {
    name: "drawio",
    src: "badges/drawio.svg",
    type: "tool",
  },
];

export type ProjectCategory = 'intern' | 'assignment';

interface ProjectDataItem {
  id: number;
  title: string;
  subtittle: string;
  src: string;
  tech: string[];
  category: ProjectCategory;
}
export const ProjectData: ProjectDataItem[] = [
  {
    id: 1,
    title: "wms . toko_lobo",
    subtittle: "warehouse management system for a clothing company.",
    src: "/projects/lobo.png",
    tech: ["vite", "tailwind", "javascript", "css"],
    category: "intern",
  },
  {
    id: 2,
    title: "cms . rapier_technology",
    subtittle:
      "content management system for Rapier Technology company.",
    src: "/projects/cms-rapier.jpg",
    tech: ["nextjs", "tailwind", "javascript", "css"],
    category: "intern",
  },
  {
    id: 3,
    title: "landingpage . rapier_technology",
    subtittle:
      "landing page website for Rapier Technology company.",
    src: "/projects/landingpage.png",
    tech: ["nextjs", "tailwind", "javascript", "css"],
    category: "intern",
  },
  {
    id: 4,
    title: "article . muslim_connect",
    subtittle:
      "article and news website for the Muslim community.",
    src: "/projects/muslim-conect.png",
    tech: ["nextjs", "tailwind", "typescript", "css"],
    category: "assignment",
  },
  {
    id: 5,
    title: "wms . 8vault",
    subtittle:
      "warehouse management system for handling inventory and storage.",
    src: "/projects/xvault.png",
    tech: ["reactjs", "figma", "javascript", "css"],
    category: "assignment",
  },
  {
    id: 6,
    title: "landingpage . pramuka",
    subtittle:
      "landing page for scouting activities at SMK 8 Semarang.",
    src: "/projects/pramuka.png",
    tech: ["javascript", "css", "figma", "vscode"],
    category: "assignment",
  },
  {
    id: 7,
    title: "landingpage . ukm_pcc",
    subtittle:
      "landing page website for a university computer club organization.",
    src: "/projects/ukm_pcc.png",
    tech: ["typescript", "tailwind", "nextjs", "figma"],
    category: "assignment",
  },
];

interface MenuItems {
  name: string;
  href: string;
}

export const MenuItems: MenuItems[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about_me",
    href: "/aboutme",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "experience",
    href: "/experience",
  },
];

export type Category = 'work' | 'learning';

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  category: Category;
}


export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2023',
    title: 'internship at polines',
    description: '3 months in data center and learning basic networking.',
    category: 'work'
  },
  {
    id: 2,
    year: '2024',
    title: 'internship at rapier technology',
    description: '9 months. participated in real projects as Frontend Developer.',
    category: 'work'
  },
  {
    id: 3,
    year: '2021',
    title: 'study at smkn 8 semarang ',
    description: 'majoring in software development.',
    category: 'learning'
  },
  {
    id: 4,
    year: '2025',
    title: 'study at Polines',
    description: 'd3 informatics major',
    category: 'learning'
  },
];
