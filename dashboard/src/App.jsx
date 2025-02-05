import React from "react";
import Sidebar from "./sections/Sidebar";
import Main from "./sections/Main";
import { motion } from "motion/react";
import Header from "./components/Header";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-0 text-white font-poppins flex flex-col md:flex-row"
    >
      <Header />
      <Sidebar />
      <Main />
    </motion.div>
  );
};

export default App;
