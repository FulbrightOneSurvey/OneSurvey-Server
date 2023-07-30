import pb from '../components/pocketbase';

export default function dbQuery() {
    const isLoggedin = pb.authStore.isValid; // check if the user is logged in
    const db = pb.authStore.model; // get the user's data
    return { isLoggedin, db };
}