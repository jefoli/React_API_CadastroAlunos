import axios from 'axios';

//podemos exportar o axios com alguma configuração padrão
//desse modo, podemos exportar o próprio arquivo do que o import acima: import axios from 'axios';

export default axios.create({
    //aqui dentro passamos as bases de configuração
    baseURL: 'hift.com.br',
});
