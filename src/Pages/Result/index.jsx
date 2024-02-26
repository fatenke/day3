import SummaryElement from "../../Components/SummaryElement"
import MemoryIcon from "../../Assets/Icons/memoryIcon.svg"
import VerbalIcon from "../../Assets/Icons/chatIcon.svg"
import Button from "../../Components/Button"
import "./index.css"
export default function ResultCard(){
    
    return(
        <>
        <div className="card" id="your-result">
            <h5>Your Result</h5>
            <div className="rating-circle">
                <h1>76</h1>
                <p>of 100</p>

            </div>
            <h3>Great</h3>
            <p>your score higher then 65% of the people who have taken these tests.</p>
        </div>
        <div className="card" id="summary">
            <h5>Summery</h5>
            <div className="elements" id="ele1">
                <SummaryElement icon={MemoryIcon} elementname="Reaction" elementRating="80"/>
            </div>
            <div className="elements" id="ele2">
                <SummaryElement icon={MemoryIcon} elementname="Memory" elementRating="92"/>
            </div>
            <div className="elements" id="ele3">
                <SummaryElement icon={VerbalIcon} elementname="Verbal" elementRating="61"/>
            </div>
            <div className="elements" id="ele4">
                <SummaryElement icon={MemoryIcon} elementname="Visual" elementRating="72"/>
            </div>
            <Button className="continue-btn" value="Continue"/>
            

        </div>
        </>
    )
}