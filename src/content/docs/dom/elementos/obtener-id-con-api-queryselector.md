---
title: "Obtener ID con API QuerySelector"
description: "Como obtener un ID con API QuerySelector para recuperar un objeto concreto del DOM."
date: 2014-09-01
updatedDate: 2026-01-13
tags: ["queryselector","id","innerhtml"]
slug: dom/elementos/obtener-id-con-api-queryselector
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8168-8892-d9f2da819b8f
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/selectores/queryselector-id.html
---

Ya hemos visto que [con el API QuerySelector podemos ejecutar selectores que accedan a los elementos DOM](http://lineadecodigo.com/javascript/api-queryselector/) de nuestra página web. Ahora vamos a ver como podemos **obtener el ID con API QuerySelector** para poder recuperar un elemento en concreto.


> Recuerda que para que una página esté bien formada no deberá de tener repetidos los ID y que un ID corresponderá a un solo elemento.


## Definir el elemento HTML con ID


Para obtener el ID con API QuerySelector lo primero que haremos es definir una web dónde tengamos un elemento con dicho ID.


```html
<p id="mensaje">Este es mi mensaje</p>
```


## Acceder al ID mediante QuerySelector


Ahora lo siguiente será acceder al ID "mensaje". Para ello vamos a ejecutar el método `document.querySelector()` al cual le pasaremos el selector que referencie al ID. Los selectores de ID se referencian anticipándoles una almohadilla.


```javascript
#identificador
```


Es por ello que **el código para obtener el ID con API QuerySelector** será el siguiente:


```javascript
var mensaje = document.querySelector("#mensaje");
```


## Obtener el contenido del elemento


En la variable `mensaje` habremos dejado un elemento DOM, así que podemos obtener su contenido mediante métodos como `.innerHTML`.


```javascript
console.log(mensaje.innerHTML);
```


En próximos artículos veremos como a parte de obtener el ID con API QuerySelector podemos montar una cantidad amplia de selectores que nos filtren los elementos.

