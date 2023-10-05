import React from 'react'
import router from 'next/router'
import useAuth from '@/data/hook/useAuth'

import Image from 'next/image'
import loading from '../../../public/images/loading.gif'

export default function ForcarAutenticacao(props) {
    const { usuario, carregando } = useAuth();

    function renderizarConteudo() {
        return (
            <>{props.children}</>
        )

    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading}/>
            </div>
        )
    }

    if(!carregando && usuario?.email)
        return renderizarConteudo() 
    else if (carregando)
        return renderizarCarregando()
    else
        router.push('/autenticacao');
}
