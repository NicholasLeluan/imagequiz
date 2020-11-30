import React from 'react';
import{
    Link
}from "react-router-dom"
import daffodil from "./images/daffodil.png";
import cherryblossum from "./images/cherryblossom.png";
import daisy from "./images/daisy.jpg";
import lily from "./images/lily.jpg";
import rose from "./images/rose.png";
import sunflower from "./images/sunflower.png";
import server from '../ServerInterface/server';
import './Quizzes.css';

class Quizzes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionNum: 0,
            score: 0,
            questions: [],
            end: false
        };
    }

    componentDidMount() {
        let quiz = {};
        const location = this.props.location;
        if (location){
            if (location.state){
                if (location.state.quiz){
                    quiz = location.state.quiz;
                    console.log(quiz);
                }
            }
        }
        if (quiz){
            let id = quiz.id;
            server.fetchQuestions(id).then(x => this.setState({questions: x})).catch(e => console.log(e));
                }
        }
    
    checkAnswer = (guess,answer) =>{
        let questions = this.state.questions;
        console.log(guess);
        console.log(answer);
        if (guess == answer){
            const updateScore = this.state.score +1;
            this.setState({score:updateScore})
        }
        const updateQNum = this.state.questionNum +1;
        if (updateQNum < questions.length){
            this.setState({questionNum:updateQNum});
        }else if (updateQNum == questions.length){
            this.setState({end: true});
        }

    }

    tryAgain = () =>{
        this.setState({score: 0});
        this.setState({questionNum: 0});
        this.setState({end: false});
    }
    render(){
        if (this.state.questions.length == 0 ){
            return(<div>
                data is loading...
            </div>)
        }
        let quest = this.state.questions;
        return(
            <div class = "quizContainer">
                {this.state.end ? 
                    <div> 
                        <div class = "photoContainer"><img src={require('./images/'+this.props.location.state.quiz.image)}/></div>
                        <div class= "displayScore">
                            <div class= "scoreStyle">Total Correct: {this.state.score}<br/>
                            Total Answered: {quest.length}</div>
                            </div>
                        <button class = "goHome"><Link to='/imagequiz/'>Go Home</Link></button><br/>
                        <button class = "goHome" onClick={this.tryAgain}>Try Again</button>
                    </div> 
                :
                    <div>
                        <div class = "photoContainer"><img src={require('./images/'+quest[this.state.questionNum].picture)} /></div>
                        <div class="question">{quest[this.state.questionNum].title}</div>
                        <div class = "questionContainer">{quest[this.state.questionNum].choices.map((option) => (
                            <button class="buttonDisplay" onClick={() => this.checkAnswer(option,quest[this.state.questionNum].correct)}>
                                {option}
                            </button>
                        ))}
                        </div>
                    </div>
                        }
            </div>
            
        );
    }
}
export default Quizzes;