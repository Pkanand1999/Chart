import { Chart } from 'react-google-charts';

function Pie() {
  return (
    <>
    <Chart chartType="PieChart"
      data={data}
      options={options}
      className='p-6 rounded-xl'
      width={"70%"}
      height={"100%"}/>
    </>
  )
}

export default Pie

export const data = [
    ["Task", "Per Day"],
    ["Basic Tees", 2],
    ["Costum Short Pants", 2],
    ["Super Hoodies", 7],
  ];
  
  export const options = {
    title: "Top Products",
  };