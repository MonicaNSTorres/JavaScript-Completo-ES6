
 // ============================================
 // EXERCÍCIOS DE LÓGICA - JAVASCRIPT ES6
 // Origamid - Até Number e Math
 // ============================================


 // EXERCÍCIO 01 - CONTROLE FINANCEIRO
 // Dificuldade: Fácil
 //
 // Utilizando forEach no array abaixo:
 // 1. Some todos os valores de taxa.
 // 2. Some todos os valores de recebimento.
 // 3. Calcule o lucro líquido (recebimentos - taxas).
 // 4. Descubra quantas transações possuem taxa maior que R$ 10.
 // 5. Exiba os resultados no console.

 const transacoes = [
   { cliente: 'Ana', taxa: 12.50, recebimento: 250 },
   { cliente: 'Carlos', taxa: 8.90, recebimento: 180 },
   { cliente: 'Mariana', taxa: 15.00, recebimento: 320 },
   { cliente: 'Pedro', taxa: 5.50, recebimento: 100 },
   { cliente: 'Julia', taxa: 20.00, recebimento: 450 },
 ];


 // EXERCÍCIO 02 - ANÁLISE DE NOTAS
 // Dificuldade: Fácil
 //
 // 1. Calcule a média das notas utilizando forEach.
 // 2. Descubra a maior nota sem utilizar Math.max().
 // 3. Descubra a menor nota sem utilizar Math.min().
 // 4. Conte quantos alunos tiveram nota >= 7.
 // 5. Exiba "Turma aprovada" se a média for >= 7.
 //    Caso contrário, exiba "Turma reprovada".

 const notas = [8.5, 6.0, 9.2, 4.5, 7.8, 10, 5.5];


 // EXERCÍCIO 03 - FORMATANDO NOMES
 // Dificuldade: Fácil
 //
 // 1. Crie uma função que receba um nome completo.
 // 2. Remova espaços desnecessários no início e no fim.
 // 3. Transforme o nome inteiro em letras maiúsculas.
 // 4. Retorne a quantidade de caracteres, sem contar espaços.
 // 5. Descubra se o nome contém "SILVA".
 //
 // Teste a função com os nomes abaixo.

 const nomes = [
   '  maria silva  ',
   'João Pedro',
   '  ANA CAROLINA',
   'Carlos da Silva '
 ];


 // EXERCÍCIO 04 - DESCONTOS DE PRODUTOS
 // Dificuldade: Fácil
 //
 // 1. Percorra os produtos com forEach.
 // 2. Aplique 15% de desconto nos produtos acima de R$ 100.
 // 3. Os demais produtos devem manter o preço original.
 // 4. Arredonde os valores para 2 casas decimais.
 // 5. Exiba o nome e o preço final de cada produto.
 // 6. Calcule quanto seria economizado comprando todos.

 const produtos = [
   { nome: 'Mouse', preco: 80 },
   { nome: 'Teclado', preco: 150 },
   { nome: 'Monitor', preco: 900 },
   { nome: 'Mousepad', preco: 35 },
   { nome: 'Headset', preco: 220 }
 ];


 // EXERCÍCIO 05 - NÚMEROS E MATH
 // Dificuldade: Fácil
 //
 // 1. Percorra os números abaixo.
 // 2. Identifique quais são pares e ímpares.
 // 3. Calcule a raiz quadrada de cada número.
 // 4. Arredonde cada raiz para o inteiro mais próximo.
 // 5. Descubra o maior e o menor número utilizando Math.
 // 6. Calcule a média dos números.

 const numeros = [16, 25, 8, 49, 12, 81, 7, 100];


 // EXERCÍCIO 06 - ANÁLISE DE FUNCIONÁRIOS
 // Dificuldade: Médio
 //
 // 1. Calcule o total gasto com salários.
 // 2. Calcule a média salarial.
 // 3. Descubra qual funcionário recebe o maior salário.
 // 4. Conte quantos funcionários são do setor de TI.
 // 5. Crie uma função que receba o nome de um setor
 //    e retorne o total de salários daquele setor.
 // 6. Exiba os funcionários que recebem acima da média.

 const funcionarios = [
   { nome: 'Lucas', setor: 'TI', salario: 4500 },
   { nome: 'Marina', setor: 'RH', salario: 3200 },
   { nome: 'Pedro', setor: 'TI', salario: 5200 },
   { nome: 'Ana', setor: 'Financeiro', salario: 4100 },
   { nome: 'Carlos', setor: 'TI', salario: 3800 },
   { nome: 'Julia', setor: 'RH', salario: 3500 }
 ];


 // EXERCÍCIO 07 - VALIDAÇÃO DE SENHAS
 // Dificuldade: Médio
 //
 // Crie uma função validarSenha(senha).
 //
 // Regras:
 // 1. Deve possuir no mínimo 8 caracteres.
 // 2. Deve conter pelo menos um número.
 // 3. Não pode conter espaços.
 // 4. Deve possuir pelo menos uma letra maiúscula.
 //
 // Retorne true se a senha for válida.
 // Retorne false caso contrário.
 //
 // Desafio: exiba o motivo da senha ser inválida.
 //
 // Dica: utilize métodos de String, loops e condições.

 const senhas = [
   'JavaScript123',
   'javascript',
   'Senha 123',
   'ABC123',
   'Origamid2026',
   'TesteSenha'
 ];


 // EXERCÍCIO 08 - SIMULADOR DE CAIXA ELETRÔNICO
 // Dificuldade: Médio
 //
 // Crie uma função sacar(valor).
 //
 // O caixa possui notas de R$ 100, R$ 50, R$ 20 e R$ 10.
 //
 // 1. Receba o valor solicitado.
 // 2. Verifique se o valor é positivo.
 // 3. Verifique se é múltiplo de 10.
 // 4. Calcule a menor quantidade possível de notas.
 // 5. Exiba quantas notas de cada valor serão entregues.
 //
 // Exemplo:
 // sacar(280)
 // 2 notas de R$ 100
 // 1 nota de R$ 50
 // 1 nota de R$ 20
 // 1 nota de R$ 10
 //
 // Dica: Math.floor() e operador %.

 const valoresSaque = [280, 150, 375, 90, 0, -50];


 // EXERCÍCIO 09 - CONTROLE DE ESTOQUE
 // Dificuldade: Médio
 //
 // 1. Calcule o valor total do estoque.
 //    (preço * quantidade)
 // 2. Liste produtos com quantidade inferior a 5.
 // 3. Descubra o produto com maior valor em estoque.
 // 4. Crie uma função venderProduto(nome, quantidade).
 // 5. Verifique se existe estoque suficiente.
 // 6. Se existir, atualize a quantidade do produto.
 // 7. Se não existir, exiba "Estoque insuficiente".
 //
 // Desafio: impeça vendas com quantidade <= 0.

 const estoque = [
   { nome: 'Notebook', preco: 3500, quantidade: 4 },
   { nome: 'Mouse', preco: 80, quantidade: 20 },
   { nome: 'Monitor', preco: 900, quantidade: 3 },
   { nome: 'Teclado', preco: 150, quantidade: 12 },
   { nome: 'Webcam', preco: 250, quantidade: 2 }
 ];


 // EXERCÍCIO 10 - ANÁLISE DE VENDAS
 // Dificuldade: Médio
 //
 // 1. Calcule o faturamento total.
 // 2. Descubra o vendedor que mais faturou.
 // 3. Calcule o ticket médio por venda.
 // 4. Conte quantas vendas foram superiores a R$ 500.
 // 5. Crie uma função que receba o nome de um vendedor
 //    e retorne o faturamento total dele.
 // 6. Calcule uma comissão de 5% sobre cada venda.
 //
 // Desafio: descubra o mês com maior faturamento.

 const vendas = [
   { vendedor: 'Ana', valor: 450, mes: 'Janeiro' },
   { vendedor: 'Pedro', valor: 1200, mes: 'Janeiro' },
   { vendedor: 'Ana', valor: 800, mes: 'Fevereiro' },
   { vendedor: 'Carlos', valor: 300, mes: 'Fevereiro' },
   { vendedor: 'Pedro', valor: 950, mes: 'Março' },
   { vendedor: 'Ana', valor: 1500, mes: 'Março' },
   { vendedor: 'Carlos', valor: 700, mes: 'Março' }
 ];


 // EXERCÍCIO 11 - IDENTIFICANDO NÚMEROS PRIMOS
 // Dificuldade: Médio
 //
 // Crie uma função numeroPrimo(numero).
 //
 // 1. Receba um número inteiro.
 // 2. Verifique se ele é primo.
 // 3. Retorne true ou false.
 // 4. Percorra o array abaixo.
 // 5. Exiba apenas os números primos.
 // 6. Conte quantos números primos existem.
 //
 // Lembrete: um número primo é maior que 1
 // e possui exatamente dois divisores positivos.
 //
 // Desafio: utilize Math.sqrt() para otimizar
 // a quantidade de verificações.

 const listaNumeros = [
   2, 3, 4, 5, 9, 11, 15, 17, 20, 23, 29, 30
 ];


 // EXERCÍCIO 12 - SISTEMA BANCÁRIO
 // Dificuldade: Difícil
 //
 // Crie as funções:
 // depositar(valor)
 // sacarConta(valor)
 // consultarSaldo()
 // consultarExtrato()
 //
 // Regras:
 // 1. O saldo inicial é R$ 1500.
 // 2. Depósitos devem ser maiores que zero.
 // 3. Saques não podem ultrapassar o saldo.
 // 4. Cada operação deve ser registrada no extrato.
 // 5. O extrato deve armazenar tipo e valor.
 // 6. Exiba o saldo atualizado após cada operação.
 // 7. Calcule o total depositado e sacado.
 //
 // Desafio: permita no máximo 3 saques.
 //
 // Utilize objetos, arrays, funções e condicionais.

 const contaBancaria = {
   titular: 'Maria',
   saldo: 1500,
   extrato: []
 };


 // EXERCÍCIO 13 - SISTEMA DE PEDIDOS
 // Dificuldade: Difícil
 //
 // Crie uma função calcularPedido(pedido).
 //
 // Regras:
 // 1. Calcule o subtotal de todos os itens.
 // 2. Aplique 10% de desconto se subtotal > R$ 300.
 // 3. Frete grátis para subtotal >= R$ 200.
 // 4. Caso contrário, o frete custa R$ 25.
 // 5. Calcule o valor final do pedido.
 // 6. Exiba um resumo com cada item e seu subtotal.
 // 7. Exiba desconto, frete e total final.
 //
 // Desafio: crie uma função que calcule
 // o valor total de vários pedidos.

 const pedido = {
   cliente: 'João',
   itens: [
     { produto: 'Mouse', preco: 80, quantidade: 2 },
     { produto: 'Teclado', preco: 150, quantidade: 1 },
     { produto: 'Mousepad', preco: 35, quantidade: 2 }
   ]
 };


 // EXERCÍCIO 14 - ANÁLISE DE ACESSOS
 // Dificuldade: Difícil
 //
 // Imagine que os dados abaixo vieram de uma API
 // de auditoria de acessos de um sistema.
 //
 // 1. Calcule o total de acessos registrados.
 // 2. Descubra qual usuário realizou mais acessos.
 // 3. Descubra qual tela foi mais acessada.
 // 4. Conte quantos acessos ocorreram pelo método POST.
 // 5. Crie uma função buscarAcessos(usuario).
 // 6. Retorne todos os acessos do usuário informado.
 // 7. Liste os usuários sem repetição.
 //
 // Desafio: crie um resumo agrupado por usuário,
 // mostrando a quantidade de acessos de cada um.

 const acessos = [
   { usuario: 'ana', tela: 'Home', metodo: 'GET' },
   { usuario: 'pedro', tela: 'Financeiro', metodo: 'GET' },
   { usuario: 'ana', tela: 'Cadastro', metodo: 'POST' },
   { usuario: 'carlos', tela: 'Home', metodo: 'GET' },
   { usuario: 'ana', tela: 'Home', metodo: 'GET' },
   { usuario: 'pedro', tela: 'Cadastro', metodo: 'POST' },
   { usuario: 'carlos', tela: 'Financeiro', metodo: 'GET' },
   { usuario: 'ana', tela: 'Financeiro', metodo: 'GET' },
   { usuario: 'pedro', tela: 'Home', metodo: 'GET' }
 ];


 // EXERCÍCIO 15 - DESAFIO FINAL: CARRINHO DE COMPRAS
 // Dificuldade: Difícil
 //
 // Desenvolva um pequeno sistema de carrinho.
 //
 // Crie as funções:
 // adicionarProduto(id, quantidade)
 // removerProduto(id)
 // atualizarQuantidade(id, quantidade)
 // calcularTotal()
 // listarCarrinho()
 //
 // Regras:
 // 1. Um produto não pode ser adicionado com
 //    quantidade menor ou igual a zero.
 // 2. Não permita produtos duplicados no carrinho.
 // 3. Se o produto já existir, aumente sua quantidade.
 // 4. Ao remover, exclua o produto do carrinho.
 // 5. Calcule o subtotal de cada item.
 // 6. Calcule o valor total do carrinho.
 // 7. Aplique 5% de desconto se total > R$ 500.
 // 8. Exiba os preços formatados com 2 casas decimais.
 //
 // Desafio extra:
 // Crie uma função buscarProduto(termo)
 // que encontre produtos pelo nome, ignorando
 // diferenças entre letras maiúsculas e minúsculas.

 const catalogo = [
   { id: 1, nome: 'Mouse Gamer', preco: 120 },
   { id: 2, nome: 'Teclado Mecânico', preco: 350 },
   { id: 3, nome: 'Monitor 24', preco: 850 },
   { id: 4, nome: 'Headset', preco: 180 },
   { id: 5, nome: 'Webcam Full HD', preco: 230 }
 ];

 const carrinho = [];
