
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStat from "./Components/FeedbackStat";
import FeedbackForm from "./Components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./Components/AboutIconLink";
import {FeedbackProvider} from './context/FeedbackContext'

function App() {


  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm/>
                <FeedbackStat/>
                <FeedbackList />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
      </div>
      <AboutIconLink/>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
