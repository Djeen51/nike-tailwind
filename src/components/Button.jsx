const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button  className={`flex justify-center items-center gap-2 py-4 px-7 leading-none font-montserrat border
    ${backgroundColor? `${backgroundColor} ${borderColor} ${textColor}` :
    "bg-coral-red border-coral-red"
    } rounded-full ${fullWidth && 'w-full' } `}>
        {label}
        {iconUrl && <img
            src={iconUrl}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
         />}
    </button>
  )
}

export default Button