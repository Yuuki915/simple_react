import CustomCard from "./CustomCard";

const CardList = (props) => {
  console.log(props.dataList);
  const cards = props.dataList.map((data) => {
    return <CustomCard key={data.id} name={data.name} age={data.age}/>;
  });
  return cards;
};

export default CardList;
