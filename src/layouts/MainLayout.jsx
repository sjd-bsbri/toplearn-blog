import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { theme } from "./theme/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({children}) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>

        <HelmetProvider>
          <Helmet>
            <title>بلاگ تاپ لرن  </title>
          </Helmet>
          <Header/>
          {/* Grid System */}
          {children}
          <Footer/>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
