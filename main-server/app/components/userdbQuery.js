import pb from './pocketbase';

export default function userdbQuery() {
    const isLoggedin = pb.authStore.isValid; // check if the user is logged in
    const userdb = pb.authStore.model; // get the user's data

    // const surveydb = pb.collection('survey').getFullList({ filter: { user: userdb.id } }); // get the user's survey data

    return { isLoggedin, userdb};
}