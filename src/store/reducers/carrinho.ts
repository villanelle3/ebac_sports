import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  item: Produto[]
}
const initialState: CarrinhoState = {
  item: []
}
const carrinhoSlie = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.item.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.item.push(produto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlie.actions
export default carrinhoSlie.reducer
