import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar os conceitos básicos de TypeScript',
      1
    ),
    new Tarefa(
      'Fazer compras',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Comprar produtos de limpeza e alimentos',
      2
    ),
    new Tarefa(
      'Praticar exercícios',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Fazer uma caminhada de 30 minutos',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
