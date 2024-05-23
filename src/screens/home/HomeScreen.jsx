import CertificateAward from "../../components/CertificateAward/CertificateAward"
import BackgroundEffect from "../../components/background_effect/BackgroundEffect"
import Cursor from "../../components/cursor/Cursor"
import Education from "../../components/education/Education"
import Experience from "../../components/experience/Experience"
import Header from "../../components/header/Header"
import Hobbies from "../../components/hobbies/Hobbies"
import Skill from "../../components/skill/Skill"
import ExternDocs from "../../components/extern_docs/ExternDocs"
import BigFive from "../../components/bigFive/BigFive"
import LangOptions from "../../components/langOptions/LangOptions"
import CookieConsent from "../../components/cookieConsent/CookieConsent"
import GLBViewer from "../../components/model/Model"

const HomeScreen = () => {
  return (
    <div className="page-container">

        <CookieConsent></CookieConsent>

        <LangOptions></LangOptions>
        
        <Header />

        {/*<GLBViewer></GLBViewer> */}


        <Experience />
        <Education />

       

        <Skill />
        <CertificateAward />
        <Hobbies />

        <BigFive/>

        <ExternDocs/>

        

        {/* Effects */}
        <Cursor />
        <BackgroundEffect />
    </div>
  )
}

export default HomeScreen
