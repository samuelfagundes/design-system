import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '$90',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$3 $5',
  borderRadius: '$sm',
  fontFamily: '$default',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',

  span: {
    fontWeight: '$bold',
    fontSize: '$xl',
    color: '$white',
    lineHeight: '160%',
  },

  p: {
    fontSize: '$sm',
    color: '$gray200',
    lineHeight: 0,
  },

  button: {
    border: 'none',
    backgroundColor: 'inherit',
    height: '$5',

    svg: {
      color: '$gray200',
      marginTop: '$1',
    },
  },
})
