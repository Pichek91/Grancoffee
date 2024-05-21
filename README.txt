Estudos Reactive Native - Voce Vai Conseguir

- Sempre quando precisar atualizar a biblioteca do Expo execute o seguite comando no terminal:

	npm install -g expo-cli

- Para Criar sempre um app novo, no terminal execute o seguinte comando:

	npx create-expo-app StickerSmash --template blank

O StickerSmash, é o nome da pasta, então substitua esse nome, pelo nome do seu app, Template blanck, 
vai criar o app puro.

- Para jogar o app no GitHub execute os passos seguintes:

    Abra um novo repositorio no GitHub
    No terminal execute os comandos a seguir:
        git remote add origin https://github.com/Pichek91/GrancoffeePrev.git
        git branch -m main
        git push -u origin main 

- Para acessar de outro PC, clonar a biblioteca usando o comando:
        git clone e a URL do repositorio

- Se ja tiver o repositorio salvo no PC, para dar continuidade, execute os seguintes comandos:
	Abra o terminal, navegue ate a pasta aonde esta salvo o repositorio;
	Com o comando code . abra o VS code
	Execute git init
	Execute git pull

- Depois no terminal rodar os comandos:
	npm install
	npm install expo-cli --global // Vai atualizar todas as bibliotecas que possui no projeto.

Por fim, esta pronto para fazer novas alterações, não esqueça de sempre salvar os commits ;)

- Bibliotecas usadas

    npm install @react-navigation/drawer
    npx expo install react-native-gesture-handler react-native-reanimated
    