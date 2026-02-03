---
title: "Eliminar el subrayado de los enlaces"
description: "Código en CSS que nos sirve para poder eliminar el subrayado de los enlaces manipulando la propiedad text-decoration."
date: 2007-02-19
updatedDate: 2026-01-17
tags: ["text-decoration","html","enlaces","a","style","link"]
slug: css/buenas-practicas/eliminar-el-subrayado-de-los-enlaces
author: victor_cuervo
type: doc
topic: css
id: 3857cf52-e21b-40de-9625-8b90be6d8814
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/enlaces/enlaces-no-subrayados.html
---

Por defecto los navegadores suelen mostrar los enlaces de una página [HTML](http://www.manualweb.net/html/) de forma subrayada. Dependiendo del estilo que le estemos dando a la página, esto, puede ser más o menos un inconveniente.


Mediante [CSS](http://www.manualweb.net/css/) tenemos una forma muy sencilla de hacer que los enlaces no aparezcan subrayados, es decir, vamos a eliminar el subrayado de los enlaces.


## Manipular el elemento anchor


Para ello simplemente tenemos que manipular las propiedades del [elemento anchor](https://www.w3api.com/HTML/a/), es decir, del [elemento `A`](https://www.w3api.com/HTML/a/). Dicho elemento es el que representa los enlaces en el lenguaje [HTML](http://www.manualweb.net/html/).


Lo primero que tenemos que hacer es [crear un enlace en nuetra página web](http://lineadecodigo.com/html/hipervinculos-enlazar-dos-paginas-web/) mediante el [elemento `A`](https://w3api.com/HTML/a/).


```html
<a href="[http://www.manualweb.net">Manual](http://www.manualweb.net/%22%3EManual) Web</a>
```


## Crear el código CSS


Lo siguiente que haremos para eliminar el subrayado de los enlaces es crear un código [CSS](http://www.manualweb.net/css/) para acceder a dicho elemento. Para ello, dentro de la cabecera de la página crearemos una sección para manejar estilo. Esto lo hacemos mediante el elemento [`style`](https://w3api.com/HTML/style/).


Veamos el código:


```html
<style type="text/css">
</style>
```


## Modificar la propiedad text-decoration


Dentro de esta sección manipularemos las comportamientos del [elemento `A`](https://www.w3api.com/HTML/a/). En concreto vamos a manipular los comportamientos [`link`](https://w3api.com/CSS/link/) y [`visited`](https://w3api.com/CSS/visited/). El primero representa al enlace en su estado inicial y el segundo al enlace cuando ha sido visitado.


La idea es que en ambos casos no aparezca el subrayado. Para ello hay que modificar la propiedad [`text-decoration`](https://w3api.com/CSS/text-decoration/) e indicar que no tiene ninguna. Es decir, asignarle el valor de none.


El código [CSS](http://www.manualweb.net/css/) para eliminar el subrayado de los enlaces quedaría de la siguiente manera:


```css
a:link {text-decoration:none;}
a:visited {text-decoration:none;}
```


## Código completo


Si lo insertamos dentro de la página web quedará de la siguiente manera:


```html
<html>
<head>
<style type="text/css">
a:link {text-decoration:none;}
a:visited {text-decoration:none;}
</style>
</head>
<body>
<a href="[http://www.manualweb.net">Manual](http://www.manualweb.net/%22%3EManual) Web</a>
</body>
</html>
```


Con este código ya habremos conseguido eliminar el subrayado de los enlaces mediante código [CSS](http://www.manualweb.net/css).

