---
title: "Encabezados Bootstrap"
description: "Descubre cómo utilizar los encabezados Bootstrap para mejorar tu diseño web con tamaños predeterminados y la opción de añadir subtítulos para mayor claridad."
date: 2015-07-29
updatedDate: 2026-02-02
tags: ["h1","h2","h3","h4","h5","h6"]
slug: bootstrap/texto/encabezados-bootstrap
author: victor_cuervo
type: doc
topic: bootstrap
id: c041b872-f9e9-440c-9491-8a241db0bee6
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/texto/encabezado.html
---

Los encabezados Bootstrap son muy similares a los encabezados HTML estándar, pero con algunas características adicionales que vale la pena conocer.


## Elementos de encabezado


Los encabezados [Bootstrap](http://www.manualweb.net/bootstrap/) utilizan los mismos elementos que en [HTML](https://www.manualweb.net/html/), que van desde el [h1](https://www.w3api.com/HTML/h1/) hasta el [h6](https://www.w3api.com/HTML/h6/):


```html
<h1>Encabezado Bootstrap h1</h1>
<h2>Encabezado Bootstrap h2</h2>
<h3>Encabezado Bootstrap h3</h3>
<h4>Encabezado Bootstrap h4</h4>
<h5>Encabezado Bootstrap h5</h5>
<h6>Encabezado Bootstrap h6</h6>
```


## Tamaños por defecto


Los tamaños que Bootstrap asigna a cada encabezado son:

- **H1**: semibold 36px
- **H2**: semibold 30px
- **H3**: semibold 24px
- **H4**: semibold 18px
- **H5**: semibold 14px
- **H6**: semibold 12px

Aunque estos son los tamaños por defecto, siempre puedes modificarlos con tus propias hojas [CSS](http://www.manualweb.net/css/).


## Añadir subtítulos


Una característica adicional de los encabezados Bootstrap es la posibilidad de añadir un subtítulo dentro del encabezado. Esto te permite detallar o complementar el título principal con texto de menor tamaño.


Para añadir un subtítulo, utilizamos el [elemento small](https://www.w3api.com/HTML/small/) dentro del encabezado:


```html
<h1>Encabezado <small>Subtítulo del encabezado</small></h1>
```


Por ejemplo, así podríamos escribir el encabezado de Línea de Código:


```html
<h1>Línea de Código <small>Aprende a Programar</small></h1>
```

