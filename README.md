# Equipe +Autonomia
## Aplicativo smartwatch que auxilia pessoa com doenças crônicas em tratamento com a prática de polifarmácia.

#### Integrantes:
539849 - ANA BEATRIZ CLAUDIO MACHADO - Product owner

497221 - ARIADNA RODRIGUES CAVALCANTE - Dev

542278 - CAROLAINE LIMA BEZERRA - Dev

421599 - GABRIEL LEITAO DE ANDRADE - Scrum master

---
#### Passo a passo ao iniciar sua tarefa
- antes de trabalhar no código, você precisa fazer um `git pull` para ter acesso a todas as alterações que os outros fizeram no código
- ao iniciar sua tarefa, crie uma branch. `git checkout -b <nome da branch>`, com esse comando você entra e cria uma branch ao mesmo tempo, confira o guia de nomes antes de fazer isso
- durante a atividade, pós a criação de cada elemento na tela, façam um commit explicando `git commit -m"<o que você fez>"`, siga a tabela de boas práticas para definir o tipo de cada commit
- após finalizar sua tarefa, faça um faça um `git push origin <nome da branch>`, em seguinda crie um pull request no GitHub explicando na descrição tudo o que foi feito
- faça as correções solicitadas


#### Tutoriais úteis:
https://www.youtube.com/watch?v=lq3nawUnpEI

https://www.youtube.com/watch?v=AQ5v4ZCG1h0 [MUITO IMPORTANTE]

[vídeos sobre o que faremos na próxima reunião e antes de enviar o trabalho]

https://www.youtube.com/watch?v=AQ5v4ZCG1h0 [nao façam git pull origin main como ele mostra, assistam só pra entender a dinamica]

https://www.youtube.com/watch?v=RNbKd8cD0LI [isso aqui é o que de fato estamos fazendo] [MUITO IMPORTANTE]

#### Boas práticas:
- o ideal é que cada componente seja feito em uma página diferente, exemplo: o formulario de login é criado em uma página separada da página de login em si, a página de css é separada das páginas principais [https://pt-br.react.dev/learn/importing-and-exporting-componentst]

- após a criação de cada elemento na tela, façam um commit explicando, exemplo: "feat: criacao do campo de nome", "fix: correcao na nomeclatura do index", mensagens rápidas e objetivas e seguindo a seguinte lógica:
1. "feat:" commit sobre a criação de algo novo na tela
2. "fix:" correção de alguma coisa no código/branch
3. "refactor:" remoção ou alterações no código
4. outras nomeclaturas possíveis acesse: https://gist.github.com/ya-kimura/7a50a25f98f3627345e84e7a0cb110b5

- após finalizar seu trabalho `git push origin <nome da branch>`

- criação de novas tags/releases e aprovação de pull requests serão feitas em reunião com todos juntos

#### Guia de nomeclaturas:
- nomes de branches: `0.1.0_<seunome>_<feature que esta sendo criada>` | exemplo1: 0.1.0_gabriel_itemdepet | exemplo2: 0.1.0_cainha_login

- nomes de arquivos: `<nome do componente>_<nome da feature>.js` | exemplo1: formulario_login.js | exemplo2: consulta_home.js | exemplo3: style_cadastro.css

#### Principais comandos:
`git pull`

`git checkout -b <nome da branch> (com esse comando você entra e cria uma branch ao mesmo tempo, confira o guia de nomes antes de fazer isso)`

`git commit -m "o que voce fez"`

`git push origin <nome da branch>`


#### Guia de versionamento
- versão Maior(MAJOR): quando fizer mudanças incompatíveis na API
- versão Menor(MINOR): quando adicionar funcionalidades mantendo compatibilidade
- versão de Correção(PATCH): quando corrigir falhas mantendo compatibilidade
