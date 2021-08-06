import ButtonLink from "./ButtonLink"


const ButtonLinks = ( { buttonsText } ) => {

    // ButtonLinks component contains ButtonLink components
    
    return (
        <>
            {/* Prints ButtonLink components by using data from buttonsText array */}
            {/* button @parameter is an object that will be used to create ButtonLink components*/}
            {buttonsText.map((button) => (
                <ButtonLink key={button.id} button={button} />
            ))}
        </>
    )
}

export default ButtonLinks
