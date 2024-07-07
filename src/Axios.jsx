import axios from "axios";

export const axio = axios.create({
    baseURL: "https://djangoreacttodoapp.pythonanywhere.com/",
  });




  
export const getData = async ()=>{
    return await axio.get('').then(response =>{
        // console.log('Axios.jsx fetched data log:',response.data)
        return response.data
    })
    .catch((error) => {
      console.log(error.message)
    });
  }





  
export const sendData= (data)=>{
    axio.post('', data).then(response =>{
        console.log('sendData log:',response)
        // const key = Object.keys(response.data.data)[0];
        return response.data
    })
    .catch((error) => {
      console.log(error.message);
    });
  }


export const deleteData= (id,data, text)=>{
    axio.delete(`/${id}/`, {data, text}).then(response =>{
        console.log('sendData log:',response)
        // const key = Object.keys(response.data.data)[0];
        return response.data
    })
    .catch((error) => {
      console.log(error.message);
    });
  }




export const updateData= (id,status,text)=>{
    axio.put(`/${id}/`, {status, text}).then(response =>{
      // console.log('sendData log:',response)
      return response.data
    })
    .catch((error) => {
      console.log(error.message);
    });
  }