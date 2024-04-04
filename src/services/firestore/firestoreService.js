import { shoes } from "@/signals/shoesSignals";
import { db } from "@/config/firebase";
import { collection,doc,getDoc,getDocs } from "firebase/firestore";

export const shoesCollectionRef = collection(db, "shoes")

export const getAllShoes = async () => {
    const querySnapshot = await getDocs(shoesCollectionRef);
    let shoesData = []
    querySnapshot.forEach((doc) => {
      shoesData.push({id: doc.id, ...doc.data()})
    })
    shoes.value = shoesData
    return shoesData
}

export const getDocById = async(id) =>{
    const docRef = doc(db, "shoes", id)
    const querySnapshot = await getDoc(docRef);
    if (querySnapshot.exists()) 
        return querySnapshot.data()
    else 
        throw new Error("Document not found");

}

export const getNameById = async(id) => {
    const docRef = doc(db, "shoes", id)
    const querySnapshot = await getDoc(docRef);
    if (querySnapshot.exists()) 
        return querySnapshot.data().title
    else 
        throw new Error("Document not found");
}

