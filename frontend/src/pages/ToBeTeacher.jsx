import React from 'react'
import ToBeTeacherHeroSection from '../components/toBeTeacher/ToBeTeacherHeroSection'
import WhoCanApply from '../components/toBeTeacher/WhoCanApply'
import Requirements from '../components/toBeTeacher/Requirements'
import TeacherApplicationForm from '../components/toBeTeacher/TeacherApplicationForm'



const ToBeTeacher = () => {
  return (
    <>
      <ToBeTeacherHeroSection />
      <WhoCanApply />
      <Requirements />
      <TeacherApplicationForm/>
    </>
  )
}

export default ToBeTeacher