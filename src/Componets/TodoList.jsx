import React,{useEffect, useState} from 'react'
import { useAxio } from '../AxiosContext'
import './TodoList.css'

function TodoList() {
    const [todoList, setTodoList] = useState('')
    const [djangoData, setDjangoData] = useState([])
    const {getData, sendData, deleteData, updateData} = useAxio()



    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let date = new Date()
    let day = daysOfWeek[date.getDay()]





    useEffect(() => {
        const fetchDjangoData = async () => {
          try {
            const data = await getData();
            // console.log('Fetched Data:', data)
            if (data) {
              setDjangoData(data);
            //   console.log('Updated Django Data:', data)
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchDjangoData();
    
      }, [getData])
    
    
    
    
      
    

    


  return (
        <>
            <div className="app">
                <div className="mainHeading">
                    <h1>TODO</h1><br />
                </div>
                

                <div className="subHeading">
                    <h2 style={{textAlign: 'center'}} >It's {day} 😎☕ </h2>
                    <h3 style={{textAlign: 'center'}} >My today's list</h3>
                </div>



                <div className="input">
                    <input value={todoList} onChange={(e)=> setTodoList(e.target.value)} type="text" placeholder="🖊️ Add Your Lists....." />
                    <i onClick={(e)=>{
                        if (todoList.trim() !== '') {
                        e.preventDefault() 
                        setDjangoData([...djangoData,{id:Date.now(), text: todoList, status:false}]); 
                        setTodoList('')
                        sendData({text: todoList, status:false})
                        }
                    }} 
                    className="fas fa-plus"></i>
                </div>
            



                {
                    djangoData.map((obj,index)=>{
                        if (obj) {
                            return (
                                <div className="todos" key={index}>
                                    <div className="todo">
                                        <div className="left">
                                            <input value={obj.status} type="checkbox" name="" id="" defaultChecked={obj.status}
                                                onChange={(e) => {
                                                    setDjangoData(djangoData.filter((obj2) => {
                                                        if (obj2.id === obj.id) {
                                                            obj.status = e.target.checked;
                                                            updateData(obj.id, obj.status, obj.text)
                                                            // console.log(obj.status);
                                                        }
                                                        return obj;
                                                    })
                                                );
                                                }}
                                            />
                                            <p style={{textDecoration: obj.status && "line-through"}}> {obj.text} </p>
                                        </div>
                                        <div className="right">
                                            <i className="fas fa-times" onClick={(e) => {
                                                    e.preventDefault();
                                                    setDjangoData(djangoData.filter((obj2) => {
                                                        if (obj2.id === obj.id) {
                                                            deleteData(obj.id)
                                                            // console.log(obj2.id);
                                                            return false
                                                        }
                                                        return obj;
                                                    })
                                                    );
                                                }}>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return null
                        }
                    })
                }
            </div>
        </>
    )
}

export default TodoList
