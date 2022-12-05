import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@caesar-ui/react'

export default {
  title: 'Pop up/Tooltip',
  component: Tooltip,
  args: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
