import styles from "./page.module.css";
// import Users from '@/components/Users';
import Image from "next/image";
async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function IndexPage(){
  const users = await fetchUsers();
  return(
    <div>
      <div  className='backgroundPatitas'>

      </div>
      <div className="contentPerson d-flex align-items-center justify-content-center w-100">
        <div className="person"/>
      </div>
      <div className="card pt-5">
        <div className="card-body">
          <h5 className="card-title">M.V.Z Diana Granada</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      {/* <Users users={users}/> */}
    </div>
  )
}
export default IndexPage