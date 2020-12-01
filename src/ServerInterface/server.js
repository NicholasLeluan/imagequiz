let api = "https://nicholasleluan-imagequiz.herokuapp.com"
let server = {
    fetchQuizzes: () => {return (fetch(api+"/quizzes").then(x => x.json()))},
    fetchQuestions: (quizid) => {return (fetch(api+`/questions/${quizid}`).then(x => x.json()))},
    storeScore: () => { return(fetch(api+'/score'))},
    getScores: () => {return(fetch(api+'/highscores').then(x => x.json()))},
};

export default server;