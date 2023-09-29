import React from 'react'
import MenuItem from './MenuItem'
import Logo from './Logo'

import { IconeCasa, IconeAjuste, IconeSino, IconeSair } from '../icons'

export default function MenuLateral() {
  return (
    <aside className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}> {/* via-purple-800 Define uma cor intermediária para o gradient */}
        <Logo/>
      </div>

      <ul className='
        flex-grow'>
        <MenuItem
          url="/"
          texto="Início"
          icone={IconeCasa}
        />

        <MenuItem
          url="/ajustes"
          texto="Ajustes"
          icone={IconeAjuste}
        />

        <MenuItem
          url="/notificacoes"
          texto="Notificações"
          icone={IconeSino}
        />
      </ul>

      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeSair}
          className={`
          text-red-600 dark:text-red-400
            hover:bg-red-400 hover:text-white 
            dark:hover:text-white
          `}
          onClick={() => console.log("logout")}
        />
      </ul>
    </aside>
  )
}
