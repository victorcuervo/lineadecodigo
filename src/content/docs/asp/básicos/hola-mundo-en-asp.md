---
title: "Hola Mundo en ASP"
description: "El artículo explica cómo crear un programa Hola Mundo en ASP utilizando dos métodos sencillos de escritura."
publishDate: 2007-01-10
updatedDate: 2026-01-01
tags: ["hola-mundo","response","write"]
slug: asp/hola-mundo-en-asp
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/basico/hola-mundo.asp
---

Siempre he pensado que escribir este artículo me llevaría poco tiempo. Pero nunca encontraba el tiempo necesario para escribirlo. Y eso que, cómo he dicho, es muy sencillo.


Cada vez que nos enfrentamos a un nuevo lenguaje de programación, lo primero que queremos hacer es mostrar una cadena de texto como salida. Da igual por donde, ya sea por la consola, en la página web,.... Y es en ese momento cuando pensamos... con todo lo que me ha costado el saber cómo buscar la sentencia correcta para poner el texto ... ¿qué texto pongo? Es aquí cuando entra en juego nuestra capacidad de imaginación.


Pero yo creo que hay que ser tradicionalistas y cómo todo buen libro que se precie. Lo primero es lo primero y hay que poner "Hola Mundo" (vale, "Hello World", para los que no hablen español). En este sentido, loable es la página diseñada por la [Association for Computing Machinery (ACM) de Louisiana](http://www2.latech.edu/%7Eacm/), la cual, trata de recoger cómo hacer [el programa Hola Mundo en todos los lenguajes de programación, bases de datos, calculadoras, entornos gráficos,.... conocidos](http://www2.latech.edu/%7Eacm/HelloWorld.shtml).


En el caso que a nosotros nos atañe, es decir, [ASP](http://www.manualweb.net/asp/). El ejemplo es muy sencillo y, además, tenemos dos formas de hacerlo.


De una u otra lo primero que tenemos que hacer es crear nuestra página .asp. Para ello podemos tirar de cualquier editor de texto y generar el archivo con dicha extensión.


En un primer lugar crearemos una página [HTML](http://www.manualweb.net/html/), ya que, el resultado final será una página [ASP](http://www.manualweb.net/asp/).


```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hola Mundo en ASP</title>
  </head>
  <body>
    ...
  </body>
</html>
```


Ahora tenemos que introducir nuestro código en [ASP](http://www.manualweb.net/asp/). Para ello utilizamos los separadores <% y %>. Dentro de los cuales irá nuestro código en [ASP](http://www.manualweb.net/asp/).


```visual basic
<%
 'Código en ASP
%>
```


Las formas de poner el Hola Mundo en pantalla serán dos:


a) Utilizar el método Response.Write("cadenaDeTexto")


```visual basic
<%
 Response.Write("Hola Mundo")
%>
```


b) Utilizar su acotación que es poner el símbolo igual. Eso sí, justo después del separador <%


```visual basic
<%="Hola Mundo"%>
```


Ahora que para poder ver la ejecución de nuestro "Hola Mundo" deberemos de tener un servidor que entienda de páginas [ASP](http://www.manualweb.net/asp/).

