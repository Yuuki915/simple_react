import "./App.css";
import Card from "./component/card/Card";
import CustomCard from "./component/card/CustomCard";
import CardList from "./component/card/CardList";

const DUMMY_DATA = [
  { id: 1, name: "Mango", age: 5 },
  { id: 2, name: "Dragon", age: 7 },
  { id: 3, name: "Lemon", age: 4 }
];
// 3. loop

// a. map create and return list
// b. map recieve () => {}
// c. () => {} recieve each item
// d. return result data
const cards = DUMMY_DATA.map((data) => {
  return <div key={data.id}>{data.name}</div>;
});

function App() {
  return (
    <div>
      <header>
        <h1>Samples</h1>
      </header>
      <main>
        <h2> 1. simple card </h2>
        <Card />

        <h2> 2. custom card with props </h2>
        <CustomCard name="yuuki1" age="3" />
        <CustomCard name="yuuki2" age="3" />

        {/* 3. ko-yu-koto
        <div></div>
        <div></div>
        <div></div>
        */}
        <h2> 3. div loop</h2>
        {cards}

        <h2> 4. card list </h2>
        <CardList dataList={DUMMY_DATA}/>

      </main>
    </div>
  );
}

export default App;
