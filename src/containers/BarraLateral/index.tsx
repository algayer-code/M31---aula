import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
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

export default BarraLateral
