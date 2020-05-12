import {uuid} from 'uuidv4'
class Company{
  id: string;  // in future to change for number
  nome: string;
  cnpj: string;
  tel: number;
  email: string;
  date: Date;

  constructor({nome, cnpj, tel, email, date}:Omit<Company, 'id'>){
    this.id = uuid();
    this.nome = nome;
    this.cnpj = cnpj;
    this.tel = tel;
    this.email = email;
    this.date = date;
  }
}
export default Company;