import { AuthInput } from "@/components/auth/AuthInput";
import { useState } from "react";

export default function Autenticacao() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    return (
        <div>
            <h1>Autenticação</h1>
            <AuthInput
                label='E-mail'
                valor={email}
                valorMudou={setEmail}
                obrigatorio
            />
            <AuthInput
                label='Senha'
                tipo="password"
                valor={senha}
                valorMudou={setSenha}
                obrigatorio
            />
        </div>
    )
}