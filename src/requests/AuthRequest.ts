import { api } from "../services/api";

export interface LoginProps {
    email: string;
    password: string;
}

export interface UserPros {
    id: string;
    name: string;
    email: string;
}

export interface LoginResponse {
    success: boolean;
    token: string;
    user: UserPros
}
export async function login({ email, password }: LoginProps): Promise<LoginResponse> {
    const { data } = await api.post('/login', { email, password });

    return data;
}
