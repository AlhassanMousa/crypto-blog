
import firebase from 'firebase/app';
import "firebase/auth"
  
export const register = async({email, password})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    return res.user;
}