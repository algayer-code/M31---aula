import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Tarefa 1',
    prioridade: 'Alta',
    status: 'Pendente',
    descricao: 'Descrição da tarefa 1'
  },
  {
    titulo: 'Tarefa 2',
    prioridade: 'Média',
    status: 'Em andamento',
    descricao: 'Descrição da tarefa 2'
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
