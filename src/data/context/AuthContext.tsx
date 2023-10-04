
import Usuario from "@/model/Usuario"
import firebase from '../../firebase/config'
import router from 'next/router'
import { createContext, useState } from "react"

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}


export function AuthProvider(props) {
    const [ usuario, setUsuario ] = useState<Usuario>(null)
    
    async function loginGoogle() {
        console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        
        if (resp.user?.email) {
            const usuario = await usuarioNormalizado(resp.user);
            setUsuario(usuario);
            router.push('/')
        }
    }

    return(
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;