
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
const Checkbox = (props) => {
    return (
        <div className={styles["container"]}>
            <input type="checkbox" id={props.name} name={props.name}/>
            <label for={props.name}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label>
        </div>
    )
}

export default Checkbox;