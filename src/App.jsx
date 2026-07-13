import { useState } from 'react'


function App(){

  const [user_input, set_user_input] = useState([]);

  const [to_do_list,set_to_do_list] = useState([]);


  function add_to_list(){

    if(user_input === '')
    {
      return; 
    }


    
    set_user_input('') //reset it, make back empty. 



  }




  return(
    <>
    <h2> To Do List </h2>

    <div>
      <label> Enter Item: </label>
    <input value={user_input} onChange={() => set_user_input(event.target.value())} />  
    </div>

    <button value = {}> Add To List </button>



  
    </>
  )

}

export default App;
