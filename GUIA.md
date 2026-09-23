# Guia das escolhas do projeto

Este guia explica o porquê de cada decisão, pra você saber defender o código na apresentação. Leia com o código aberto do lado.

---

## 1. Por que separar `app/` e `screens/`?

- **`src/app/`** é a pasta de **rotas** do Expo Router. O nome do arquivo vira o endereço da tela: `home.tsx` vira `/home` e `details/[id].tsx` vira `/details/1`.
- **`src/screens/`** guarda o **conteúdo** das telas.

Os arquivos de rota só fazem `export default Home`. Assim a navegação fica de um lado e o layout de outro. Se um dia trocar a biblioteca de navegação, as telas não precisam mudar.

> O professor liberou IA pra navegação. Mesmo assim, é bom saber que usamos **Expo Router** com **Stack** (pilha): cada tela nova entra por cima e o "voltar" tira ela da pilha.

## 2. Navegação (resumo)

| Ação | Código | Por quê |
|---|---|---|
| Login → Home | `router.replace('/home')` | `replace` troca a tela, então o "voltar" não retorna ao login |
| Home → Agendar | `router.push('/schedule')` | `push` empilha a tela, e o "voltar" funciona |
| Home → Detalhes | `router.push({ pathname: '/details/[id]', params: { id } })` | passa o id da partida pela rota |
| Voltar (Header) | `router.back()` | tira a tela atual da pilha |

Em Detalhes, o id é lido com `useLocalSearchParams()`.

## 3. Por que cada componente tem `index.tsx` + `styles.ts`?

- `index.tsx` tem a **estrutura** (o que aparece na tela).
- `styles.ts` tem a **aparência** (`StyleSheet.create`).

Separar deixa o arquivo principal curto e fácil de ler. O `StyleSheet.create` também valida os estilos e é o padrão recomendado no React Native.

## 4. Por que um `theme.ts`?

Todas as cores e fontes do Figma ficam num só lugar. Nenhum componente usa `'#E51C44'` direto: todos usam `theme.colors.primary`.

- Se o design mudar uma cor, você muda em **um lugar só**.
- Os nomes (`secondary100`, `heading`, `highlight`…) são os mesmos do Figma.

## 5. Como decidi o que virar componente

Regra usada: **se aparece em mais de uma tela ou se repete numa lista, vira componente.**

| Componente | Onde aparece | Observação |
|---|---|---|
| `Background` | todas as telas | fundo em degradê (`LinearGradient`) |
| `ButtonIcon` | Login e Detalhes | botão com ícone do Discord |
| `Button` | Agendar | botão simples |
| `ButtonAdd` | Home | quadrado vermelho com "+" |
| `Profile` + `Avatar` | Home | Avatar também é usado no `Member` |
| `Category` | dentro do `CategorySelect` | um card de categoria |
| `CategorySelect` | Home e Agendar | lista horizontal de categorias |
| `ListHeader` | Home e Detalhes | "Partidas agendadas / Total 6" |
| `ListDivider` | Home e Detalhes | linha entre itens |
| `Appointment` | Home | item da lista de partidas |
| `GuildIcon` | Appointment e Agendar | ícone do servidor |
| `Header` | Detalhes e Agendar | título + voltar + ação opcional |
| `Member` | Detalhes | jogador com status |
| `GuildSelect` | Agendar | campo "servidor selecionado" |
| `SmallInput` / `TextArea` | Agendar | campos do formulário |

### Props que valem explicar
- **`Header`** recebe `action?: ReactNode`. Em Detalhes passamos o botão de compartilhar, e em Agendar não passamos nada. Quando não tem ação, um `View` vazio de 24px segura o espaço pra o título continuar centralizado.
- **`ListDivider`** tem `isCentered`. Na Home a linha fica mais perto do item de cima, e em Detalhes fica no meio.
- **`Category`** tem `hasCheckBox`. Em Agendar aparece o quadradinho, e na Home não.
- Os botões recebem `...rest`, então aceitam qualquer prop do `TouchableOpacity` (como `onPress`) sem precisar declarar uma por uma.

## 6. Estado da categoria (o ponto principal da tela Agendar)

```tsx
const [category, setCategory] = useState('');
<CategorySelect hasCheckBox categorySelected={category} setCategory={setCategory} />
```

- O **estado fica na tela**, e o `CategorySelect` só recebe o valor e a função. Isso se chama "levantar o estado" (*lifting state up*): o componente fica reutilizável, e cada tela decide o que fazer com a seleção.
- Cada `Category` recebe `checked={category.id === categorySelected}`.
- Visual do card **selecionado**: opacidade 1, gradiente mais escuro e checkbox vermelho.
- Visual do card **não selecionado**: opacidade 0.5 e checkbox vazio.
- Na **Home** o toque funciona como filtro: tocar de novo na mesma categoria desmarca (`current === id ? '' : id`).

## 7. Detalhes de estilização que podem perguntar

- **Borda em degradê** (Avatar, Category, ícone da partida): um `LinearGradient` maior por fora e o conteúdo um pouco menor por dentro. A "sobra" parece uma borda com gradiente, que o `borderColor` não consegue fazer.
- **Safe area**: `useSafeAreaInsets()` dá o tamanho da barra de status e da barra inferior do celular. Somamos isso nas margens pra nada ficar escondido atrás do notch.
- **Ícones SVG**: cada `.svg` do Figma virou um componente com `SvgXml` (`src/assets/icons`). Não precisa configurar nada extra no Metro e funciona no Expo Go. O `PlayerIcon` usa `currentColor`, então dá pra mudar a cor pela prop `color` (vermelho = Anfitrião, verde = Visitante).
- **Fontes**: Rajdhani (títulos) e Inter (textos) via `@expo-google-fonts`. O `_layout.tsx` segura a splash até elas carregarem, pra não aparecer a fonte padrão por um instante.
- **`KeyboardAvoidingView`** na tela Agendar: empurra o conteúdo pra cima quando o teclado abre.
- **`textAlignVertical: 'top'`** no TextArea: no Android o texto começaria no meio da caixa.
- **`FlatList`** nas listas em vez de `.map`: só renderiza o que está visível, o que é melhor pra listas grandes.

## 8. Dados

Tudo vem de `src/data/mock.ts`, com tipos TypeScript (`AppointmentData`, `MemberData`, `Guild`). Se um dia tiver API, só troca de onde vêm os dados, e os componentes continuam iguais.
