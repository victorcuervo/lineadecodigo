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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634H2I76X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPwHIhbZOprI3TZhk6txkW%2BX%2BR5l14PFFNfHSghJd80AIhAJ4RREZjJJGxTjV1R4dkgrzWB6VKG5O2XBorUGF2amvAKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS31E9JO6MAE%2B6yl8q3ANQ6l1HdZx9R9jZf9sTUutKtRtJ4iXHsoThraPIVSoghMzYDMPvhqGahKCaqVC3e%2BoTPxro1EFvqaTS%2FfZ5v%2BsHtMgnO1suS2pX%2FVSnzbF0GPqLFNKVxWhi9Gm73E2OXBQehLZuM5OBH7bNe%2By2DoQMTYyUAJczKN5VVI%2BAtWTc4xXmjpd8iWuAK7natTBvRoLsqFpWyIGS2VL0cYrSD0PoqmtboSblJp2JyP0PhtrMIyf8Cdc3zDFEpZIKAVNfctws5m4ER3a99sCgyjb9GUYGYsJ7V7k3X%2Fno56PRpktTUnsF60Z86golQfiEQmiAxR62EaNy2SvFqSjTxbE7NJnkJuQsPlOHESlkzT96zgtFJNTVU13HU32I6l3iU85JlgAo3JigrLC27JZaZTt00P5nkumCJd%2B4m67ZONH5K%2Bos4hikDX1Jnbyfbvtcu%2FkbNdRp4cEJJF2phtGg3zNy3lixsdpsPDpxxc2%2B0LjvCDO2eoS5IneIt8LwPuhub4oy6UGE18eMMn2GaHPraI8nTWdb5%2FIZDy1tMo%2Bn11qSz%2FzmcU9lOg1Yh6dG3dHNkmdDvvfeJN1rWnDAHZpc7EWCkSe%2FRpdWCwodO5h%2BQQew4wE1KnZtCqFgHNFb3n106jD8vOHJBjqkAYujatBNZJTIj0ytQSRiehQUch5Wp2y4ys9xj5ooJv90Bjc4respJCOdLtPE4ycjEKTXbahfAn27mE9IJCxysQWQe%2BomiRYJs6CZJXsPyc%2Bdc5WiACL%2B%2FedNZV1NitckkTCo82iBhyAEU8zrAkVI1Y42j2mhQqh9Hkv%2Fjvyr%2BcHI50hr5oXE2%2B6O0G9GYBEoNfMYk4nhaRn1kVCScjXEQuw38zWW&X-Amz-Signature=fa68a4732b7e4f5c35bb65ea21129b29d69d29203f358da8254712349f78a2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

