import { Bar } from 'react-chartjs-2'
import axios from "axios"
import React,{useState,useEffect} from 'react'


const BarChart = () => {

    const [dataItem,setDataItem] = useState([])
    
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
      <Bar
      height={100}
      
      data={ {
        labels: dataItem.map((x,y)=>{
            return(x.item_name)
        }),
        datasets: [{
            label: 'Harga',
            data: dataItem.map((x,y)=>{
                return(x.price)
            }),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        ]
    }}
    options= {{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }}/>
    </div>
  )
}

export default BarChart
