import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ToastContainer } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast() {
  return (
    <ToastContainer>
      <div>
        <span>Agendamento realizado</span>
        <p>Quarta-feira, 23 de Outubro às 16h</p>
      </div>
      <X size={20} />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
