import { Fragment } from "react"
import ReactDOM from "react-dom";
import classes from './Modal.module.css'; 
import { FiX } from "react-icons/fi";

const Backdrop = (props)=>{
    const divStyle = {
        zIndex: props.zIndex, 
      };
    return <div className={classes.backdrop} style={divStyle}></div>
}

const ModalOverlay = (props) =>{
    // const sizeWidth = !props.withSize ? classes.modalSm : classes.modalLg; // if null the value use the default size
    // const showIcon = !props.withSize ? '' : classes.closeIcon; // if not null the value show the x icon else use the override in other components
    const showIcon = classes.closeIcon;
    const sizeWidth = classes.modalSm;
    return <div className={` ${classes.modal}  ${sizeWidth}`}> 
         <div className={showIcon} onClick={()=>{props.onClose(false)}}><div className={classes.iconHover}><FiX/></div></div>
         {/* <div className={showIcon} onClick={()=>{props.onClose(false)}}>{<IoCloseCircleSharp/>}</div> */}
        <div>{props.children}</div>
    </div>
 
}
const portalElement = document.getElementById("backdrop")

export const ModalCard = (props)=>{
    return(
        <div className={classes.modalCard}>
            {props.children}
        </div>
    )
}

export const ModalTitle = (props)=>{
    return(
        <div className={classes.modalTitle}>
            {props.children}
        </div>
    )
} 

export const ModalContent = (props)=>{
    return(
        <div className={classes.modalContent}>
            {props.children}
        </div>
    )
} 

export const Modalfooter = (props)=>{
    return(
        <div className={classes.footer}>
            {props.children}
        </div>
    )
}


const Modal = (props)=>{
    return (
        <Fragment>   
                {ReactDOM.createPortal(<Backdrop zIndex={props.zIndex}></Backdrop>,portalElement)}
                {ReactDOM.createPortal(
                <ModalOverlay withSize={props.withSize} onClose={props.onClose}>
                    {props.children} 
                </ModalOverlay>,portalElement)} 
        </Fragment>
    )
}

export default Modal;