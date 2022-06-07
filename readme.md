<h1 align='center'>PROJETO FINAL - Rick and Morty API </h1>

Projeto desenvolvido para o trabalho final do módulo de Node.JS, consumindo dados da API do Rick and Morty ('https://rickandmortyapi.com/') filtrando e exibindo os dados.

Para utilizar esta aplicação foi feita em Node.JS e para a utilização é necessário ter instalado no computador.(https://nodejs.org/en/download/)

A estrutura da aplicação foi divida da seguinte maneira:
    1.Raiz:
        * index.js -> Onde o servidor é inicializado e recebe as requisições e manda as respostas.
        
        * package.json -> As informações sobre a aplicação como a assinatura de depêndencias da aplicação, seu nome, a versão, entre outras.
        
        * src -> Diretório fonte onde está:
            
            * models -> Diretório onde fica as entidades do projeto com as suas funcionalidades.
                Entidades:
                    * character: Entidade de funcionalidades para os personagens de Rick and Morty.
                    * episodes: Entidade de funcionalidades dos episódios de Rick and Morty.
                    * locations: Entidade de funcionalidades dos locais do universo de Rick and Morty.
            
            * routes -> Diretório para divisão de rotas das funcionalidades de cada entidade.

            * controllers -> Diretório das funções controladoras de cada entidade, montando a resposta do servidor para cada funcionalidade requisitada pelo usuário.
                Controladoras:
                    * characters-Controller: Função controladora das requisiçõs para os personagens e respostas do servidor.
                    * episodes-Controller: Função controladora das requisiçõs para os episódios e respostas do servidor.
                    * locations-Controller: Função controladora das requisiçõs para as localizações e respostas do servidor.

            * utils -> Diretório para funções genéricas que serão utilizadas pela aplicação.
                * log: Função de logs da aplicação, com espeficação da hora no momento da requisição: ('Data e hora': [REQUEST => 'requisição'])

            * config -> Diretório de funções de configuração da aplicação.
                * rick-and-morty-api: Configuração do axios para as requisições da API externa.

        * tmp -> Diretório de armazenamento de arquivos com informações dos personagens, utilizando o path '/characterfile' e passando o ID do personagem.


A aplicação funciona da seguinte forma:

1. Primeiro será preciso rodar a aplicação com o arquivo index na raiz do projeto dando a seguinte instrução:
    * Abra um terminal e vá até o diretório do projeto;
    * Assim que estiver no diretório, de o comando 'node index' para inicializar a aplicação;

2. Com a aplicação em funcionamento, você poderá em um browser de sua preferência ou com o software Insomnia escrever o seguinte endereço:
    * 'http://localhost:3000/' => 'http' é o tipo de protocolo usado pelo servidor, 'localhost' é o servidor que a sua própria maquina está rodando, ':3000' é a porta usada para acessar a aplicação.

3. A partir do endereço existe rotas que podem ser usadas para aplicações distintas:
    * 'http://localhost:3000/characters': Listagem dos personagens, sendo possível os seguintes filtros utilizando querys:
        * 'page': número para paginação, cada página mostrará 20 personagens por vez e o número máximo de páginas são 42 sem utilizar outros filtros.
        * 'status': Status do personagen se está vivo, morto ou desconhecido, utilize alive para vivo, dead para morto e unknown para desconhecido.
        * 'specie': Filtro de espécies dentro do universo de Rick and Morty, como alien, human, robot, entre outros.
        * 'gender': Filtro de gênero de personagens, utilize male para masculino, female para feminino, genderless para sem gênero e unknown para desconhecido.
    ex.:'http://localhost:3000/characters?page=1&status=alive&specie=human&gender=male'

    * 'http://localhost:3000/searchcharacterbyname': Procura de personagem, passando o nome do personagem ou que esteja incluso pela query 'nome' e pagina se necessário pela query 'page'. 
    ex.:'http://localhost:3000/searchcharacterbyname?name=rick&page=3'

    * 'http://localhost:3000/searchcharacterbyid': Procura um personagem, passando o número pela query 'id'.
    ex.: 'http://localhost:3000/searchcharacterbyid?id=1'

    * 'http://localhost:3000/getcharacterbyorigin': Filtro de personagens pela origin do personagem pela query 'origin' e se necessário a utilização da query 'page' passando o número da pagina para transição.
    ex.: 'http://localhost:3000/getcharacterbyorigin?origin=earth&page=5'

    * 'http://localhost:3000/characterfile': Aplicação para salvar um arquivo do tipo JSON com as informações do personagem na pasta tmp na raiz do projeto, o arquivo terá o nome do personagem, para a busca é necessário passar o número pela query 'id'.
    ex.: 'http://localhost:3000/characterfile?id=4'

    * 'http://localhost:3000/locations': Lista de localidades do universo Rick and Morty, com paginação passando o número da página pela query 'page' e sendo possível alguns filtros:
        * 'type': Tipo da localização, como 'Planet'.
        * 'dimension': A dimensão que está localizada.
        * 'name': O nome da localidade.
    ex.: 'http://localhost:3000/locations?name=earth&type=Planet&dimension=c-137&page=1'

    * 'http://localhost:3000/episodes': Lista de episódios da série, com paginação passando o número da página pela query 'page' e sendo possível alguns filtros:
        * 'name': nome do episódio.
        * 'episode': tag do episódio.
    ex.: 'http://localhost:3000/episodes?name=pilot&episode=s01e01'