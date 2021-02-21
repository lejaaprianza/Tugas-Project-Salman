import { Pie } from 'react-chartjs-2'
import axios from "axios"
import React,{useState,useEffect} from 'react'


const PieChart = () => {

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
      <Pie
      height={100}
      data={{
        labels:dataItem.map((x,y)=>{
            return(x.item_name)
        }),
        datasets: [{
            data: dataItem.map((x,y)=>{
                return(x.stock)
            }),
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8F1E51',
            '#01CE59',
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8F1E51',
            '#01CE59',
            ]
        }]
    }}
      
      />
    </div>
  )
}

export default PieChart
