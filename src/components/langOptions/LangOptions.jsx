import Title from "../common/Title";
import DATA from "../../constant/mockData";
import styled from 'styled-components';

const LangOptions = () => {

    const iconStyle = {
        position: "fixed",
        top: "10px",  /* Passen Sie den Wert an, um die gewünschte vertikale Position anzupassen */
        right: "10px",  /* Passen Sie den Wert an, um die gewünschte horizontale Position anzupassen */
        display: "flex",
      };

    const stickyText = {
            position: "fixed",
            top: "10px", 
            left: "10px",
    
    }

    const StyledText = styled.p`
  @media (max-width: 1700px) {
    display: none; // Text will disappear at or below 600px width
  }
`;


  return (

    <div>

    <div className="stickyText">
      <StyledText> <h1 style={{color: "black", padding: "15px", fontSize: "45px",  position: "fixed",}}>Bewerbung Alexander Hahn</h1></StyledText>
    </div>

     <div style={iconStyle}>

        <div>
        <StyledText>  <p style={{color: "black", fontWeight: "600", paddingTop: "5px"}}>Change Language</p> </StyledText>
        </div>

         <div>
        <img src={DATA.langOption.english_icon} alt=""  style={{ width: '35px', height: "auto", marginLeft: "5px"}}/>
        </div>


        <div>
        <img src={DATA.langOption.german_icon} alt="" style={{ width: '35px', height: "30px", marginLeft: "5px"}} />
        </div>
       
        
      </div>

    </div>
  );
};

export default LangOptions;