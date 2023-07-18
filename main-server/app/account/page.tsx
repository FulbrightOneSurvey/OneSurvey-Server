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
                <div key={user._id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.datejoined}</p>
                    <p>{user.passwdhash}</p>
                </div>
            ))}
        </div>
    )
}
