import axios from 'axios'
export enum Difficulty {
    EASY = "easy",
    MEDIUM =  "medium",
    HARD= "hard"
}



export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const API_URL = `https://opentdb.com/api.php?amount=${amount}&category=18&type=multiple&difficulty=${difficulty}`;
    try {
        const { data } = await axios.get(API_URL);
        return data.results
    } catch (error) {
        console.log(error)
        return []
    }
}
