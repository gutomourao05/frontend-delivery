
interface Props {
    image: string
    title: string
}

const DemostrationCard: React.FC<Props> = ({ image, title }): JSX.Element => {
    return (
        <div className=" cursor-pointer w-[100px] h-[120px] rounded-t-full bg-orange-600 shadow-lg flex flex-col items-center justify-center gap-3 hover:bg-orange-700">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img className="border-8 rounded-full" src={image} alt="" />
            </div>
            <span className="text-white text-xs">{title}</span>
        </div>
    )
}

export { DemostrationCard }