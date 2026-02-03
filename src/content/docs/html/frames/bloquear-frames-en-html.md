---
title: "Bloquear frames en HTML"
description: "Descubre cómo bloquear frames en HTML utilizando el atributo NORESIZE para mantener el diseño de tu página intacto y mejorar la experiencia del usuario."
date: 2008-02-11
updatedDate: 2026-01-21
tags: ["frame","frameset","frameborder","noresize"]
slug: html/frames/bloquear-frames-en-html
author: victor_cuervo
type: doc
id: 5d18f814-5c7a-426e-9799-6624583f2999
download: https://github.com/victorcuervo/lineadecodigo_html/tree/master/frames/frame-sin-barra-de-scroll
---

Cuando diseñamos una página con frames, el tamaño de estos puede ser modificado por el usuario, una vez cargada la página. Esta modificación puede alterar el diseño de los contenidos de dentro de los frames. Es por ello que tenemos la alternativa de bloquear este redimensionado de los frames.


## Atributo NORESIZE


Para bloquear el redimensionado de los frames simplemente tendremos que utilizar el atributo **NORESIZE** dentro de las etiquetas [FRAME](https://www.w3api.com/HTML/frame/).


## Crear página con frames


Lo primero que vamos a hacer es crear una página con dos frames:


```html
<html>
<head>
<title>Frames sin barra de scroll</title>
</head>
<frameset rows="50%,50%">
  <frame src="pagina1.html" name="frame1"/>
  <frame src="pagina2.html" name="frame2"/>
</frameset>
</html>
```


## Bloquear redimensionado


Y para evitar el redimensionado ponemos el **NORESIZE**:


```html
<html>
<head>
<title>Frames bloqueados</title>
</head>
<frameset rows="50%,50%">
  <frame src="pagina1.html" name="frame1" noresize/>
  <frame src="pagina2.html" name="frame2" noresize/>
</frameset>
</html>
```

