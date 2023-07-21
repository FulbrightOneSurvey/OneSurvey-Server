import Link from "next/link";

export default function Home() {
    return (
        // Navigation site to login page, contains a link ref to /login
        <div>
            <h1>Nav<br></br></h1>
            {/* link to login page */}
            <a href="/login">Login</a>
        </div>
    )
}