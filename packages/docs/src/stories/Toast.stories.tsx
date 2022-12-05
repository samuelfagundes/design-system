import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@caesar-ui/react'

export default {
  title: 'Pop up/Toast',
  component: Toast,
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
