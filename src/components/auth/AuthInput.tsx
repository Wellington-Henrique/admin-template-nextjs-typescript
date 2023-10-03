import React from 'react'

interface AuthInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    naoRenderizarQuando?: boolean
    tipo?: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}

export function AuthInput(props: AuthInputProps) {
    

    return (
    !props.naoRenderizarQuando &&
    <div className='flex flex-col'>
        <label>{props.label}</label>
        <input 
            type={props.tipo ?? 'text'}
            value={props.valor}
            onChange={e => props?.valorMudou(e.target.value)}
            required={props.obrigatorio}
        />
    </div>
  )
}
