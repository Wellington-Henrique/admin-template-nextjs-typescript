import React from 'react'
import { IconeSol } from '../icons'

interface BotaoAlternarTemaProps {
    tema?: string
    alternarTema?: () => void
}
export function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return (
    props.tema === 'dark' ?
    <div onClick={props.alternarTema} className={`
    
    `}>
        <div className={`
    
        `}>
            {IconeSol}
        </div>
        <div className={`
    
        `}>
            Claro
        </div>
    </div>
    : <>
    </>
  )
}
