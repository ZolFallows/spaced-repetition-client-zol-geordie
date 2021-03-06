import React, {Component} from 'react';

const LearningContext = React.createContext({
    setLanguageHead: () => {},
    setGeussResult: () => {},
    updateScore: () => {},
    setError: () => {},
    clearError: () => {},
    languageHead: {},
    guessResult: {},
    // showWord: null,
    error: null
});

export default LearningContext;

export class LearningProvider extends Component {
    state = {
        languageHead: {},
        guessResult: {},
        error: null
    }

    setGeussResult = (guessResult) => {
        this.setState({guessResult})
    }

    setLanguageHead = (languageHead) => {
        this.setState({languageHead})
    }

    updateScore = (totalScore) => {
        const tempLanguage = this.state.languageHead
        tempLanguage['totalScore']=totalScore
        this.setState({languageHead: tempLanguage})
    }

    setError = (error) => {
        this.setState({error});
    }

    clearError = () => {
        this.setError(null);
    }

    render() {
        const contextValue = {
            languageHead: this.state.languageHead,
            guessResult: this.state.guessResult,
            error: this.state.error,

            setLanguageHead: this.setLanguageHead,
            setGeussResult: this.setGeussResult,
            updateScore: this.updateScore,
            setError: this.setError,
            clearError: this.clearError
        }
        return (
            <LearningContext.Provider value={contextValue}>
                {this.props.children}
            </LearningContext.Provider>
        )
    }
}