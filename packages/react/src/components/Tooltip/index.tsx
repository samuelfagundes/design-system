import { ComponentProps } from 'react'
import { TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function Tooltip() {
  return (
    <TooltipContainer>
      <span>21 de Outubro - Indisponível</span>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
