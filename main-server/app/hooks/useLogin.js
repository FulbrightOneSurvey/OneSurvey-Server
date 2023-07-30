import pb from '../components/pocketbase';
import { useState } from 'react';

export default function useLogin() {
    const [ isLoading, setLoading ] = useState(false); // loading state to wait for DB response
    const [ error, setError ] = useState(null); // error state to display error message

    async function login({email, password}) {
        setLoading(true);
        try {
            const response = await pb.collection('users').authWithPassword(email, password);
        } catch (error) {
            alert(error);
            setError(error);
        }
        setLoading(false);
    }
    
    return { login, isLoading, error };
}