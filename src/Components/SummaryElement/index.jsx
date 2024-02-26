import Image from "../Images";


export default function SummaryElement(props){
    
    return(
        <>
        <div className="element">
        <div className="element-name">
            <Image src={props.icon} />
            <p>{props.elementName}</p>
        </div>
        <div className="element-rating">
            <p>{props.elementRating}/100</p>
        </div>


        </div>
        </>
    )

}