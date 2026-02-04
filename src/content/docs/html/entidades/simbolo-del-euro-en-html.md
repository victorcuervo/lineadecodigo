---
title: "Símbolo del Euro en HTML"
description: "Como manejar entidades para poder insertar un símbolo del Euro en HTML."
date: 2007-02-03
updatedDate: 2026-01-07
tags: ["HTML Entidades"]
slug: html/entidades/simbolo-del-euro-en-html
type: doc
topic: html
id: fe18dc28-77b9-49ca-bb53-a83b1c03c360
author: Víctor Cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/texto/simbolo-del-euro-en-html.html
---

Si estamos haciendo una web donde tengan que aparecer cantidades monetarias, es muy posible que tengamos la necesidad de insertar la moneda euro (€). Sobre todo si estás desarrollando una web dentro de la Comunidad Económica Europea (EU), ya que dentro de ella el euro es su moneda oficial. En este caso debes de saber varias cosas. La representación del euro puede hacerse de varias formas:

- Mediante su símbolo (€)
- Mediante su abreviatura oficial EUR

En el caso del símbolo tenemos dos métodos para llevar a cabo su representación dentro de una página [HTML](https://www.manualweb.net/html/). El primero es mediante su código de carácter, que es el 8364. En este caso la representación dentro de la página web debería de ser la siguiente:


```text
El símbolo del euro es &#8364;
```


La otra opción es utilizar una entidad. La entidad del euro es &euro;. La línea de código sería la siguiente:


```text
El símbolo del euro es &euro;
```


El resultado en ambos casos es el mismo:


```text
El símbolo del euro es €
```


Una buena web para leer más sobre el símbolo del euro es [Wikipedia](https://es.wikipedia.org/wiki/S%C3%ADmbolo_del_euro)

