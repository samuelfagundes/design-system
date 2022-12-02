import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@caesar-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
