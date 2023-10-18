import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPasswprd] = useState("");
    const { setUsername: setLoginUsername, setId } = useContext(UserContext);

    const registerHandler = async (ev) => {
        ev.preventDefault();
        const { data } = await axios.post("/register", { username, password });
        setLoginUsername(username);
        setId(data.id);
    };

    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={registerHandler}>
                <input
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)}
                    type="text"
                    placeholder="username"
                    className="block w-full  rounded-sm p-2 mb-2 border "
                />
                <input
                    value={password}
                    onChange={(ev) => setPasswprd(ev.target.value)}
                    autoComplete="on"
                    type="password"
                    placeholder="password"
                    className="block w-full rounded-sm p-2 mb-2 border "
                />
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    Register
                </button>
            </form>
        </div>
    );
}
