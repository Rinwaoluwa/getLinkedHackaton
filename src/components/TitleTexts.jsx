/* eslint-disable react/prop-types */
const style = {
    marginBottom: '1rem',
}

function TitleTexts({title, subTitle}) {
    return (
        <h2 style={style}>{title} <br /> <span className="color-purple">{subTitle}</span></h2>
    )
}

export default TitleTexts;
