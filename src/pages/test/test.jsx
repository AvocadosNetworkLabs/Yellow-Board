import React, {useState} from 'react';

const test = () => {

    const [userData, setuserData] = useState(null);
    
    const [message, setMessage] = useState('');

    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null);


    const sendData = async () =>{
        const response = await fetch('/api/signin', {
            method: 'POST',
            body: JSON.stringify({username: user, psw: pass}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        if(data.status === '200'){
            setuserData(data);
            setMessage(data.message);
        }else if( data,status === '300'){
            setMessage(data.message);
        }else{
            setMessage(data.message);
        }
        

    }

    const SetValue = (e) => {
        e.target.name === 'username'? setUser(e.target.value): e.target.name === 'psw'? setPass(e.target.value): null;
    }

    return (
        <div>
            <form>
                {message}
                <input name='username' id='username' onChange={(e) => SetValue(e)} pattern="[+-]?\d+(?:[.,]\d+)?" placeholder='username'/>
                <input name='psw' onChange={(e) => SetValue(e)} pattern="[+-]?\d+(?:[.,]\d+)?" id='pws' placeholder='password'/>
                <button type='button' onClick={() => sendData()}>send</button>
            </form>
        </div>
    )
}

export default test
