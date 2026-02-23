import { test as setup, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const authFile = path.join(__dirname, 'auth.json')

setup("authenticate", async ({ request }) => {
    const response = await request.post("/api/login", {
        data: {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    })
    
    expect(response.status()).toBe(200)

    const data = await response.json()
    const token = data.token
    
    const storageState = {
        cookies: [
            {
                name: "token",
                value: token,
                domain: "reqres.in",
                path: "/",
                expires: -1,
                httpOnly: false,
                secure: false,
                sameSite: "Lax"
            }
        ],
        origins: []
    }

    fs.writeFileSync(authFile, JSON.stringify(storageState))

})