---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RXPHX4T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV6EDc23iNNBzRQ5k1uj4ST6RvxZYrk1ASK%2BFRPiHzmwIgHgPga1gG%2BtUPgWISZ4XitKS9Ug%2F6fPR4jMcXlB%2Fdk1IqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9kWqnvfO0v7thR9ircA8IirRrtVuPGJBB7gS%2BNw5giXxPai5cTvQXZKZouv5Ni%2FFUt%2Fauv%2F%2BQ6%2FOcNsB67hEfsFCcLxvtIAKFhOU53DdRx6W3DRTECRfG0GErjxC9PflRyRQuKvwjq97%2BD04anjwju84MzpTdISSWqT7IAegB%2BrUkEugkxZqy1qshKYHkbb6PEwODBEnJbbn2OrsDNAhhPGi7VC78bGWSZYj48aTNd2xQLZ90nIxn1FZGcK47SgnwhYFon3nlucfizHQ4AlV%2BBABVjUs5FdCX3rKtdPGoITdYCEwIUVCNQzNKA6K54UqguVAgCOy287XJ2HEcLL9Gv%2B2NdSMKLJje4%2FesSDqQLJy%2FclI04%2BntJWOiI8sh6Jldjgd%2BFRDGojkjBWbGYI4lLR%2FnH2N%2BaY%2B09K5yO0gIOM79pBuRpI9cEoGGl1fBUSiLq7kqZU3mRHBN7Ecg9DSel8G1tdvjsn4H%2F7%2BilDvq1nEW6SWBUZjHdlM66IypUQVUQwHSY%2F%2BrUXfYScols9zcwk8pQBwgNRcCQJ6j2kptbHSoM78IIcF2k1uOFny0zCvSbYQeFllGqMa2%2BMb2ci9ffJHaGBjXZYvDAgX88T90ku0YYlUAPiu3WfVpiYXMgW7sLgtX22K%2Fdcaq5MOX%2B4ckGOqUBnCp1uAKhXqTiOMQPD7GyXtQYkq8QxDgTysDbwejg7TwN4vkdWjPvQTspJYfa67xpB8CIXKrxJRSW186%2Bsr1Dp1hhBoIkNVIh9ezNfYSHoWG44WCON9RyIFUDQgWMzBIU5r1y1Qlpj6dY0aWNQAffeb%2BO8eqHWq2JDymq6IPwubiAiYFNYGw%2Fu%2F5HD3nhZnPoTfJossaVh8xx3Px%2Fttjc1%2B2f0OIl&X-Amz-Signature=d698bba63b92fa5a97a52201cc97d13d1ef5246a3234c656026e1676d489cb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

