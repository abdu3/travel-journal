import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './data';
function App() {
  const CardData=data.map((item,idx)=>{
        return <Card {...item}  key={idx} />
  });
  console.log(CardData);
  return (
    <div className="App">
      <Header/>
      {CardData}
    </div>
  );
}

export default App;
