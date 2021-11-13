import React from "react";
import styles from "./Button.module.css"

const getStylesForType = (type) => {
    switch (type) {
        case "success":
            return {
                color: "green"
            }
        case "warning":
            return {
                color: "yellow"
            }
        case "error":
            return {
                color: "red"
            }
        default:
            return {}
    }
}

function Button(props){
    const {title, type, disabled} = props;
    const style = getStylesForType(type);
    return (
        <button disabled={disabled} className={styles.button} style={style}>
        {title}
        </button>
    )
}

export default Button