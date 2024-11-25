import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import Alltask from '../Others/Alltask'


const AdminDash = (props) => {


  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <Alltask/>
    </div>
  )
}

export default AdminDash
