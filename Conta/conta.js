//class abstrata

export class conta{
    constructor (saldoInicial, cliente, agencia){
        if(this.constructor == conta){
            throw new Error("voce não deveria instanciar um objeto de tipo de conta diretamente, pois ela é uma classe abstrata")
        }        
        this._saldo= saldoInicial;
        this._cliente = cliente;
        this._agencia= agencia;
        
    } 
       set cliente (novoValor){
        if(novoValor instanceof Cliente){                   
        this._cliente= novoValor;
    }
}

    get cliente(){
        return this._cliente
    }        
    get saldo(){
            return this._saldo
    }

    // metodo abstrato
    sacar (valor){
        throw new Error("O método sacar da conta é abstrato")
        
    }

    _sacar(valor,taxa){;
        const valorSacado= taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valor 
            return valor;
        }
        return 0 
    }
    depositar(valor) {
        if(valor <= 0){
            return;
        }

        this._saldo += valor;
        }

    transferir (valor, conta) {
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
}
