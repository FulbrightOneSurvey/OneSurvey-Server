import pb from '../components/pocketbase';

export default function useLogout() {
    function logout() {
        pb.authStore.clear(); // clear cookies, kinda

        // refresh the page since react doesn't know that the user is logged out until a rerender is triggered
        window.location.reload();
    }
    return logout;
}