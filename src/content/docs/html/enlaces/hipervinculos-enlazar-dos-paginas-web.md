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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3LPDVJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWlx4zNjs7Swr%2BRe%2FLqJF1r0rWqAjXMKJ73ogd%2BFym6AiBv8TSrvjk9HTInVhgM3M6jxUUWMSNNLhqRdjhPxATuFCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHU0AjVHUix77xj6HKtwD6ANTM6SW6F3%2F7BVNG%2B6d%2FhsiUzNIVpOTYhgpQ6%2BXXZ9OggER0cNbHams7oXD3CDURfv%2FLIgkU84NZNU4AtTIiXN%2Bm6Nr%2FX6cmVGN7U%2F%2FFJ7VLy1l7RhlUbIeroLmsj4WcAbZqmCMqSjx0GY1GKDphxyaBtP4xnWLbD7oQrqKuMOLBijVplxyCuh%2FsDu6VN3Ha1PWttoiCUtINdjy9NwAl1LNfLeElCrZJMLPuCBVub0VT4r%2B05KwGXr%2FR7LGwKb0z2p8cVe7Rcg0WZ9zLNRM8wDJ6ugIFQwco%2B5wbNxBnCFSlOkLiUAPRH6iUqaXDIjgwfKeyIf9ruyOGVVCYjB8Jkl6q4i9XOhgEjHsRLdn91Tw30Mu2jRFDjgSHBWJtnbncfsTcPHSJPXwT0iu%2FKbdchLvOQcfpC2Mr55VGyQregZgC0zGUPuLjo8TDTr8Rzz5sKbzVqr2FfSiFnRQikhtS9cAONT1a7G3Aq%2B2e5SDFnlhBHBlggLG%2B%2FjKwd4WHL9kvsqBvWCNOmzYab9UBDRQaIdubtOMCggPyGaJlqjq%2FVeahbpM7%2BiTsf4Oyk3BOf8sxO7ncCCg0SeyNyEVScxrz%2B0UOL9SqJlq%2BaqsUdcpZYLNN8%2BDLKoO2yaNM1Awm5%2FPyQY6pgE3ILceYs1Y6BK0%2F3a2XD11vUKpst33YXuWwzqW3pwrQvgBIDsc0e7O%2FeieLg0tShSlHfHBb68kR2jUrHQLems00nyY%2BVz9KyFaNK6P0bwvHromB7QlA08iIpUD76ayPvQgRShTk9agT4rZ%2Bztl76UUYn%2FxsP1NbDJnw2egXv40R1TSRqRUJvUvs23WjYBC7oF0GkIHBmVdXcEG%2BOT1IS6kFTtQkjO6&X-Amz-Signature=58ccf153172bec8c2ab75632670a9ef6eef3fd7b5f42ea3b79a5f043123478d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

