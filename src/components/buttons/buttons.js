import styleFloating from './floating.module.css'

export const FloatingButton = (props) => {
    return(
        <div className={styleFloating.float}>
            <div className={styleFloating.my_float}>
                {props.children}
            </div>
        </div>
    )
}