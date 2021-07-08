import ButtonLinks from "./ButtonLinks"

const IntroCard = ( { title, descTitle, buttonsText } ) => {

    // ButtonsText is an array that contains data that will be used to create buttons
    
    return (
        <div className='introCard'>
            <h2 className='introTitle'> {title} </h2>
            {/* This paragraph describes website contents and contains button links to navigate around */}
            <p className='description'>
                {descTitle}
                <br /> <br />
                <ButtonLinks buttonsText={buttonsText}/>
            </p>
        </div>
    )
}

export default IntroCard
