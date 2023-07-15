import { Chart } from 'react-google-charts';
import Pie from './Pie';
// import { Chart as ChartJS,CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
// ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title, Tooltip, Legend );



function LineChart() {
    
  return (
    <>{/* chart  */}
    <div className='h-[38%] rounded-2xl'>
        <Chart  chartType="LineChart" height="100%" className='p-6 rounded-xl' options={options} data={data} />
    </div>
    <div className=' w-[100%] h-2/6'>
<Pie/>
    </div>
    {/* chart  */}
    </>
  )
}

export default LineChart

const data = [
    ["week", "Guest", "User"],
    ["",0,0],
    ["week1", 366, 133],
    ["Week2", 211, 244],
    ["week3", 388, 199],
    ["week4", 455, 400],
  ];
  
   const options = {
    title: "Activity",
    series: {
        0: { curveType: "function",color:'rgb(233,160,160)' },
        1: { curveType: "function",color:"rgb(155,221,124)" },
      },
    legend: { position: "top" },
  };

//  const options = {
//     resposive: false,
//     maintainAspectRatio: 10/3,
//     plugins: {
//       legend: {
//         position: 'top' ,
//       },
//       title: {
//         display: true,
//         text: 'Activity',
//         font:{size:25}
//       },
//     },
//     scales:{
//         x:{
//             grid:{
//                 display:false,
//             },
//             height:"100%",
//         },
//         y:{
//             grid:{
//                 display:true
//             },
//             width:"100%",
//         },
//     },
//     devicePixelRatio: 80/10
//   };
  
//   const labels = ['1st Week', '2nd Week', '3rd Week', '4th Week'];
  
//    const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Guest',
//         data: [400,234,334,123],
//         borderColor: 'rgb(233,160,160)',
//         backgroundColor: 'rgb(233,160,160)',
//         tension:0.5,
//         borderWidth:2,
//         pointRadius:0,
//       },
//       {
//         label: 'User',
//         data: [134,346,257,467],
//         borderColor: 'rgb(155,221,124)',
//         backgroundColor: 'rgb(155,221,124)',
//         tension:0.5,
//         borderWidth:2,
//         pointRadius:0,
//       },
//     ],
//   };