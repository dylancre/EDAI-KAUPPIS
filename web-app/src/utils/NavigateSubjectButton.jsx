import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import arrow_right from "../assets/arrow-right.svg";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { twMerge } from "tailwind-merge";

const NavigateSubjectButton = ({currentContentData, className}) => {

const location = useLocation();

  const [button, setButton] = useState({ text: "", path: "" });
  const {contentData, setSelectedContent} = useAppContext()

  useEffect(() => {
    switch (currentContentData[0].title) {
      case contentData[0][0].title:
        setButton({ text: contentData[1][0].title, path: "/taloustieto" });
        break;
      case contentData[1][0].title:
        setButton({ text: contentData[0][0].title, path: "/" });
        break;
    }

    setSelectedContent(currentContentData[0].details);
  }, [location.pathname])

  return (
    <Link to={button.path} className={twMerge("absolute left-5 bottom-16 text-sm flex gap-2", className)}>
        <span>{ button.text}</span>{" "}
        <img className="size-3.5 mt-1" src={arrow_right} alt="" />{" "}
      </Link>
  )
}

export default NavigateSubjectButton