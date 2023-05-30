import Footer from "./view/footer";
import Header from "./header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
