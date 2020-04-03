import React from "react";

const PrintAndDownload = () => {
  return (
    <div className="header_menu_container">
      <ul className="download_print_buttons">
        {/* <li>
           onClick="javascript:window.print()" 
          <a href="#">
            <span className="icon entypo-print"></span>Print CV
          </a>
        </li> */}
        <li>
          <a href="./documents/cvsamy.pdf" target="_blank">
            <span className="icon entypo-download"></span>Download CV
          </a>
        </li>
      </ul>

      <div className="clear"></div>
      <div className="clear"></div>
    </div>
  );
};

export default PrintAndDownload;
