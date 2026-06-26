export interface IProjects {
  src: string;
  alt: string;
  title: string;
  summary: string;
  technologies: string[];
  with: string;
  height: string;
  description: string;
  links: [
    {
      name: string;
      href: string;
    }
  ];
}
