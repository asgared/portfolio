import SocialMediaLinks from "@/components/SocialMediaLinks";
async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function IndexPage(){
  const description = "Hola soy Diana y soy una médico veterinaria apasionada por el cuidado de los animales. Con dedicación y experiencia, estoy aquí para brindarles la mejor atención médica y cariño. Siempre lista para ayudarte a mantener a tu mascota sana y feliz.";
  const users = await fetchUsers();
  return(
    <div>
      <div  className='backgroundPatitas'>
        <div className="contentPerson d-flex align-items-center justify-content-center w-100">
          <div className="person"/>
        </div>
      </div>
      <div className="container">
        <div className="card mt-5 mx-2">
          <div className="card-body">
            <h3 className="card-title">Diana Granada</h3>
            <h6 className="card-title">M.V.Z</h6>
            <p className="card-text">{description}</p>
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
export default IndexPage