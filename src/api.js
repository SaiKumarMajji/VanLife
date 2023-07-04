import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBAwQlH_sslJKuuAkiUQtqdRmxJAnu_rj4",
  authDomain: "vanlife-1daa3.firebaseapp.com",
  projectId: "vanlife-1daa3",
  storageBucket: "vanlife-1daa3.appspot.com",
  messagingSenderId: "367967556480",
  appId: "1:367967556480:web:dc24ffb5b62de7d925a765"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "456"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw new Error (
            JSON.stringify({
                message: data.message,
                statusText: res.statusText,
                status: res.status
            })
        );
    }

    return data
}