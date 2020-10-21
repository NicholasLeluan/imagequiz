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
import tulip from "./images/tulip.png";
import waterlily from "./images/waterlily.png";
import './Quizzes.css';

class Quizzes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionNum: 0,
            score: 0,
            end: false
        };
    }

    

    checkAnswer = (answer,questions) =>{
        if(answer){
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
        const images = [
            tulip,waterlily,daisy,cherryblossum,rose,sunflower
        ]
        const questions = [
            {
                questionText: 'What flower is this?',
                answerOptions: [ 
                    {answerText: 'Rose', isCorrect: false},
                    {answerText: 'Tulip', isCorrect: true},
                    {answerText: 'Daffodil', isCorrect: false},
                    {answerText: 'Sunflower', isCorrect: false}

                ],
            },
            {
                questionText: 'What color is the flower?',
                answerOptions: [ 
                    {answerText: 'Red', isCorrect: false},
                    {answerText: 'Blue', isCorrect: false},
                    {answerText: 'Green', isCorrect: false},
                    {answerText: 'Pink', isCorrect: true}
                ],
            },
            {
                questionText: 'How many pedals on this flower?',
                answerOptions: [ 
                    {answerText: '1', isCorrect: true},
                    {answerText: '2', isCorrect: false},
                    {answerText: '3', isCorrect: false},
                    {answerText: '3+', isCorrect: true}
                ],
            },
            {
                questionText: "What flower is this?",
                answerOptions: [
                    {answerText: "Rose", isCorrect: false},
                    {answerText: "Candy", isCorrect: false},
                    {answerText: "CherryBlossum", isCorrect: true},
                    {answerText: "Not a Flower", isCorrect: false}
                ]
            },
            {
                questionText: "What type of plant is this?",
                answerOptions: [
                    {answerText: "Pancake", isCorrect: false},
                    {answerText: "Dog", isCorrect: false},
                    {answerText: "Flower", isCorrect: true},
                    {answerText: "Fish", isCorrect: false}
                ]
            },
            {
                questionText: "When do these flowers bloom",
                answerOptions: [
                    {answerText: "Spring", isCorrect: true},
                    {answerText: "Fall", isCorrect: false},
                    {answerText: "Summer", isCorrect: false},
                    {answerText: "Never", isCorrect: true}
                ]
            },
        ]

        return(
            <div class = "quizContainer">
                {this.state.end ? 

                    <div> 
                        <div class = "photoContainer"><img src={cherryblossum} /></div>
                        <div class= "displayScore">
                            <div class= "scoreStyle">Total Correct: {this.state.score}<br/>
                            Total Answered: {questions.length}</div>
                            </div>
                        <button class = "goHome"><Link to='/imagequiz/'>Go Home</Link></button><br/>
                        <button class = "goHome" onClick={this.tryAgain}>Try Again</button>
                    </div> 
                :
                    <div>
                        <div class = "photoContainer"><img src={images[this.state.questionNum]} /></div>
                        <div class="question">{questions[this.state.questionNum].questionText}</div>
                    <div class = "questionsContainer">
                            {questions[this.state.questionNum].answerOptions.map((option) => (
                                <button 
                                class="buttonDisplay"
                                onClick={() => this.checkAnswer(option.isCorrect,questions)}>
                                    {option.answerText}
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