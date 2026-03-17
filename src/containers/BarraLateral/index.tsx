import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={15} />
          <FiltroCard legenda="concluídas" contador={10} />
          <FiltroCard legenda="urgentes" contador={5} />
          <FiltroCard legenda="importantes" contador={30} />
          <FiltroCard legenda="normal" contador={8} />
          <FiltroCard legenda="todos" contador={12} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
