import { useState } from "react"
import BtnAdd1 from './BtnAdd1';
function Compteur() {
    const [count, setCount] = useState(0)
    console.log(useState(12));
    // const [nomVariable, setNomVariable] = useState(valeur initial)
    //pour changer la valeur de ma nomVariable
    // j'utilise setNomVariable
    return (
        <div>
            <p>nombre de click : {count}</p>
            <BtnAdd1 setCount={(c)=>setCount(c)} count={count} />
        </div>
    )
}

export default Compteur;