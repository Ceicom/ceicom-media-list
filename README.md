# Ceicom Media List
Listagem das medias para os players da Ceicom

### 1ª passo
Coloque o seguinte html onde você quer usar o media list

```html
<div class="cml-music-list-wrapper">
    <ul class="cml-music-list"></ul>
</div>
```

### 2ª passo
Coloque o css e js do plugin

```html
<link rel="stylesheet" href="caminho-para-o-arquivo/cml.css">
<script src="caminho-para-o-arquivo/cml.js"></script>
```

### 3ª passo
Execute o script

```js

// Player de Aúdio
new CeicomMediaList(data);
```
**O media list precisa receber um unico parâmetro de data para seu funcionamento**