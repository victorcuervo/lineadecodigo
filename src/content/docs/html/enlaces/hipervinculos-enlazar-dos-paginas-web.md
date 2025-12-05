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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSNXP6EI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqhIBtVtaOBXFImvibK8sjrZA2ceWoxbrVIU1knmPieAiBWvWyJvlxS7TRvf7dt6pTKR2%2FjGIQUGmibTocI9LrYuyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM8YKt3bgU%2FddDsewuKtwDdwTvrEIErU%2FalvqFzKfMFWt7VWzJVLwkPguMWvfZu4N3yKFsoW0zBwWeQ9rtV3G%2F0php%2B9EBvIWfw4tf1SXdf4L0oi%2F6ra6EcsJSldvX06Z03Zyu0%2Blb6K5fMgPAuPPnUl3HpprD5X5UrmqVVX7VaYKpbk73%2BRukyWkrpwjo41l5n4Ikjt1MrYddWgf09T4uZ0D2PclJXGHEAao6FaMiVgM1uiAbWwTnumBygaSl9xH0PtRuWPOYGFXnxCpLcNLO1lCJXNsjXuCSdKkNg6MCEN71oxvoPcDuZEMuua56P8nWOrXeldnk7IKdAC4l7ayy9M6ho2fIXrfmGl7JbT5kUxlJFOWOlm7mpCZU2O5eEcrKpjtM%2BZVS0Qpztx4NSKgAyRiSch75VbnEwYOqEzeaUHljQCsm5S2rOmFrxctoN1bbeC0xoPsOxe0ItUwjpEMu042UdKkQyp2yShEyH3jjgmCJGXoeV7xbx1swRWjywDxiFffmqv6L2DnZ2apmq76MDeKnaX8Kwt03kwPjKXIi%2FKkWCqqfR6fU7jE90SSLSLDwDtJS5ixxKWUmIrvN1s%2BYsOJOAQBbPKZzndNHNd5MbQpALtyEDGlKuxwknqrybeUIHKvT0h16mddRkOEw7LHJyQY6pgH6SAta%2BCBr2Dx10M95VFkJynXxyptnxfxZZsnxqq8%2BxLXEewGvgaKpjwl6AaV64p%2ByBujUxEEkaVR9%2FX1gV41%2FMispn1RSZe1vRDBLGlMG8oLRp3OXAvDWgiFEP7V2aGxT3lOO66wojumUjDDxcTOXaTJ3FiU60SXjgPQNhePB64htQi6FC3DH3KCWwh2tssSt9nkKCzERyCxtBo37Gfr%2BpWNQLfgw&X-Amz-Signature=329f9fca90521c5f3902b24f20876c9f4540d7f12ac2f87515f5fb4333f1dfd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

