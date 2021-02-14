import React, {HTMLAttributes} from "react"
import {WrappedFieldProps} from "redux-form";
import styles from "./FormsControls.module.css"

// export const TextAria = ({meta, input, ...restProps}: WrappedFieldProps & HTMLAttributes<HTMLTextAreaElement>) => {
//     const isError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (isError ? styles.error : "")}>
//             <div>
//                 <textarea {...input} {...restProps}/>
//             </div>
//             {isError && <span>{meta.error}</span>}
//
//         </div>
//     )
// }
//
// export const Input = ({meta, input, ...restProps}: WrappedFieldProps & HTMLAttributes<HTMLInputElement>) => {
//     const isError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (isError ? styles.error : "")}>
//             <div>
//                 <input {...input} {...restProps}/>
//             </div>
//             {isError && <span>{meta.error}</span>}
//
//         </div>
//     )
// }

const FormControl = ({meta, input, ...restProps}: any) => {
    const isError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (isError ? styles.error : "")}>
            <div>
                {restProps.children}
            </div>
            {isError && <span>{meta.error}</span>}

        </div>
    )
}

export const TextAria = ({meta, input, ...restProps}: WrappedFieldProps & HTMLAttributes<HTMLTextAreaElement>) => {
    const props = {meta, input, ...restProps}
    return (
        <div>
            <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
        </div>
    )
}

export const Input = ({meta, input, ...restProps}: WrappedFieldProps & HTMLAttributes<HTMLInputElement>) => {
    const props = {meta, input, ...restProps}
    return (
        <div>
            <FormControl {...props}><input {...input} {...restProps}/> </FormControl>
        </div>
    )
}




// export const TextAria = (props: any) => {
//     return (
//         <div>
//             {/*<textarea {...input} {...restProps}/>*/}
//             <input {...props.input} {...props}/>
//         </div>
//     )
// }
