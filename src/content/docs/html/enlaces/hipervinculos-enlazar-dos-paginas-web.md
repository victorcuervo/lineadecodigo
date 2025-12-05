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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEIHYM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmLw91HVuxWqZiIAc97%2F06XZiXPX7Yv%2FubVLZwJTIfmAiBkGsUjcz1QTtbW2Lsm1LWC%2FKQ2SKdDbquwCpcN1ULRTyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMY0VrIDPqyOQI4aMOKtwDpM3y9JOYK%2Fxq1PieGouXCbIlHw7%2BcTanP3ZI%2FeqaORIP9txseo55XvyzkdCJaTEqoLgmcoyVSt63RmUpV39nqN9g%2F%2FZ%2BfMkVEj9rI0HKchkFMuM4PN9yiGOZqq6wKjUDv%2BKACDVEPZgvm6sRKuPRq2yFoKfInZP3qXmIFuF67QuJpLHW7a5iF7Gfa0hGaNMtjzlQaD3gJej2fos3NM%2FMQ6j%2BcHKiufUCgMhtoI%2Fr8WpkuFc9a1u6iGniW3A9IIvyP3bg3SQuBF2Qi3kkQi%2BYlpf9KrEUZNR2%2BhfESTCR00cNM4Bd6zYXaxJgmPR2qwlKbW1y3YPE272MUbC%2F8aaOG4ejqfMV3Tlr5S3bqzzHxfmVc2J0JzOA%2BuGJ69%2FkgDDUR3DPa%2Fwiy3b5MwyKQxvR15YGfen4gCIc0I4ZWQG7VgQ7LNFg1ciKKYEuV5KVmMLAArfJt8hdsjwSVVEUJT2q1%2Bfr4v7tcfNr7isY5RWgzU4fB9BIAUJLhcCQgeuqhk8kvEIEp%2FtnQf%2FkbBC%2FjDVI3xQ%2BnBdFJyDU6arAKN0OF5oCOISqm2mTxw%2FZtWXcWw%2BIPWVqHHscV7G2xtpF5S7MwzGKRU8t1w41Lj3G9nn9Q4g68NIgO8toQFtSk1Uwh9DKyQY6pgFEvFarw6IgSUQm90QmIXm%2BiKvhItvaLLPrwoqKJb8GMsbS520AI6ywXEhSKvGuW8wt20RqpSMQmWcezLEExbiHaz3qZENEdNNMz8IW5RWgDRXyeKwsEDTxOFbindRrMNj8SUd2dQyiCc4DLlbunmtfXty0RqarxSgUhVCWDQI4hAi5sdVzWgL82NoKDTvjC4FEgZfVQHeENicimfL9GobvuK1pStF0&X-Amz-Signature=c17c22a11f479930a55cd4c9cfe26e0ba53900c672a1a4e7ea5035e9816755c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

