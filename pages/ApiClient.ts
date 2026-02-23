import { type APIRequestContext, APIResponse  } from '@playwright/test';

export class ApiClient {
    constructor(private request: APIRequestContext) {

    }

    async getUsers(): Promise<APIResponse> {
        const response = await this.request.get("/api/users")
        return response
    }

    async getUserById(id: number): Promise<APIResponse> {
        const response = await this.request.get(`/api/users/${id}`)
        return response
    }

    async createUser(name: string, job: string): Promise<APIResponse> {
            const response = await this.request.post("/api/users", { 
                    data: { name, job } 
                })
                return response
            }
    
    async updateUser(id: number, name: string, job: string): Promise<APIResponse> {
        const response = await this.request.put(`/api/users/${id}`, {
            data: { name, job}
        })
        return response
    }

    async deleteUser(id: number): Promise<APIResponse> {
        const response = await this.request.delete(`/api/users/${id}`)
        return response
    }


}