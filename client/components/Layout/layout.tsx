import Footer from "./footer";
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
