import ButtonLink from "./ButtonLink"


const ButtonLinks = ( { buttonsText } ) => {
    return (
        <>
            {/* Prints ButtonLink components by using data from buttonsText array */}
            {buttonsText.map((button) => (
                <ButtonLink key={button.id} button={button} />
            ))}
        </>
    )
}

export default ButtonLinks
