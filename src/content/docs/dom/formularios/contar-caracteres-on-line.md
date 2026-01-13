---
title: "Contar caracteres on-line"
description: "Utilización de Javascript para poder contar caracteres on-line."
date: 2008-03-25
updatedDate: 2026-01-13
tags: ["getelementbyid","window","settimeout"]
slug: dom/formularios/contar-caracteres-online
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/contar-caracteres-on-line.html
topic: dom

---

Vas a mandar un SMS y solo puedes enviar 150 caracteres. La aplicación a ofrecer al usuario nos va mostrando el número de caracteres que van escritos. Es una ayuda del interface de usuario, haciéndole más usable.


Este simple interface le podemos lograr mediante un área de texto y un poco de código [Javascript](https://www.manualweb.net/javascript/).


## Calcular el número de caracteres


La solución técnica es muy sencilla, ya que el número de caracteres nos la da la longitud del área de texto.


```javascript
document.getElementById("area").value.length;
numeroCaracteres = textoArea.length;
```


## Temporizador para contar caracteres


Quizás el principal problema sea saber cada cuanto debemos de realizar el calculo del tamaño del área de texto. Una de las opciones sería realizar el calculo cada vez que el usuario pulse una tecla. Si bien, puede suponer una cuenta demasiado excesiva de los caracteres y habría que intentar hacerlo más espaciado, si bien, sin perder la cuenta.


Otra opción, y la que utilizamos, el utilizar un **temporizador**, el cual lanzaremos cada un tiempo determinado. Para ello nos apoyamos en [el método setTimeOut(funcion,tiempoEnMilisegundos)](https://www.w3api.com/DOM/Window/.setTimeout()).


Donde el parámetro **función** será la que calcule el tamaño del área y actualice el número de caracteres y el **tiempoEnMilisegundos** será, pues eso, cada cuantos milisegundos lanzamos el método. Aquí podemos jugar con los valores para ajustarlo. Para empezar vamos a utilizar 300ms.


## Iniciar el temporizador


La primera vez que lancemos el timer será al cargarse la página:


```javascript
<body onLoad="WordCountOnLine();">
```


En posteriores ocasiones será cuando finalice de ejecutarse nuestro método **WordCountOnLine**:


```javascript
function WordCountOnLine() {

  textoArea = document.getElementById("area_texto").value;

  // El numero de caracteres es su longitud
  numeroCaracteres = textoArea.length;
 
  document.getElementById("caracteres").value = numeroCaracteres;   
  setTimeout("WordCountOnLine();",300);
}
```


## Contar palabras


Este ejemplo se puede incrementar para que se cuenten las palabras introducidas por el usuario. Para ello es recomendable leerse el artículo [Contar caracteres y palabras en JavaScript](http://lineadecodigo.com/javascript/contar-caracteres-y-palabras-en-javascript/). Si bien, el código para descargar ya lleva incluida esta mejora. Así puedes ver lo simple que es hacerlo.

