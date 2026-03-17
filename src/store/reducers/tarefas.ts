import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Comprar pão',
      descricao: 'Ir na padaria e comprar pão',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Comprar pão',
      descricao: 'Ir na padaria e comprar pão',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Comprar pão',
      descricao: 'Ir na padaria e comprar pão',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
