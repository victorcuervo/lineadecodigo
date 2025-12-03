---
title: Protegiendo la página en JavaScript
description: ""
lastUpdated: 2023-02-06
author: victor_cuervo
---

La verdad es que [JavaScript](https://www.manualweb.net/javascript/) no es el lenguaje que deberíamos de utilizar para proteger nuestras páginas web. Ya que es altamente vulnerable. Pero para, al menos, hacer que nuestras páginas no sean leídas por curiosos, puede sernos de gran ayuda. Y todo de una manera muy sencilla. Así que vamos a ver cómo podemos estar protegiendo la página en [JavaScript](https://www.manualweb.net/javascript/)


La idea es **proteger mediante una contraseña nuestra página** y que solo los propietarios de dicha contraseña sean capaces de acceder al contenido de la misma.


Lo primero que deberemos de hacer es crear una función [JavaScript](https://www.manualweb.net/javascript/), la cual pondremos en la cabecera de nuestra página [HTML](https://www.manualweb.net/html/), que nos solicite una password. A esta función la llamaremos `validarPassword()`. La [línea de código](https://lineadecodigo.com/) será la siguiente:


```javascript
function validarPassword(){...}
```


En dicha función lo primero que tenemos que hacer es pedir una contraseña y almacenarla en una variable para su posterior análisis. Para pedir los datos nos apoyamos en la función [`prompt`](https://www.w3api.com/DOM/Window/prompt/). Dicha función viene con el core del lenguaje. Y lo que nos ayudará será a mostrar una ventana con un input text y el texto que le pasemos como parámetro.


Quedándonos el siguiente código:


```javascript
texto = prompt("Para ver la página introduzca su contraseña");
```


Ahora que tenemos en la variable texto la contraseña que ha introducido el usuario por pantalla habría que validarla. En el caso que la contraseña no coincida con lo que esperamos (en nuestro ejemplo esperamos que se haya tecleado _"lineadecodigo"_), deberemos de volver a pedirla la contraseña al usuario. Es por ello que nos apoyaremos en un bucle [`while`](https://manualweb.net/java/sentencias-bucle-java/#while).


```javascript
while(texto!="lineadecodigo"){
  alert("Password incorrecta");
  texto = prompt("Para ver la página introduzca su contraseña");
}
```


En el medio hemos utilizado el método [`alert`](https://www.w3api.com/DOM/Window/alert/) para mostrarle un mensaje al usuario indicándole que la contraseña no es válida.


En el caso que el texto introducido y lo esperado coincidan, el programa se saldrá del bucle. Entonces le mostraremos al usuario un mensaje indicándole que la contraseña es válida. Es decir, que nos apoyaremos nuevamente en la función [`alert`](https://www.w3api.com/DOM/Window/alert/).


El código entero de la función será el siguiente:


```javascript
function validarPassword(){
    texto = prompt("Para ver la página introduzca su contraseña");
    while(texto!="lineadecodigo"){
        alert("Password incorrecta");
        texto = prompt("Para ver la página introduzca su contraseña");
    }
    alert("Password Correcta");
}
```


Hay que tener en cuenta que este código es lo primero que se tiene que ejecutar en la página. Es por ello que pondremos una llamada a la función justo después del elemento [`body`](https://www.w3api.com/HTML/body/) de nuestra página [HTML](https://www.manualweb.net/html/).


El código será el siguiente:


```html
<body>
  <script>validarPassword();</script>
</body>
```


Hay que indicar que para llamar a la función simplemente se invoca mediante su nombre.


Al ser lo primero que se ejecuta antes de cargar la página, si el usuario no sabe la contraseña, nunca se cargará el resto de la página. Es decir, lo que vaya debajo de estas líneas, nunca se verá.


La página [HTML](http://www.manualweb.net/tutorial-html/) entera quedará de la siguiente forma:


```html
<html>
<head>
<title>Pagina con Password</title>

<script>
  function validarPassword(){
    texto = prompt("Para ver la página introduzca su contraseña");
    while(texto!="lineadecodigo"){
      alert("Password incorrecta");
      texto = prompt("Para ver la página introduzca su contraseña");
    }
    alert("Password Correcta");
  }
</script>
</head>

<body>
<script>validarPassword();</script>
Contenido secreto
</body>
</html>
```


Para finalizar recordar que este código [JavaScript](https://www.manualweb.net/javascript/) no hace que nuestra página sea segura 100%. Solo nos sirve para poder parar a curiosos sin conocimiento técnicos. Pero menos es nada.


De hecho, podéis probar a ver que pasa si ejecutáis la página con el [JavaScript](https://www.manualweb.net/javascript/) del navegador desactivado... ¿Dónde está nuestra seguridad?


Si se quiere tener un control sobre la seguridad del contenido deberemos de delegar dicha seguridad al servidor. Consecuentemente deberemos de saber como se implementa mediante los diferentes lenguajes de servidor: [ASP](http://www.manualweb.net/asp/), [JSP](https://www.manualweb.net/javaee/), [Java Servlets](https://www.manualweb.net/javaee/),...

