import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title, Tooltip, Legend );



function LineChart() {
    
  return (
    <>{/* chart  */}
    <div className='h-[38%] '>
        <div style={{height:"100% ",width:"50% "}} >
        <Line  options={options} data={data} />
        </div>
    </div>
    <div>sdflsdf</div>
    {/* chart  */}
    </>
  )
}

export default LineChart


 const options = {
    resposive: false,
    maintainAspectRatio: 10/3,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Activity',
        font:{size:25}
      },
    },
    scales:{
        x:{
            grid:{
                display:false,
            },
        },
        y:{
            grid:{
                display:true
            }
        },
    },
    devicePixelRatio: 80/10
  };
  
  const labels = ['1st Week', '2nd Week', '3rd Week', '4th Week'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Guest',
        data: [400,234,334,123],
        borderColor: 'rgb(233,160,160)',
        backgroundColor: 'rgb(233,160,160)',
        tension:0.5,
        borderWidth:2,
        pointRadius:0,
      },
      {
        label: 'User',
        data: [134,346,257,467],
        borderColor: 'rgb(155,221,124)',
        backgroundColor: 'rgb(155,221,124)',
        tension:0.5,
        borderWidth:2,
        pointRadius:0,
      },
    ],
  };