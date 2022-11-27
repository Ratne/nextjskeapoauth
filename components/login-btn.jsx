import { signIn } from "next-auth/react"
export default function Component() {

    return (
        <>
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}
