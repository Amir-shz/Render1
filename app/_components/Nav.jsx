import NavItem from "./NavItem";
import { navItems } from "../_lib/utils";

function Nav() {
  return (
    <nav className="max-sm:hidden">
      <ul className="flex">
        {navItems.map((item) => (
          <NavItem key={item.id} referenceTo={item.reference}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
