---
title: Saltos de línea en HTML
description: "Una de las primeras cosas que deberemos de aprender en nuestras páginas web es crear saltos de línea en HTML."
lastUpdated: 2025-12-10
slug: html/saltos-de-linea-en-html
author: victor_cuervo
---

Una de las cosas que tenemos que saber sobre los saltos de línea en [HTML](http://www.manualweb.net/html/) es que cuando la gente [empieza a crear páginas web HTML](https://lineadecodigo.com/tag/html-basicos/) suele caer en el error de creer que el retorno de carro sobre el editor va a provocar el mismo efecto cuando se visualice la página. Pero, esto no es cierto y deberemos de apoyarnos en el lenguaje [HTML](http://www.manualweb.net/html/) y sus elementos para conseguir dicho efecto. Si lo que hacemos el codificar nuestra página de la forma que sigue, de tal manera que solo insertemos simples saltos de carro de texto:


```html
<html lang="es">
<head>
  <title>Saltos de línea</title>
</head>
<body>
Primera línea

Segunda línea
</body>
</html>
```


Podemos ver que el resultado no es el que realmente esperamos. Es decir, que no vamos a tener dos líneas entre la primera y la segunda línea. El resultado cuando lo carguemos en el navegador será el siguiente: Primera línea Segunda líneaEs decir, no hay salto alguno entre la primera y segunda línea. Aunque hayamos insertado los retornos de carro. Para poder conseguir el efecto buscado deberemos de utilizar el elemento [`br`](http://w3api.com/HTML/br/). Este es el que se conoce como elemento “break”. Es decir, cada elemento [`br`](http://w3api.com/HTML/br/) que utilicemos generará un salto de línea. Es por ello que el código anterior nos quedaría de la siguiente forma:


```html

<html lang="es">
<head>
<title>Saltos de línea</title>
</head>
<body> Primera línea
<br><br>
Segunda línea
</body>
</html>
```


Vemos que podemos poner las etiquetas seguidas. No hace falta que estén en una nueva línea. En este caso obtendremos el efecto deseado.


```shell
Primera línea


Segunda línea
```


> Hay que tener en cuenta que el elemento br nos sirve para poder crear saltos de línea y separar las frases de texto. Pero nunca deberemos de utilizar el elemento br para crear separaciones entre elementos. Para poder crear separaciones entre elementos deberemos de utilizar las propiedades margin de CSS.


De esta forma ya habremos aprendido en este artículo a utilizar el elemento [`br`](http://w3api.com/HTML/br/) para poder insertar dentro de nuestras páginas web saltos de línea en [HTML](http://www.manualweb.net/html/). Esperamos que os haya sido útil.

