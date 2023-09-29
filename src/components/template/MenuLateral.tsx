import React from 'react'
import MenuItem from './MenuItem'
import Logo from './Logo'

import { IconeCasa, IconeAjuste, IconeSino } from '../icons'

export default function MenuLateral() {
  return (
    <aside>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}> {/* via-purple-800 Define uma cor intermediária para o gradient */}
        <Logo/>
      </div>

      <ul>
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
    </aside>
  )
}
