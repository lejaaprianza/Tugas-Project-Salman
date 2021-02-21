import { Line } from 'react-chartjs-2'
import axios from "axios"
import React,{useState,useEffect} from 'react'


const LineChart = () => {

    const [dataItem,setDataItem] = useState([])
    // const [input, setInput] = useState({name:"", currentId:null})
    
    useEffect(()=>{
        const interval = setInterval(() => {
            axios.get(`http://localhost/my_store/getdata.php`)
        .then(res=>{
            //Pengolahan data
        let getBuah = res.data.map(x=>{
            let obj = {id:x.id,item_code:x.item_code,item_name:x.item_name,price:x.price,stock:x.stock}
            return obj
        })
        setDataItem(getBuah)
        })
          }, 1000);
          return () => clearInterval(interval);

        // axios.get(`http://localhost/my_store/getdata.php`)
        // .then(res=>{
        //     //Pengolahan data
        // let getBuah = res.data.map(x=>{
        //     let obj = {id:x.id,item_code:x.item_code,item_name:x.item_name,price:x.price,stock:x.stock}
        //     return obj
        // })
        // setDataItem(getBuah)
        // })
    },[])
// console.log(dataItem.map((x,y)=>{
//     return(x.item_name)
// }))
  return (
    <div className="chart">
      <Line
      height={100}
      data={{
        labels: dataItem.map((x,y)=>{
          return(x.item_name)
      }),
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataItem.map((x,y)=>{
              return(x.stock)
          })
          }
        ]
      }}
      
      />
    </div>
  )
}

export default LineChart
