# Description :
Simple react component Modal pluggin for react using create-react-app. 

# simple-component-libraryA library of React components created using `create-react-app`.

## InstallationRun the following command:`npm install simple-component-library` 

# Installation
## Run the following command:
npm install modal-lib

# Use
## 1. Import the pluggin
import {Modal} from "modal-lib"

## 2. Use this state
const [displayModal, setDisplayModal] = useState(false)

## 3. Return the modal :
<Modal 
    modalStyle={modalStyle} 
    modalHeaderStyle={modalHeaderStyle} 
    titleStyle={titleStyle}
    modalBodyStyle={modalBodyStyle} 
    modalFooterStyle={modalFooterStyle} 
    xButtonStyle={xButtonStyle} 
    footerButton1Style={footerButton1Style}
    footerButton2Style={footerButton2Style}
    title="Enter your modal title here" 
    message="Hello, your message here" 
    buttonText1="Ok"
    buttonText2="Cancel"
    showModal={displayModal} 
    hideModal={()=>setDisplayModal(false)} 
/>


# Put it in your pluggin style (example)
const modalStyle = {
    "background": "",
    "margin": "",
    "borderRadius": "",
    "maxWidth": "",
    "width": "",
    "padding": "",
    "border": "",
}

const modalHeaderStyle = {
    "display": "flex",
    ....
}

