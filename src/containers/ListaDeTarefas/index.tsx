import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as emuns from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Tarefa 1',
    prioridade: emuns.Prioridade.IMPORTANTE,
    status: emuns.Status.PENDENTE,
    descricao: 'Descrição da tarefa 1'
  },
  {
    titulo: 'Tarefa 2',
    prioridade: emuns.Prioridade.URGENTE,
    status: emuns.Status.PENDENTE,
    descricao: 'Descrição da tarefa 2'
  },
  {
    titulo: 'Tarefa 3',
    prioridade: emuns.Prioridade.NORMAL,
    status: emuns.Status.CONCLUIDA,
    descricao: 'Descrição da tarefa 3'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
