---
title: "Utilizar la ñ en HTML"
description: "Cómo tenemos que codificar nuestra página web para poder utilizar la ñ en HTML mediante entidades HTML o gestionando el código de charset."
lastUpdated: 2025-12-19
slug: html/utilizar-la-n-en-html
author: victor_cuervo
---

Es posible que te hayas encontrado en un caso en el que has creado alguna página web en la que has querido utilizar la ñ en [HTML](https://www.manualweb.net/html/) y cuando la has ido a visualizar en algún navegador en concreto no se visualizaba de la forma correcta, mostrando un carácter raro.


Y es que a la hora de escribir documentos [HTML](https://www.manualweb.net/html/) y publicarlos en la web tenemos que tener en cuenta que estos son susceptibles de ser visualizados por personas de muchos sitios. Y que estas personas tendrán diferentes configuraciones de sus navegadores. Es por ello que tenemos que prestar especial atención cuando utilicemos símbolos especiales de los idiomas.


### Codificación de contenido en HTML.


Para ello, dentro de la especificación del lenguaje [HTML](https://www.manualweb.net/html/) nos permite jugar con [diferentes tipos de codificaciones](https://manualweb.net/html5/documento-html5/) mediante los juegos de caracteres o charset.


El problema de encontrar caracteres que no están soportados si utilizamos codificaciones de locales, como puede ser el caso de la **ISO-8859-1**. Esta especificación contempla el alfabeto español, por lo tanto sí que contempla el uso de la letra ñ.


```html
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
```


Pero, ¿qué sucede si queremos que páginas que tengan otras codificaciones puedan ver la letra ñ, letra que solo encontramos en el alfabeto español? Así, si queremos utilizar la ñ en nuestros [documentos HTML](https://manualweb.net/html/documento-html/), lo mejor que podemos hacer es utilizarla como [entidad HTML](https://manualweb.net/html/entidades-html/). 


### Entidades en HTML


Las [entidades HTML](https://manualweb.net/html/entidades-html/) son códigos especiales que nos permiten representar caracteres especiales en nuestro [código HTML](https://lineadecodigo.com/categoria/html/). Estas entidades comienzan con el símbolo & y terminan con ; (punto y coma). Entre estos símbolos podemos encontrar tanto códigos numéricos como nombres nemotécnicos que representan caracteres específicos.


Para ello, en vez de escribir la ñ directamente, la deberíamos de escribir utilizando la estructura de las [entidades](https://manualweb.net/html/entidades-html/) [HTML](https://www.manualweb.net/html/):


```html
&codigo;
```


### Entidades para utilizar la ñ en HTML


En este caso, para representar la letra ñ mayúscula en [HTML](https://manualweb.net/html/), podemos utilizar dos códigos diferentes: el código numérico #209, que corresponde a su posición en la tabla ASCII extendida, o la entidad nemotécnica Ntilde, que es más fácil de recordar ya que hace referencia directa a la letra N con tilde:


```html
&#209;
&Ntilde;
```


Para representar la letra ñ en minúsculas en [HTML](https://manualweb.net/html/), podemos utilizar dos opciones diferentes: el código numérico #241, que corresponde a su posición en la tabla ASCII extendida, o la entidad nemotécnica ntilde, que al igual que su versión mayúscula, hace referencia a la letra n con tilde:


```html
&#241;
&ntilde;
```


### Ejemplo para codificar la ñ en HTML


De esta forma podríamos tener textos [HTML](https://www.manualweb.net/html/) dentro de nuestra página web que utilicen [entidades HTML](https://manualweb.net/html/entidades-html/) para representar caracteres especiales. Por ejemplo, si queremos escribir una frase simple que contenga la letra ñ, podríamos hacerlo de la siguiente manera...


```html
La capital de Espa&ntilde;a es Madrid.
```


...que cuando se procese y se muestre en el navegador, se visualizaría exactamente de la siguiente forma:


🖥️ **La capital de España es Madrid**.


### Uso de UTF-8 para poder utilizar la ñ en HTML


Otra opción, siempre que podamos, es utilizar una codificación UTF-8, que nos evita estos problemas y en este caso podemos incluir directamente la letra ñ escrita por teclado, ya que es soportada dentro del alfabeto unicode **UTF-8**.


De esta manera el tipo de contenido lo definiremos de la siguiente forma:


```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```


De esta manera, hemos explorado detalladamente las diferentes opciones y consideraciones que debemos tener en cuenta cuando necesitamos utilizar la letra ñ en documentos [HTML](https://www.manualweb.net/html/). Ya sea mediante el uso de [entidades HTML](https://manualweb.net/html/entidades-html/) específicas o a través de la codificación UTF-8, ahora disponemos de las herramientas necesarias para implementar este carácter especial de forma correcta y asegurar su visualización adecuada en cualquier navegador o configuración.

