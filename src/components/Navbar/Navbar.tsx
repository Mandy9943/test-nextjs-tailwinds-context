import { MainButton } from "components/Buttons";
import LocaleSwitcher from "components/LocaleSwitcher/locale-switcher";
import { motion } from "framer-motion";
import useDisclosure from "hooks/useDisclosure";
import { useTranslations } from "next-intl";
import { slideAnimation } from "utils/motion";
const navbarItems = [
  {
    name: "index",
    url: "#home",
  },
  {
    name: "services",
    url: "#services",
  },
  {
    name: "about",
    url: "#about",
  },
  {
    name: "tools",
    url: "#tools",
  },
  {
    name: "partners",
    url: "#partners",
  },
];
const Navbar = () => {
  const t = useTranslations("Navigation");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <motion.nav
      className={`fixed lg:top-8 top-4 h-20 w-full px-7 lg:px-14 z-20`}
      {...slideAnimation("down")}
    >
      <div className=" relative px-4 lg:px-8 w-full mx-auto bg-blue-50 h-full flex justify-between items-center shadow-custom1 rounded-lg">
        <ul className="hidden md:flex">
          {navbarItems.map((item, index) => {
            return (
              <NavBarItem
                key={item.url}
                item={{ ...item, name: t(item.name) as string }}
                active={index === 0}
              />
            );
          })}
        </ul>

        <div className="flex gap-6">
          <MainButton className="!text-[20px]">
            <span className="flex justify-center items-center">
              {t("contact")}
            </span>
          </MainButton>
          <div className="hidden md:flex items-center">
            <LocaleSwitcher />
          </div>
        </div>

        {/* Hamburger Button for responsive menu with navigation links */}
        <div className="flex md:hidden items-center ml-3">
          <button
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="block  rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            onClick={onToggle}
          >
            <span className="relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white  "></span>
            <span className="relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white  "></span>
            <span className="relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white  "></span>
          </button>
        </div>

        {/* Responsive Menu */}

        <nav
          id="navbarCollapse"
          className={
            (isOpen
              ? `visibility top-full opacity-100`
              : `invisible top-[120%] opacity-0`) +
            ` md:hidden navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] 
                  border-body-color/50 bg-white py-4 px-6 duration-300
                  dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto 
                  lg:border-none lg:!bg-transparent lg:p-0
                  lg:opacity-100
                `
          }
        >
          <ul className="block lg:flex lg:space-x-12">
            {navbarItems.map((item, index) => {
              return (
                <NavBarItem
                  key={item.url}
                  item={{ ...item, name: t(item.name) as string }}
                  active={index === 0}
                  variant="mobile"
                />
              );
            })}
          </ul>

          {/* divider */}
          <div className="my-4 border-t border-body-color/20 dark:border-body-color/50"></div>
          <div className="flex justify-between">
            <p>{t("language")}</p>
            <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </motion.nav>
  );
};

export default Navbar;

interface NavBarItemProps {
  item: {
    name: string;
    url: string;
  };
  active?: boolean;
  variant?: "mobile" | "desktop";
}
const NavBarItem = ({ item, active, variant = "desktop" }: NavBarItemProps) => {
  if (variant === "mobile") {
    return (
      <li className="group relative">
        <a
          className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
          href={item.url}
        >
          {item.name}
        </a>
      </li>
    );
  }

  return (
    <li className="lg:px-2 ">
      <a
        href={item.url}
        className={`px-2 lg:px-3 py-1 uppercase ${
          active ? "text-customBlue font-bold" : "text-black"
        } `}
      >
        {item.name}
      </a>
    </li>
  );
};
