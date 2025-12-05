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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV3SIK6N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyCkHB2buYv9ToCA2LM2XwWy9hKy8f84QTRliytqu7GAiEA1g%2FKd94c5rfnQZm7BEGwPUpuStwpUmC9uYznqzeKk48q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHdH1bw5FSomfHh%2FzircA%2BvyZyoL5pPQDDMr2JctzSewvThnIiB5T7tVE1byv3wz4RI3%2BgGMygtrGVv0pt2%2BOrBitkuAqLC%2FM84%2FWgEy2M3rYXGJdiAvrdIiMUCg8T92XFGRthtlJZVReQ7lZZWcoz7LOd1Rh91hDKaidi175Yw7rI%2BKTOimg9FD4lWaa8Nbkub18DTzWTgWMXMMMqm1geojzDObBzztaeNjnDQck6BcYOQTFcteDWOmLf8XPNyheA5IDJ%2BzOUEk1%2B63kxWIbAwANTGT4bvgf75s4Rtkd7yq1qtL1JWu53T9ANKjhCAIAy%2B12Y7SVkYtnw7LkNrSkc14cVAvzBg9wKV2rVLUa3vl8L2l3u6eIw4X6MgfieVkb64H6Jfc2zRsAN05i2FiMKf1LQag%2FaUvtV%2FsNYpnXEkB4KCzzZSp2gxJCUQLrH6AGMnhfCZJsUjJBj12I%2Fz1ll26e%2FosfuAUK3Y1KJRMbk2PYcABfsaV1LqQYkrev5BOWZZCj9ZnkLsB9tvBZwkhRwViKakue0hzJMuCCr%2FAXxPnG43jt3LIpu%2FuMGDOTR2soBYQDxi%2BxZLkJzTamFJCKL86ATzcejIDgyCQs0PcDMmLBDyZZDBOg9S6gHD92JrM1bfk%2BpJkylBjE%2FJDMO%2BMyMkGOqUBNfnA%2F0xyaAKIZCEwjRv%2FBPKiOg04XTMWHtWSazJJEntgKNGgDU7DDkVdFstM1v0oJwERCUhZbyxh6WIG9lG2%2Bw%2BGE%2BDcFX6n4rDYdAFqpDyWWXpm4qmrHOBJhXogzDzmiF47499esEenktKBcGs1p%2BN0SSV89Kf%2FB5U1xNKY1N4jwKY5H2VQLAgDi8jd4%2Bbk0mNAJs0bWvDgExi549WzAOc05k43&X-Amz-Signature=cb384c167daab6d3cd8857ebb31db78239ffee1986ff88bd2089bf9bb13fee84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

