//import React from 'react'
import {useContextGlobal} from '../Components/utils/global.context'

const Footer = () => {
  const {state: { theme } } = useContextGlobal();
  return (
    <footer>
        {/*<p>Powered by</p>*/}
        {/*<img src="./img/DH.png" alt='DH-logo' />*/}
        <div className={`px-5 py-1 ${theme === "light" ? "bg-light" : "bg-secondary"}`}>
          <div className="row bg-danger text-white text-center py-2">
            <div className="col">
              <p className="m-0">Powered by</p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-6 text-center">
                <img src="./images/DH.png" alt="DH-logo" className="img-fluid" style={{ maxWidth: "150px" }} />
            </div>
            <div className="col-md-6 text-center">
              <img src="./images/ico-facebook.png" alt="facebook-logo" className="img-fluid mx-2" style={{ maxWidth: "20px", filter: "brightness(0)" }} />
              <img src="./images/ico-instagram.png" alt="instagram-logo" className="img-fluid mx-2" style={{ maxWidth: "20px", filter: "brightness(0)" }} />
              <img src="./images/ico-whatsapp.png" alt="whatsapp-logo" className="img-fluid mx-2" style={{ maxWidth: "20px", filter: "brightness(0)" }} />
              <img src="./images/ico-tiktok.png" alt="tiktok-logo" className="img-fluid mx-2" style={{ maxWidth: "20px", filter: "brightness(0)" }} />
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
