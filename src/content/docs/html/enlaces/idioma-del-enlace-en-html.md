---
title: "Idioma del enlace en HTML"
description: "Aprende a configurar el idioma del enlace en HTML utilizando el atributo hreflang para mejorar la accesibilidad y el SEO de tus páginas web."
date: 2009-01-02
updatedDate: 2026-01-24
tags: ["a","href","hreflang"]
slug: html/enlaces/idioma-del-enlace-en-html
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81d0-ac8a-f3ad386e24b4
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/enlaces/idioma-del-enlace.html
---

En [HTML](https://www.manualweb.net/html/) podemos indicar el idioma del enlace, es decir, podemos indicar en qué lenguaje se encuentra el elemento enlazado mediante el elemento [anchor A](https://www.w3api.com/HTML/a/). 


Para ello tenemos que utilizar el atributo [hreflang](https://www.w3api.com/HTML/a/href/lang) en el elemento [anchor A](https://www.w3api.com/HTML/a/).


Por ejemplo, si la página que enlazamos está en español podemos asignarle el valor `es-ES`, o simplemente `es`. Un enlace a [Línea de Código](http://lineadecodigo.com/) quedaría de la siguiente forma:


```html
<a href="http://lineadecodigo.com" hreflang="es-ES">Linea de Código</a>
```


## Códigos de idioma


Los códigos están compuestos por el código primario y el subcódigo. El código representa al idioma y el subcódigo representa a una especificidad del lenguaje.


Por ejemplo, el inglés de Inglaterra sería `en-UK`, mientras que el inglés americano sería `en-US`. Otro ejemplo sería el portugués en Portugal sería `pt` o `pt-PT` y el portugués en Brasil sería `pt-BR`.


La [W3C](http://www.w3c.org/) nos proporciona [ejemplos de los códigos](http://www.w3.org/TR/html401/struct/dirlang.html#langcodes).


Así, podríamos enlazar a los diferentes portales de [Google](http://www.google.com/) con el siguiente código:


```html
<a href="http://www.google.es" hreflang="es">Google España</a>
<a href="http://www.google.pt" hreflang="pt-PT">Google Portugal</a>
<a href="http://www.google.com.br/" hreflang="pt-BR">Google Brasil</a>
```


## Importante


Es muy importante saber que el atributo [hreflang](https://www.w3api.com/HTML/a/href/lang) solo funciona si el elemento [anchor A](https://www.w3api.com/HTML/a/) tiene el atributo [href](https://www.w3api.com/HTML/a/href/).


Al utilizar el atributo [hreflang](https://www.w3api.com/HTML/a/href/lang), el agente de usuario o navegador podrá identificar los lenguajes que se pueden utilizar y avisar al usuario.


Hay que reseñar que de esta forma solo indicamos el lenguaje base del recurso destino y que queda en manos del desarrollador. Por desgracia, seguimos sin tener una forma estándar de indicarle a la página o recurso destino el idioma deseado. Seguro que algún día lo tendremos :-)

