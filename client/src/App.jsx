import Card from './Card.jsx';

// props luôn là 1 object
// mỗi key truyền attribute, sẽ là một key của object này, giá trị sẽ là giá trị được truyền trên thẻ
const ComponentA = (props) => {
  const age = 10;
  const handleClickBtn = () => {
    console.log("Hi!");
  }

  return <div className="componentA">
    <h1 style={{ color: "red" }}>Hello MindX {age} tuổi!</h1>
    <button onClick={handleClickBtn}>Click me</button>
  </div>
}

function App() {
  const age = 10;
  const onClick = () => {
    console.log('hihi tôi là props function');
  };
  return (
    <div className="app">
      <ComponentA name="CIJS98" />
      <h1>Hello mọi người! Tôi năm nay {age}</h1>
      <Card name="Macbook" price={100000000} abc={onClick}>
        <h1>Tôi là thẻ bên trong Card</h1>
        <h1>Tôi là thẻ bên trong Card</h1>
      </Card>
      <Card name="Thinkpad" price={500000} />
      <Card name="Lenovo" price={2500000} />
    </div >
  )
}

export default App;