import { MainButton } from "components/Buttons";
import LocaleSwitcher from "components/LocaleSwitcher/locale-switcher";

const navbarItems = [
  {
    name: "Inicio",
    url: "#home",
  },
  {
    name: "Servicios",
    url: "#services",
  },
  {
    name: "Nosotros",
    url: "#about",
  },
  {
    name: "Herramientas",
    url: "#tools",
  },
  {
    name: "Socios",
    url: "#partners",
  },
];
const Navbar = () => {
  return (
    <nav className="absolute top-8 h-20 w-full px-14 z-10">
      <div className="px-8 w-full mx-auto bg-blue-50 h-full flex justify-between items-center shadow-custom1 rounded-lg">
        <ul className="flex ">
          {navbarItems.map((item, index) => {
            return (
              <NavBarItem key={item.url} item={item} active={index === 0} />
            );
          })}
        </ul>
        <div className="flex gap-6">
          <MainButton className="!text-[20px]">
            <span className="flex justify-center items-center">Contactar</span>
          </MainButton>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface NavBarItemProps {
  item: {
    name: string;
    url: string;
  };
  active?: boolean;
}
const NavBarItem = ({ item, active }: NavBarItemProps) => {
  return (
    <li className="px-4 " key={item.url}>
      <a
        href="#home"
        className={`px-3 py-1 uppercase ${
          active ? "text-customBlue font-bold" : "text-black"
        } `}
      >
        {item.name}
      </a>
    </li>
  );
};
