import React from 'react'
import MenuItem from './MenuItem'
import { IconeCasa, IconeAjuste, IconeSino } from '../icons'

export default function MenuLateral() {
  return (
    <aside>
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
