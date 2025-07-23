import { useCallback, useEffect, useState } from "react";
import useInput from "../../hooks/useInput";

export default function UsersSection() {
    const input = useInput('');
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    }, [])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <section className="py-12 bg-white">
            <h2 className="text-2xl font-bold mb-4">Users List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p className="mb-5">
                        <input type="text" {...input} className="w-full border border-gray-400 py-2 px-4 rounded-xl" placeholder="Enter user name" />
                    </p>
                    <ul className="space-y-4">
                        {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => (
                            <li key={user.id} className="border p-4 rounded-lg">
                                <h3 className="text-xl font-semibold">{user.name}</h3>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-gray-600">{user.phone}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}