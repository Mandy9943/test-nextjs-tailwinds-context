import Navbar from "components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative">
      <AnimatePresence>
        <Navbar />
        <div>{children}</div>
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
