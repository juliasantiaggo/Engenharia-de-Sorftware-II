class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj){
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
    }

    get pegarCnpj(){
        return this.#cnpj
    }
}   

let empresa = new Empresa('ABC LTDA', 'Mercado Online', '99999999999')

console.log('Qual o cnpj: ' + empresa.pegarCnpj)