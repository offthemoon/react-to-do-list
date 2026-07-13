import { useState } from 'react'


function App(){

  const [user_input, set_user_input] = useState('');

  const [to_do_list,set_to_do_list] = useState([]);


  function add_to_list(){

    if(user_input === '')
    {
      return; 
    }

    let object = {
      input : user_input,
      completed : false
    }
    

    set_to_do_list([...to_do_list,object]); //We are going to want to update the to do list. 
    set_user_input('') //reset it, make back empty. 
  }

  function toggle_status(index){ //we are going to want to be able to flip the status of the item for a user. 

    //Way we do this -> update list and redraw it.
    //So make a new list and redraw it.

    const new_list = to_do_list.map((current,i) => {

      if(i === index)
      {
        return {...current, completed : !current['completed']}
      }

      return current;
    })

    set_to_do_list(new_list);

  }

  




  return(
    <>
    <h2> To Do List </h2>

    <div>
      <label> Enter Item: </label>
    <input value={user_input} onChange={ event => set_user_input(event.target.value)} />  
    </div>

    <div>
    <button onClick = {add_to_list}> Add To List </button>
    </div>

    <div>

      <ul>
           {to_do_list.map((current,index) => <li> <span onClick= {() => toggle_status(index)}> {current['input']}  Status - {current['completed'] ? '✅' : '❌'} </span> </li> )} 
      </ul>

    </div>




  
    </>
  )

}

export default App;
