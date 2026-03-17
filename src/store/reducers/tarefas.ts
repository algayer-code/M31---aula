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
      titulo: 'Comprar Carne',
      descricao: 'Ir na padaria e comprar pão',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Comprar Arroz',
      descricao: 'Ir na padaria e comprar pão',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Vender Comida',
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
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      state.itens = state.itens.map((tarefa) => {
        if (tarefa.id === action.payload.id) {
          return action.payload
        }
        return tarefa
      })
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
