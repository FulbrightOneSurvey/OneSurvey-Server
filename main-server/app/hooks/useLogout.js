import pb from '../components/pocketbase';

export default function useLogout() {
    function logout() {
        pb.authStore.clear();
        // refresh the page
        window.location.reload();
    }
    return logout;
}