
const ButtonLink = ( { button } ) => {
    return (
        /* Contains button and text above it */
        <div>
            <span className="tryThisGame"> {button.desc} </span> <br />
            <button onclick={button.linkFunction} className={button.cssClass}> {button.text} </button>
            <br /> <br />
        </div>
    )
}

export default ButtonLink
