import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'inline',
  position: 'relative',
  maxWidth: '100%',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',
  borderRadius: '$sm',

  span: {
    color: '$gray100',
    fontFamily: '$inter',
    fontSize: '$sm',
  },

  '::after': {
    content: ' ',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '8px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent transparent',
  },
})
