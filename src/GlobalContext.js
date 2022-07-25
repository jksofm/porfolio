import React from "react";
import {useState} from "react";

const GlobalContext = React.createContext();
// const getStorageTheme = () => {
//   let theme = "light-theme";
//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   }
//   return theme;
// };
export const GlobalProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = React.useState(false);
  const [theme, setTheme] = useState("light-theme");
  console.log(theme);
  const toggleTheme = () => {
     console.log("hi")
    if(theme==="light-theme") {
        setTheme("dark-theme")
    }else{
        setTheme("light-theme");
    }
     
  };

  return (
    <GlobalContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
