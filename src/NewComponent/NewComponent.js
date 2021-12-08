import axios from "axios"
import { useEffect, useState} from "react"


export default function NewComponent(){
 const [drinks, setDrinks] = useState()
 const[error, setError] = useState()
 const[loading, setLoading] = useState(true)

 useEffect(()=>{
  NewCall("f")
 },[])
 
 const NewCall = async (name) =>{
  setLoading(true)
  try{
   const result = await axios({
     baseURL: "https://www.thecocktaildb.com/api/",
     url: "/json/v1/1/search.php",
     method: "GET",
     params:{
      f: name,
     },
   })
   const drinks = result.data.drinks
   setDrinks(drinks)
   console.log(result)
  }

  catch(e){
   setError(e)
   console.log("Il mio errore è", e)
  }
  finally{
   setLoading(false)
  }
 }

 return <div>
  {error && <p>Non ci sono drink</p>}
  {loading ? "Stiamo caricando" : "Abbiamo caricato il dato"}
  <h1>Drinks</h1>
  {
   drinks?.map((drink, index)=>{
    return <div key={index}>
     <p>{drink.strDrink}</p>
     <p>{drink.strCategory}</p>
    </div>

   })
  }
 </div>
}