---
title: "Número de elementos de una lista con jQuery"
description: "Descubre cómo contar el número de elementos de una lista con jQuery y controla dinámicamente tu contenido en la web de manera sencilla y efectiva."
date: 2009-01-31
updatedDate: 2026-02-06
tags: ["ul","size"]
slug: jquery/selectores/numero-de-elementos-de-una-lista-con-jquery
type: doc
topic: jquery
id: af3248d3-839c-4296-ba62-5f2507edc2e2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/listas/numero-elementos-de-una-lista-jQuery.html
---

En algunas de nuestras páginas web tendremos listados de elementos que se componen de forma dinámica. Por ejemplo, podemos tener los artículos que el usuario ha ido seleccionando en nuestra web y que ha ido introduciendo en el "carrito de la compra". 


Estos elementos irán creciendo y decreciendo de forma dinámica. Mediante [jQuery](http://www.manualweb.net/jquery/) tenemos una forma muy sencilla de saber el número de elementos de una lista y así tener ese control de elementos en el lado del cliente.


## Crear la Lista


Lo primero que tenemos que hacer para saber el número de elementos de una lista con [jQuery](http://www.manualweb.net/jquery/) será crear una lista. Daremos un [ID](https://www.w3api.com/HTML/id/) a la lista, para acceder de una forma sencilla desde nuestro código [jQuery](http://www.manualweb.net/jquery/).


```html
<ul id="lista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
  <li>Elemento 5</li>
</ul>
```


Aunque hemos creado la lista de forma manual y estática en [HTML](https://www.manualweb.net/html/), es muy probable que en nuestras aplicaciones se conforme de forma dinámica ya sea en el cliente o en el servidor.


## La Función .size()


Lo siguiente será insertar el código [jQuery](http://www.manualweb.net/jquery/) que nos calcule el número de elementos de una lista. Como siempre, el código [jQuery](http://www.manualweb.net/jquery/) lo insertamos en la función `.ready()`.


```javascript
$(document).ready(function(){
 // Código jQuery
});
```


En este caso nos apoyaremos en la función `.size()` del elemento [HTML](https://www.manualweb.net/html/) en cuestión. Es decir, al ser una lista sería sobre [LI](https://www.w3api.com/HTML/li/) y al haberle dado el [ID](https://www.w3api.com/HTML/id/) "lista", el selector sería de la siguiente forma:


```javascript
$("#lista li").size();
```


## Mostrar el Resultado


Lo que vamos a hacer ahora será volcar el contenido a una capa. En este caso nos apoyamos en la función `.html()`. El código final nos queda de la siguiente forma:


```javascript
$(document).ready(function(){
 $("#numero_elementos").html($("#lista li").size()); 
});
```


Eso sí, no os olvidéis crear un elemento "numero_elementos" para poder volcar el contenido. ;-)


```html
Numero de elementos: <span id="numero_elementos"></span>
```

