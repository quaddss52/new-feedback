import Card from "../components/shared/Card"
import Button from "../components/shared/Button"
import { Link } from "react-router-dom"
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project!</h1>
            <p>This is a React project aimed at rating our services and leaving a feedback</p>

            <p>Version : 1.0.0</p>

           
            <Link to="/">

             <Button version='secondary'>Back to Home</Button>
            </Link>
            
        </div>
    </Card>
  )
}

export default AboutPage