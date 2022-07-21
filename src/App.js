import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import {useState} from 'react'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'
import AboutIcon from './components/AboutIcon'
function App(){
    const [feedback, setfeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setfeedback([newFeedback,...feedback])
    }
    const deleteFeedback = (id)=> {
        if(window.confirm('Are you sure you want to delete?')){
            setfeedback(feedback.filter((item) => item.id !== id))

        }
    }
    return (
        <FeedbackProvider>

        <Router>
        <Header />
        <div className="container">
        <Routes>

        <Route 
        exact path='/' 
        element = {
        <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList 
            handleDelete ={deleteFeedback}/>
        </>
        }
        />
        
        <Route path='/about' element = {<AboutPage/>}/>
        </Routes>

        <AboutIcon />
        </div>
        </Router>
        </FeedbackProvider>
         
         )
   
}

export default App