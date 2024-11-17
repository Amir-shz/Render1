import NavItem from "./NavItem";

const navItems = [
  {
    id: 1,
    name: "خانه",
    reference: "/",
  },
  {
    id: 2,
    name: "پایگاه دانش",
    reference: "/blog",
  },
  {
    id: 3,
    name: "درباره ما",
    reference: "about-us",
  },
  {
    id: 4,
    name: "تماس با ما",
    reference: "contact-us",
  },
];

function Nav() {
  return (
    <nav>
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
