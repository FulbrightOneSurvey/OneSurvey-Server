import pb from '../components/pocketbase';
import { useState } from 'react';

export default function useRegister() {
    const [ isLoadingR, setLoading ] = useState(false); // loading state to wait for DB response
    const [ errorR, setError ] = useState(null); // error state to display error message

    async function onRegister({name, email, password, passwordconfirm}) {
        let err = false;
        setLoading(true); // trigger loading state
        try {
            const data = {
                "username": name,
                "email": email,
                "emailVisibility": false,
                "password": password,
                "passwordConfirm": passwordconfirm,
                "name": name,
                "points": 0,
                "surveycompleted": "JSON"
            };
            // create user with email, password, and username
            const response = await pb.collection('users').create(data);
        } catch (error) {
            alert(error); // display error message in browser
            setError(error); // get error message
            err = true;
        }
        if (!err) {
            alert("Account created successfully!");
            window.location.reload();
        }
        setLoading(false);
    }
    
    return { onRegister, isLoadingR, errorR };
}