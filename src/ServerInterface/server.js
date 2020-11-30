let api = "http://localhost:3069"
let server = {
    fetchQuizzes: () => {return (fetch(api+"/quizzes").then(x => x.json()))}
}