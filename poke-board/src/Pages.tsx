import { ReactNode } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { PokeDetails } from "./pages/PokeDetails/PokeDetails";
import { PokeSearch } from "./pages/PokeSearch/PokeSearch";

/**
 * Function which provides all the pages
 * ToDo: Remove Layout
 * @returns List of pages
 */

export function getPageList() {
  function Layout({ children }: { children: ReactNode }) {
    return (
      <div className="container-fluid noPadding main">
        <NavBar></NavBar>
        {children}
      </div>
    );
  }
  const PAGES = [
    {
      path: "/search",
      id: 1,
      element: (
        <Layout>
          <PokeSearch />
        </Layout>
      ),
    },
    {
      path: "/search/:currentPage",
      id: 2,
      element: (
        <Layout>
          <PokeSearch />
        </Layout>
      ),
    },
    {
      path: "/pokemon/:pokeId",
      id: 3,
      element: (
        <Layout>
          <PokeDetails />
        </Layout>
      ),
    },
  ];
  return PAGES;
}
