import Navbar from "components/Navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
