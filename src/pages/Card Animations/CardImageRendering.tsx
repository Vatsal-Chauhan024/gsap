

const CardImageRendering = ({ imgsArray, isLeft }: { imgsArray: string[], isLeft?: boolean }) => {
    return (
        <div className="flex flex-col gap-20 img_container">
            {imgsArray.map((item) => {
                return (
                    <div className="img_card w-96 h-96">
                        <img src={item} alt="error-icon" className={isLeft ? 'mr-auto' : ''} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardImageRendering