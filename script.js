iniciarCompras = () => {
  // RECEBENDO VALOR E QUANTIDADE POR PROMPT

  let refrigerante = prompt('Digite o valor do refrigerante\nEXEMPLO: 11.99')
  let refrigeranteQtd = prompt('REFRIGERANTE: \nDigite a quantidade: ')

  let macarrao = prompt('Digite o valor do macarrão\nEXEMPLO: 11.99')
  let macarraoQtd = prompt('MACARRÃO: \nDigite a quantidade: ')

  let ervilha = prompt('Digite o valor da ervilha\nEXEMPLO: 11.99')
  let ervilhaQtd = prompt('ERVILHA: \nDigite a quantidade: ')

  let arroz = prompt('Digite o valor do arroz\nEXEMPLO: 11.99')
  let arrozQtd = prompt('ARROZ: \nDigite a quantidade: ')

  let feijao = prompt('Digite o valor do feijão\nEXEMPLO: 11.99')
  let feijaoQtd = prompt('FEIJÃO: \nDigite a quantidade: ')

  let vinho = prompt('Digite o valor do vinho\nEXEMPLO: 11.99')
  let vinhoQtd = prompt('VINHO: \nDigite a quantidade: ')

  // VALOR TOTAL DOS ITENS
  let valorRefrigerante = refrigerante * refrigeranteQtd
  let valorMacarrao = macarrao * macarraoQtd
  let valorErvilha = ervilha * ervilhaQtd
  let valorArroz = arroz * arrozQtd
  let valorFeijao = feijao * feijaoQtd
  let valorVinho = vinho * vinhoQtd

  // VALOR TOTAL DA COMPRA
  let valorTotal =
    valorRefrigerante +
    valorMacarrao +
    valorErvilha +
    valorArroz +
    valorFeijao +
    valorVinho

  let metadeValor = valorTotal / 2

  console.log(metadeValor)

  // CALCULANDO SE O RESTO É IMPAR OU PAR

  if (valorTotal % 2 === 0) {
    let valorMetade = (valorTotal - valorVinho) / 2
    let valorAmigo = valorMetade + valorVinho

    // IMPRIMINDO ALERT COM TODAS INFORMAÇÕES RECOLHIDAS
    alert(
      `Deu par!\nO total da compra foi de R$${valorTotal}\nVocê deverá pagar R$${valorMetade}\nSeu amigo deverá pagar R$${valorAmigo}`
    )
  } else {
    alert(`Deu impar!\n Cada um deverá pagar R$${metadeValor}`)
  }
}
