// async function to retrieve user data from DB
async function getUserData() {
    const response = await fetch('http://127.0.0.1:8090/api/collections/user/records?page=1%perPage=30')
    const data = await response.json();
    // return data inside the items array
    return data.items;
}

// actual main function
export default async function AccountPage() {
    const userData = await getUserData(); // name, email, datejoined, passwdhash
    return (
        <div>
            <h1>Account</h1>
            {/* // loop over userData and display it */}
            {userData.map((user) => (
                <div>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.datejoined}</h2>
                    <h2>{user.passwdhash}</h2>
                </div>
            ))}
        </div>
    )
}
