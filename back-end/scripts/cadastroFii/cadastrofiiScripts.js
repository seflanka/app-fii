        // const quantidadeFundos = cadastroFii.length

        // // Faz um loop dentro array e cadastra os valores que faltam
        // for (var i = 0; i < quantidadeFundos; i++) {
        //     cadastroFii[i].totalInvestido = (cadastroFii[i].quantidade * cadastroFii[i].cotacaoBase).toFixed([2]);
        //     cadastroFii[i].totalReceber = (cadastroFii[i].quantidade * cadastroFii[i].dividendo).toFixed([2]);
            
        //     if ((cadastroFii[i].dataPagamento.substring(0,2)) <= hoje.getDate()) {
        //         cadastroFii[i].diasParaReceber = "Recebido";
        //     }else {
        //         cadastroFii[i].diasParaReceber = ((cadastroFii[i].dataPagamento.substring(0,2)) - hoje.getDate()) + ' Dias';
        //     };
        // };


        // //INICIO---------------------------------------------------------------------------------------------------------------
        // // Entra dentro de cada item do array de objetos pega o valor e escreve dentro da var arrayLength que esta zerada:
        // const arrayLength1 = [];
        // for( var i = 0; i < quantidadeFundos; i++) {
        //     arrayLength1.unshift(cadastroFii[i].totalInvestido);
        // };   

        // //Usa a função reduce para somar os itens que estão dentro do array e fixa o numero de casas depois da virgula em 2:
        // const totalInvestidoCarteira = arrayLength1.reduce(function(acumulador, value) {
        //     return acumulador + value
        // },0).toFixed([2]);
        // //FINAL---------------------------------------------------------------------------------------------------------------



        // //INICIO---------------------------------------------------------------------------------------------------------------
        // // Entra dentro de cada item do array de objetos pega o valor e escreve dentro da var arrayLength que esta zerada:
        // const arrayLength2 = [];
        // for( var i = 0; i < quantidadeFundos; i++) {
        //     arrayLength2.unshift(cadastroFii[i].totalReceber);
        // };   

        // //Usa a função reduce para somar os itens que estão dentro do array e fixa o numero de casas depois da virgula em 2:
        // const totalproventos = arrayLength2.reduce(function(acumulador, value) {
        //     return acumulador + value
        // },0).toFixed([2]);
        // //FINAL---------------------------------------------------------------------------------------------------------------
