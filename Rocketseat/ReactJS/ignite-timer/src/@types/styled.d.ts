// totalmente tipagem
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
// guadardando o que foi definito no default, não precisa decorar tudo e sim aber onde procurar o que precisa ser feito

declare module 'styled-components' {
  // pegado o que já tem no styled e adicionando mais
  export interface DefaultTheme extends ThemeType {}
  // para fique gravado e não possa utilizar outros coisas, no seu dia a dia dificilmente você vai precisar fazer
}
