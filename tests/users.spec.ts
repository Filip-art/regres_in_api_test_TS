import { test, expect } from '@playwright/test'
import { ApiClient } from '../pages/ApiClient.ts'


test.describe("Testing regres API", () => {


let apiClient: ApiClient
test.beforeEach("setup apiClient from class", async ({ request }) => {
    apiClient = new ApiClient(request)
})

test("test GET users", async () => {
    const response = await apiClient.getUsers()
    expect(response.status()).toBe(200)
    const data = await response.json()
    expect(Array.isArray(data.data)).toBeTruthy()
    expect(data.data.length).toBeGreaterThan(0)
})

test("test GET user by ID", async () => {
    const idToCheck: number = 2
    const response = await apiClient.getUserById(idToCheck)
    expect(response.status()).toBe(200)
    const data = await response.json()
    expect(data.data.id).toEqual(idToCheck)
})

test("test create user", async () => {
    let name: string = "Jorgen"
    let job: string = "Tamagotchi"
    const response = await apiClient.createUser(name, job)
    const data = await response.json()
    expect(response.status()).toBe(201)
    expect(data.name).toEqual(name)
    expect(data.job).toEqual(job)
})

test("test updateUser", async() => {
    const response = await apiClient.updateUser(2, "Malkovič", "Čingischán")
    const data = await response.json()
    expect(response.status()).toBe(200)
    expect(data.name).toEqual("Malkovič")
    expect(data.job).toEqual("Čingischán")
})

test("test delete user", async () => {
    const response = await apiClient.deleteUser(2)
    expect(response.status()).toBe(204)
})

})