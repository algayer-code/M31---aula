import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = ({ ativo = false }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>15</S.Contador>
    <S.Label>pendentes</S.Label>
  </S.Card>
)

export default FiltroCard
