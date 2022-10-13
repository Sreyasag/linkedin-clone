import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const dispatch = useDispatch()

    const register = ()=>{
        if (!name) {
            return alert('Please enter a full name')
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
        })
        .then((userAuth)=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:name,
                photoUrl:profilePic
            }))
        })
        .catch((err)=> alert(err))
    }

    const loginToApp = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl:userAuth.user.photoUrl
            }))
        })
        .catch((err)=> alert(err))

    }

    return (
        <div className='login'>
            <img 
                src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" 
                alt="linkedin" 
            />
                        <form>
                <input 
                    type="email" 
                    placeholder='Email' 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
               
                <button 
                    type='submit' 
                    onClick={loginToApp}
                >Sign In</button>
                
            </form>
            <h1 className='reg'>Register</h1>
            <form>
                <input 
                    type="text" 
                    placeholder='Full name' 
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                />
                <input 
                    type="text" 
                    placeholder='Profile picture url (optional)'
                    value={profilePic}
                    onChange={(e)=>{setProfilePic(e.target.value)}} 
                />
                <input 
                    type="email" 
                    placeholder='Email' 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                
                <button 
                    type='submit' 
                    onClick={register}
                >Register</button>
            
            </form>

            {/* <p>Not a member{" "}
                <span 
                    className="login__register"
                    onClick={register}
                >Register now</span>
            </p> */}
        </div>
    )
}

export default Login