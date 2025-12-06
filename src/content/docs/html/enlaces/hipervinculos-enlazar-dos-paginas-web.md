---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YA37GQV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9pstKAQ320HpzZsRQ04Zxeo5%2BKPg290l2DZKuPzN9tAiEAiOX0vCWtXMmBFa9v1G%2B1w3Bg7d3HEWp0cCrX3mifIdQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBy6hgcwtWYp%2BdP6nSrcA1yqW2yF%2Fg02cevWoiFOCrs739yA8zhKcjNKacEztRW%2BEpGSQZ5mOCZ0WJKFiPhS904Mif3VZWjt%2BLry%2BITHZr8pFSR92VW%2FJE4cjiVmNfcMEfHRdkD3R1GWWQ3DhzL0NguA3WZnNflHJAKcA9yptw%2F4e6vh0i4048g1HGSvzjrF6S5BPT0IHPFTzrkGdu8EQ3HZOZgSSTNzHGsHyGIschyMB%2Bz3DEG9ykg9p%2B718AD3RrTSND2w1aI0YLtPlUbVAcu9sSIFkkQ%2B85enBKhDOptz2npzjg%2FulLDBQJBv2brDno0qwvV%2BD8qFKb9v5xYsqaeckPjr8CrP9gSpr2jYo16Tq73R0nXIshx1XOCacn4NTGkqsdzmhWdhDBIIKVBn9LCQcQ6cUKbafJMjicYHXPaMDaCMA8We9Zto6Re05JtqoBn9TgX8MJltr7bkS2H%2BHrzg3k5%2BnliGrQL7tR%2Fn24Kn%2BQtAZ3Vg5EoAwBIT4nwa0c8dYgZ78%2FAlsIxYIH74dIgdEjYlLjsDdfdykhuCs6fDwrx25QHHGAj5HyQf4X4T8JK1x4ereFKKSxo8HM%2BIMkIpA%2BZWTr2%2F%2BQEpNVvbmQ0DyJiq6LKiZnmj1payjZUdCl4LqWCCXTgnBBhHMNiJ0MkGOqUBIYPN49ou%2BkfFaVlPfojgBcCQ23%2BAjB3xFBWzgDSyU0xd7p85ubSsiXo815WhJe%2FYgMYIPdUWnrer9yGc%2F8e5rMDpye%2FPNUbYzZZPT9puIKkZcF%2FXuMSjg1jDErhwhN49oA0JQO%2BIy25NEx6KcIXS0QyjT6%2BX%2Bzc5JsCtMa63sMJ1YRdprUOB1OfOmdgMq6phnODNt8sEw169aOVYsDxbvhNcsB6%2B&X-Amz-Signature=dee8cd15965334162889aab2216f80e64a50ffdbde03e1980cfd0c64bb18ea1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

