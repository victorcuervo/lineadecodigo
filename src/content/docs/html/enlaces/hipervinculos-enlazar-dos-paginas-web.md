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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIZNBER5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWHb7DJP050jUvADLH0WprNdYuHcQ9bA2gSbAN6jy4rAiEAzGhJJcpjE4ugW7U9Mr7GyocakoCS3eB2XLO85Z%2FKwOkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDEFs9ix3xUqe7SIouSrcA3Fyr6lRuT2eTD7t4c6sU8%2BcsoV21IqHFQl0b2NyQ49wBJA2gMjMB75thdaeJij%2F0JzQPVye5sYy4t3QuUkhh91H7dlvWfeVSKxg8b9rHSX1djv6Arg25Z2q7NJJMkrKU%2B9fwQRvB%2B184%2FTF4FGJ9oTrYqr%2BPeU2sGbrWWS6%2FOPyyVmNwpchIdLmj1eh0hw01Bd%2BM9IrLfdPsdZUVGwUU4m1fblzhW7SoJTrWKNXkn%2BPfhJR0hUuLgi34V3Kk1hPtjWaYeBWiAnw%2BTyKsnxvgGquld8LL%2F3p0qfqM4SBITesu3EBIWrBJD7BNoDQNtnK5Pzv%2FBIWS5ZiDPJ2JyDg935wBVGSwsICIUB%2Bpo4pRPxTXcPVAUdhh9cXtgovsN%2BeSTWivIp6Lz2%2Fj9xQwOEqBwKaEKRqpovH8f9EbwRhelJ47aq6wiHLhTwFTOhrPe8u%2BT%2Bn1NkzL75koELo%2Bd%2BRNxnIsJ490NpibZEz2Ie6%2F%2BQOGIB4mEeTxYfNdXsOpF0NJvaRCgXnIG%2Fjz9zUyf7QLWGKjbGSg3pdWYBC5jEZi%2F38yCnZLpC6Kh%2FXgnhWtf0bbOcK3kfoK7PUCdE5cMThaX09N78ud6ucFckHH6Lv7QQmEkXw7UCcG0ZpVd8oMOXB0ckGOqUBN9Iut5exh3pvDxihl87ESthBiuwn4F4g9i4DNUUtE5VBQjU9pyOakM4wx%2FMaA60NE0YQFHBcbcTHaPtWmzkFo4IpaiGF8Xj9BVHpUBbbcBfQl3xxLza4EJudI8OJXfQmGYVca40LJovWyqjdQr%2F1m%2BdFgfnz%2BiYVrzNix%2F%2BPrLl5kSkUpduYGGjasa%2FkvtabOXBI2eZ37MdUOM2REoiS8N2nBAPD&X-Amz-Signature=cc142dccb8bd16e2356da737d1baa5944eb736313cab7836fc6e0b2726cebd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

