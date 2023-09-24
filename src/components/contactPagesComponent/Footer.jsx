import InstagramSVG from "../InstagramSVG";
import XIcon from "../XSVG";
import FacebookSVG from "../FacebookSVG";
import LinkedinSVG from "../LinkedInSVG";

function Footer() {
    return (
        <>
     <footer className="footer">
          <div style={{color:"#fffff"}}>Share on</div>

          <div className="icon_share">

          <div className="share">
             <InstagramSVG height="30" />
           </div>
            <div className="share">
             <XIcon/>
           </div>
           <div className="share">
             <FacebookSVG/>
           </div>
           <div className="share">
             <LinkedinSVG/>
          </div>
       
          </div>
      </footer> 


     
        
        
        
        </>
    )
}

export default Footer;
