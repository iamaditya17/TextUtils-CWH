import React from 'react'

export default function Alert(props) {
    return (
        <div style={{ height: "45px" }}>
            {props.alert && <div className={`alert alert-${props.alert.typeOfAlert} my-2`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}

//we are using props.alert && --> bcuz if this is true then the next statements are working otherwise not
