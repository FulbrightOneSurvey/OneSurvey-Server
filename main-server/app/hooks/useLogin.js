import pb from '../components/pocketbase';
import { useState } from 'react';

export default function useLogin() {
    const [ isLoading, setLoading ] = useState(false); // loading state to wait for DB response
    const [ error, setError ] = useState(null); // error state to display error message

    async function login({email, password}) {
        setLoading(true); // trigger loading state
        try {
            // login with email and password
            const response = await pb.collection('users').authWithPassword(email, password);
        } catch (error) {
            alert(error); // display error message in browser
            setError(error); // get error message
        }
        setLoading(false);
    }
    
    return { login, isLoading, error };
}