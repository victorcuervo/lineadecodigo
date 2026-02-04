---
title: "Cambiar el contenido de una capa con JavaScript"
description: "Explicación de cómo podemos crear un código fuente que nos ayude a cambiar el contenido de una capa con Javascript."
date: 2008-03-03
updatedDate: 2026-01-13
tags: ["div","getelementbyid","innerhtml","textarea","onclick"]
slug: dom/manipulacion/cambiar-el-contenido-de-una-capa-con-javascript
type: doc
topic: dom
id: a3d969b6-cb11-46f9-89ac-9f4ed0a66204
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/cambiar-contenido-capa.html
---

Raro sería encontrarnos una nueva página que no estuviese diseñada basada en capas y lo estuviese en tablas como se diseñaba tiempo atrás. Y es que las capas conjunto con [las hojas de estilo CSS](http://www.manualweb.net/css/) son la base de toda página web con un buen diseño. 


Es por ello que el saber como **cambiar el contenido de una capa**, completará los diseños permitiendo el dinamismo sobre la misma.


## Crear una capa con DIV


Los pasos para cambiar el contenido de una capa con JavaScript son muy sencillos. Lo primero será el crear un capa. Las capas se crean mediante [el elemento DIV](https://www.w3api.com/HTML/div/).


```html
<div id="micapa">Contenido de la capa</div>
```


Es muy importante el dotarle de un identificador a la capa. Esto lo conseguimos mediante [el atributo id](https://www.w3api.com/HTML/id/). Y es que mediante el código [Javascript](https://www.manualweb.net/javascript/) accederemos a la capa y a su contenido con dicho [ID](https://www.w3api.com/HTML/id/).


## Acceder a la capa con getElementById


En este caso será [el método getElementById](https://www.w3api.com/DOM/.getElementById()) sobre el que nos apoyaremos. Una vez obtenido el acceso a la capa tenemos acceso [al atributo innerHTML](https://www.w3api.com/DOM/Element/innerHTML/), el cual representa su contenido. 


Por consiguiente, para cambiar el contenido de una capa habrá que modificar el contenido de este atributo. Un código de ejemplo sería el siguiente:


```javascript
function cambiarContenido() {
  document.getElementById('micapa').innerHTML = document.getElementById('contenido').value;
}
```


## Formulario para cambiar el contenido


Solo nos quedará invocar a este método. En este caso utilizamos un formulario para que el usuario pueda proporcionar el contenido mediante un textarea.


```html
<form>
  <textarea id="contenido" rows="10" cols="50"></textarea>
  <input type="button" value="Cambiar Contenido" onclick="cambiarContenido();">
</form>
```

