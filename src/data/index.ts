export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "_hello", path: "/" },
  { name: "_about-me", path: "/about" },
  { name: "_projects", path: "/projects" },
  { name: "_contact", path: "/contact" },
];
