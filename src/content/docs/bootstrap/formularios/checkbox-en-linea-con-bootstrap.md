---
title: "Checkbox en línea con Bootstrap"
description: "Aprende a crear checkbox en línea con Bootstrap para mejorar la presentación de tus formularios y evitar que se vean apilados de manera poco estética."
date: 2015-11-05
updatedDate: 2026-02-02
tags: ["checkbox","label","class","checkbox-inline"]
slug: bootstrap/formularios/checkbox-en-linea-con-bootstrap
author: victor_cuervo
type: doc
topic: bootstrap
id: 51dc96fb-b956-44ea-9071-7ba051b02d52
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/formularios/checkbox-en-linea.html
---

Cuando estamos creando un formulario e insertamos un checkbox en una página, si no hacemos nada al respecto, estos quedan dispuestos uno tras de otro como si fueran una lista. En este artículo vamos a ver cómo podemos crear checkbox en línea con [Bootstrap](http://www.manualweb.net/bootstrap/).


## Insertar checkbox en el formulario


Lo primero será insertar los checkbox dentro de nuestro formulario:


```html
<div class="checkbox">
  <label>
    <input id="cb1" type="checkbox" value="option1"></input> Avila
  </label>
  <label>
    <input id="cb2" type="checkbox" value="option2"></input> Salamanca
  </label>
  <label>
    <input id="cb3" type="checkbox" value="option3"></input> Zamora
  </label>
</div>
```


Vemos que los checkbox son recubiertos por una capa que utiliza la clase `checkbox` y que luego, cada una de las opciones está compuesta por un elemento `label` y otro [`input`](https://www.w3api.com/HTML/input/).


## Utilizar la clase checkbox-inline


Ahora lo que tenemos que hacer es utilizar la clase `checkbox-inline`. Esta clase la utilizamos dentro de cada uno de los elementos `label`. De esta manera el código ahora nos quedará de la siguiente forma:


```html
<div class="checkbox">
  <label class="checkbox-inline">
    <input id="cb1" type="checkbox" value="option1"></input> Avila
  </label>
  <label class="checkbox-inline">
    <input id="cb2" type="checkbox" value="option2"></input> Salamanca
  </label>
  <label class="checkbox-inline">
    <input id="cb3" type="checkbox" value="option3"></input> Zamora
  </label>
</div>
```


De esta forma hemos visto lo sencillo que es poner una lista de opciones creando checkbox en línea con [Bootstrap](http://www.manualweb.net/bootstrap/).

