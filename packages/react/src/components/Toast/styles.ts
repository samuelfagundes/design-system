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
    // display: 'flex',
    // width: '100%',
    // justifyContent: 'space-between',
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

  svg: {
    color: '$gray200',
    marginTop: '$1',
  },
})
