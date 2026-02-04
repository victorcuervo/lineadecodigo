---
title: "Volver a la página anterior"
description: "Cómo manejar el objeto History en Javascript para poder volver a la página anterior."
date: 2009-09-02
updatedDate: 2026-01-11
tags: ["history","back","javascript"]
slug: webapi/history/volver-a-la-pagina-anterior
type: doc
topic: webapi
id: 5b5fb1c0-c927-433d-a514-424ef51c60a4
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/volver-atras.html
---

Cuando estamos diseñando una web nos encontraremos en situaciones en las que varias páginas desemboquen en una misma página de destino y queramos que esta nos permita volver a la página anterior. En esta situación desconocemos desde qué página venimos.


## El objeto History


Para poder realizar esto nos podemos apoyar en un objeto del WebAPI History. El WebAPI History son los objetos que representan al documento web que estamos visualizando y a todo lo que le rodea. En concreto deberemos apoyarnos en el **objeto History** y en su **método .back()**.


## Implementación del código


De esta manera el código JavaScript que tendremos que utilizar en nuestra página será el siguiente:


```javascript
history.back();
```


Este método nos permitirá navegar a la página anterior en el historial del navegador de forma sencilla y efectiva.

