import { NavLink } from "react-router-dom";

export default function NavbarLinks({ className, links, onNavigate }) {
  return (
    <ul className={`${className} text-white`}>
      {links?.map((link) => {
        return (
          <li key={link.linkName} className="hover:underline">
            <NavLink to={link.linkUrl} onClick={() => onNavigate(link.ref)}>
              <p>{link.linkName}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
