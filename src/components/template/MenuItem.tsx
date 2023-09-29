import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  texto: string
  icone: any
  className?: string
  url?: string
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <div className={`
        flex flex-col justify-center items-center
        h-20 w-20 
        dark:text-gray-200
        ${props.className}
      `}>
        {props.icone}
        <span className={`
          text-xs font-light
        `}>{props.texto}</span>
      </div>
    )
  }
  return (
    <li className={`
    hover:bg-gray-100 cursor-pointer
      dark:hover:bg-gray-800
    `}
    onClick={props.onClick}
    >
      {props.url ?
      <Link href={props.url}>
        {renderizarLink()}
      </Link>: renderizarLink()}
    </li>
  )
}
