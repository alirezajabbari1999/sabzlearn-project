import React from 'react'
import HeaderSection from "../../Components/Header/Header";
import LandingSection from "../../Components/Landing/Landing";
import CoursesSection from "../../Components/Courses/Courses";
import RoadMapSection from "../../Components/Roadmap/RoadMap";
import HelpSection from "../../Components/Help/Help";
import NewCoursesSection from "../../Components/NewCourses/NewCourses";
import ArticleSection from "../../Components/Article/Article";
import InstagramSection from "../../Components/Instagram/Instagram";
import PishForoushSection from "../../Components/PishForoush/PishForoush";
import PopularCoursesSection from "../../Components/PopularCourses/PopularCourses";
import FooterSection from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <LandingSection></LandingSection>
      <CoursesSection></CoursesSection>
      <RoadMapSection></RoadMapSection>
      <HelpSection></HelpSection>
      <NewCoursesSection></NewCoursesSection>
      <ArticleSection></ArticleSection>
      <InstagramSection></InstagramSection>
      <PishForoushSection></PishForoushSection>
      <PopularCoursesSection></PopularCoursesSection>
      <FooterSection></FooterSection>
    </div>
  )
}
