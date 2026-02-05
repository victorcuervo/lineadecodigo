---
title: "Nuevo validador de markup de la W3C"
description: "Descubre el nuevo validador de markup de la W3C que corrige tu código HTML/XHTML con precisión y mejora la calidad de tus páginas web sin complicaciones."
date: 2007-08-14
updatedDate: 2026-02-05
tags: ["noticias-web"]
slug: blog/nuevo-validador-de-markup-de-la-w3c
type: blog
topic: blog
id: 2c8a9dfb-adca-816b-ae6a-f938286017c2
authors:
  - lineadecodigo
---

## Nuevo Validador HTML/XHTML de la W3C


La gente de la [W3C](http://www.w3.org/) ha puesto a disposición un nuevo [validador HTML/XHTML](http://validator.w3.org/), en su versión 0.8.1, mejorando al que ya tenía disponible en su web.


Aunque a primera vista pueda parecer un "lavado de cara", ya que el interface se ha visto modificado, esta nueva versión incorpora modificaciones en el motor de validación.


## Corrección de Código con HTML Tidy


Una de las nuevas características es la posibilidad de corregir el código mediante [HTML Tidy](http://tidy.sourceforge.net/). En este caso, si encuentra código [HTML](https://www.manualweb.net/html/)/XHTML mal formado, el [validador](http://validator.w3.org/), mediante [HTML Tidy](http://tidy.sourceforge.net/) te propondrá un nuevo código corregido.


## Ejemplo de Corrección


Por ejemplo, nosotros le hemos pasado el siguiente código mal formado:


```html
<html>
<head>
<title>lineadecodigo.com</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
</head>
<body style="background-color: #ffffff; color: #033b73; font-family: arial, sans;">
<h1>cabecera1
<h2>cabecera2</h3>
</body>
</html>
```


Y el [validador](http://validator.w3.org/) nos ha aconsejado el siguiente código:


```html
<html>
<head>
<meta name="generator" content="HTML Tidy for Linux (vers 1 September 2005), see www.w3.org">
<title>lineadecodigo.com</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
 body.c1 {background-color: #ffffff; color: #033b73; font-family: arial, sans;}
</style>
</head>
<body class="c1">
<h1>cabecera1</h1>
<h2>cabecera2</h2>
</body>
</html>
```


## Correcciones Aplicadas


Vemos que nos ha corregido cosas como:

- Poner los estilos de forma aislada, en vez de en línea
- Nos ha corregido las etiquetas mal formadas de las cabeceras H1 y H2

Podéis utilizar el [validador](http://validator.w3.org/) en [http://validator.w3.org/](http://validator.w3.org/)


_Vía:_ [_W3C_](http://www.w3.org/News/2007#item173)

