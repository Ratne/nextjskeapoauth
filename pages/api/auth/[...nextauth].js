import NextAuth from "next-auth"
import infusionsoft from "../../../src/providers/infusionsoftV2";
import axios from "axios";


export default async function auth(req, res) {
    if (req.query.nextauth.includes("signin") && req.query.code && req.method === "GET") {
        const data = {
            code: req.query.code,
            redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/signin",
            client_id: process.env.INFUSIONSOFT_ID,
            client_secret: process.env.INFUSIONSOFT_SECRET,
            grant_type: "authorization_code"
        }

        axios.post("https://api.infusionsoft.com/token", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(
            (response) => {
                console.log(response.data);
            }
        )
    }
    return await NextAuth(req, res, {
        providers: [
            infusionsoft(),
        ]
    })
}
