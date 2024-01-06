

export function NavBarLink({ title, href }: { title: string, href: string }) {
  return (
    <li className="list-none inline-block"><a className="px-6 text-black font-medium hover:text-indigo-500" href={href}>{title}</a></li>
  );
}