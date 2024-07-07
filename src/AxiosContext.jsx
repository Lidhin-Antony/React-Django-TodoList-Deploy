import { createContext, useContext } from "react";
import { deleteData, getData, sendData, updateData } from "./Axios";

const AxiosContext = createContext();

export const AxioProvider = ({ children }) => {
    const api = {
        getData,
        sendData,
        deleteData,
        updateData
    };

    return (
        <AxiosContext.Provider value={api}>
            {children}
        </AxiosContext.Provider>
    );
};


export const useAxio = ()=>{
    return useContext(AxiosContext)
}
  




// export const sendData= (data)=>{
//     axio.post('', data)
//     .then(response => console.log(response))
//     .catch((error) => {
//       console.log(error.message);
//     })
//   }