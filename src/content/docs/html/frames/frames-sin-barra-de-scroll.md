---
title: "Frames sin barra de scroll"
description: ""
date: 2006-12-06
updatedDate: 2026-01-06
tags: ["frame","scrollbar","scrolling","frameset"]
slug: html/frames/frames-sin-barra-de-scroll
type: doc
topic: html
id: 2c5a9dfb-adca-8027-84bd-eecbe17f3e0c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/tree/master/lineadecodigo_html/frames/frame-sin-barra-de-scroll
---

Cuando estamos diseñando una página [HTML](http://www.manualweb.net/tutorial-html/) con frames una de las cosas que nos puede suceder es que el contenido de uno de los frames sea demasiado grande. Es por ello que el navegador adaptará la página al frame y si hay un overflow del contenido, ponga scrolls. Pero, que sucede si no queremos que aparezcan los scrolls en el frame. La idea es sencilla. No queremos que aparezcan scrolls en nuestro frame. Ni verticales, ni horizontales. Para ello lo que tenemos que hacer es manipular el atributo scrolling de la etiqueta [FRAME](http://www.w3api.com/wiki/HTML:FRAME). Dicho atributo puede tener los siguientes valores:

- **yes**, si queremos que aparezcan siempre los scrolls.
- **no**, si no queremos que aparezcan lo scrolls.
- **auto**, si dejamos decidir al navegador por el tamaño de la página cargada del frame.

Es por ello que deberemos de utilizar el valor no. Quedándonos la siguiente [línea de código](/):


```html
<frame scrolling="no" src="mipagina.html"></frame>
```


Ojo, recordar que la etiqueta [FRAME](http://www.w3api.com/wiki/HTML:FRAME) siempre estará dentro de un [FRAMESET](http://www.w3api.com/wiki/HTML:FRAMESET). En el cual puede haber frames con scroll y otros sin el. El caso típico es cuando tenemos un frame menú (ya sea superior o lateral) y el contenido. Nos interesará que el meú nunca desborde, pero que el contenido si. Veámos el código:


```html
<frameset cols="40,*">
<frame scrolling="no" src="menu.html"></frame>
<frame src="contenido.html"></frame>
</frameset>
```

