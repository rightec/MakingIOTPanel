import './RPSideBar.css';
import React from "react";
import ButtonPanel from '../ButtonPanel'

import {useState,useEffect,useMemo} from "react";

const resizeHeight = (height) => {
    let div_MainId = document.getElementById("id_RPSideBar_Main");
    if (div_MainId !== null){
        div_MainId.style.setProperty("height", height);
        let aside_MainId = document.getElementById("id_AsideMain");
        if (aside_MainId !== null){
            aside_MainId.style.setProperty("height", height);
            let aside_ArrowId = document.getElementById("id_AsideArrow");
            if (aside_ArrowId !== null){
                aside_ArrowId.style.setProperty("height", height);
                let icon_ArrowId = document.getElementById("id_ToggleIcon");
                if (icon_ArrowId !== null){
                    icon_ArrowId.style.setProperty("position", "relative");
                    let top = height.slice(0,(height.length -2));
                    console.log("top is: ", top);
                    let topString = top/2 + "px";
                    icon_ArrowId.style.setProperty("top",topString);
                } // else
            } // else
        } // else
    } // else
}

const buttonNames = ['Led Manager', 'Show IP'];
const RPSideBar = (props) => {
    // Use state section
    const [isOpen, setIsOpen] = useState(true);  // True means the panel is open - False means closed


    const clickArrayInitialCbk = [
        { id: "id_ToggleIcon", callback: "setAdminPanel" }
    ];
    
      const clickArrayOtherCbks = [
        { id: "id_ToggleIcon", callback: "setAdminPanel" },
        { id: "id_ToggleIcon1", callback: "setAdminPanel1" },
        { id: "id_ToggleIcon2", callback: "setAdminPanel2" }
      ];
    const [clickArray,setClickArray] = useState(clickArrayOtherCbks);

    // Use effect section
    useEffect(() => {
        console.log("RPSideBar - usEffect on isdeveloper: " , props.height);
        resizeHeight(props.height);        
    }, [props.height]);

    useEffect(() => {
        console.log("RPSideBar - usEffect on isOpen: " , isOpen);
        let aside_MainId = document.getElementById("id_AsideMain");
        let aside_ArrowId = document.getElementById("id_AsideArrow");
        let aside_Body = document.getElementById("id_AsideBody");
        let i_ToggleIcon = document.getElementById("id_ToggleIcon");
        
        
          if ((aside_MainId !== null) &&
              (aside_ArrowId !== null) &&
              (i_ToggleIcon !== null) &&
              (aside_Body !== null)) {
              if (isOpen === false) {
                  aside_MainId.style.setProperty("display", "none");
                  aside_ArrowId.style.setProperty("display", "inline-block");
                  aside_Body.style.setProperty("width", "98%");
                  i_ToggleIcon.className="icon-chevron-right icon-white";
              } else {
                  aside_MainId.style.setProperty("display", "inline-block");
                  aside_ArrowId.style.setProperty("display", "inline-block");
                  aside_Body.style.setProperty("width", "88%");
                  i_ToggleIcon.className="icon-chevron-left icon-white";
              }
          } // else
    },[isOpen]);

    useMemo(() => {
        console.log('RPSideBar This is useMemo')
        // setClickArray(clickArrayOtherCbks);
        console.log ("RPSideBar useMemo clickArray", clickArray);
      }, []);

      function findCallBack(itemId){
          let retVal = -1;
          console.log("RPSideBar - itemId: ", itemId);
          // console.log("RPSideBar - findCallback clickArray: ", clickArray);
          for (let i=0; i<clickArray.length;i++){
              console.log("RPSideBar - findCallback: ", clickArray[i].id);
              if (itemId === clickArray[i].id){
                    retVal = i;
                    console.log("RPSideBar - findCallback item found is: ", i);
              } // else
          } // end for
          return retVal;
      }

      function setAdminPanel(){
          setIsOpen(!isOpen);
          console.log("RPSideBar - setAdminPanel", isOpen);
      }

      function getCallback(targetId){
        console.log("RPSideBar - getCallback, with targetId", targetId);
        let retVal = null;
        for (let i = 0; i< clickArray.length; i++){
            if (clickArray[i].id === targetId){
                retVal = clickArray[i].callback;
                i = clickArray.length; 
            } // else
        }
    
        return retVal;
    }

    function clickManager(e) {
        console.log("RPSideBar - clickmanager event: ", e);   
        if (e.type === "click") {
            console.log("Target is: " + e.target.id); 
            // console.log("click array: " + clickArray[0].id);      
            // console.log("click array: " + clickArray[0].callback); 
            let myCallback = getCallback(e.target.id);
            console.log("RPSideBar - callback is: ", myCallback);
            eval(myCallback)();  
        } else {
            console.log("it is not a click");
        }
    }

    
    return (
        
        <div id="id_RPSideBar_Main" className={(props.isdeveloper === "true") ? "rp-sidebar-main_devel" : "rp-sidebar-main_release"}>
            {(props.isdeveloper === "true") ? <div>isdeveloper is: {props.isdeveloper}</div> : null}
            <aside id="id_AsideMain">
                <ButtonPanel names={buttonNames} ></ButtonPanel>
            </aside>
            <aside id="id_AsideArrow">
                <i id="id_ToggleIcon" className="icon-chevron-left icon-white" onClick={clickManager}></i>
            </aside>
            <aside id="id_AsideBody" className="rp-sidebar-main_release">
                BODY
            </aside>
        </div>
    )
}
export default RPSideBar
