import { Link } from "react-router-dom"

interface Props {
    image: string
    title: string
    link?: string
}

const DemostrationCard: React.FC<Props> = ({ image, title, link }): JSX.Element => {
    return (
        <Link to={link && link}>
            <div className=" cursor-pointer w-[120px] h-[120px] rounded-lg bg-orange-600 shadow-lg flex flex-col items-center justify-center gap-3 hover:bg-orange-700">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <img className="border-8 rounded-full" src={image} alt={title} />
                </div>
                <span className="text-white text-xs">{title}</span>
            </div>
        </Link>
    )
}

export { DemostrationCard }