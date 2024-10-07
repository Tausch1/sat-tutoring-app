import QuestionDisplay from './QuestionDisplay';

function App() {
  const sampleQuestion = "What is the result of integrating e^x with respect to x?";
  const sampleAnswers = [
    "e^x + C",
    "e^x",
    "xe^x",
    "ln(x) + C",
    "None of the above"
  ];

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-4">The Beast</h1>
      <QuestionDisplay question={sampleQuestion} answers={sampleAnswers} />
    </div>
  );
}