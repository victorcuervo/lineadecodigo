---
title: "Texto no traducible con HTML5"
description: "Aprende a utilizar el atributo translate en HTML5 para crear texto no traducible y mantener la integridad de tu contenido en páginas web. ¡Descubre cómo!"
date: 2021-12-06
updatedDate: 2026-01-19
tags: ["atributo","translate","p"]
slug: html/documento/texto-no-traducible-con-html5
type: doc
topic: html
id: 13a2e973-ff76-4d92-8b2c-28a0dbbfb279
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/P%C3%A1gina/marcar-para-no-traducir.html
---

Hoy en día es muy fácil que estemos viendo una página web y que nuestro navegador web a la hora de visualizarla detecte que esté en otro idioma y nos ofrezca, de una manera sencilla, el poder traducir el texto a nuestro idioma. Pero qué sucede si nosotros, como desarrolladores, queremos que haya una parte del texto que no se traduzca. Que cuando un usuario vea la página y utilice un traductor automático no perdamos el idioma original.


Así que, en este artículo, vamos a ver cómo podemos crear texto no traducible con [HTML5](https://www.manualweb.net/html5/) de una forma muy sencilla.


Y es que dentro de nuestro texto puede darse el caso que queramos mantener una parte invariable aunque entren los traductores automáticos y que siempre se muestre tal cual la diseñamos. Esto puede darse en nombres de empresas, eventos que tengan un nombre en concreto,...


## El atributo translate


Para poder trabajar con texto no traducible con [HTML5](https://www.manualweb.net/html5/) vamos a recurrir al atributo [`translate`](https://www.w3api.com/HTML/translate/). El atributo translate es un atributo global que podemos aplicar sobre cualquier elemento. De tal manera que los elementos de texto anidados a dicho elemento no serán traducidos.


En nuestro caso vamos a [utilizar directamente un elemento de texto](https://lineadecodigo.com/tag/html-texto/).


```html
<p>Este es un texto que puede ser traducido</p>
```


## Uso del atributo translate


Lo que hacemos es añadir el atributo [`translate`](https://www.w3api.com/HTML/translate/) directamente sobre el elemento [`p`](https://www.w3api.com/HTML/p/) aplicando el valor "no".


```html
<p translate="no">Este es un texto que no será traducido</p>
```


Ahora, cuando carguemos la página con este código y le pasemos el traductor automático veremos que no se traduce. De esta forma tan sencilla podemos crear páginas web que contengan texto no traducible con [HTML5](https://www.manualweb.net/html5/).

