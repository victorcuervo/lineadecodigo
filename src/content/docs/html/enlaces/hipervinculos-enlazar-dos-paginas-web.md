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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPK3WVCL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfMV91%2FkQHtvlgbl2nanhOcum0kqeBQ4CrX4qZBLa0ywIgaT%2F3mr1yg1CUjt6R2d%2BAFx07Qb5n2Aqi%2BKbPci9DgsAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUH%2FW4ZEauFGR%2FohircA9SZ6nXcFv0ricrOMIzTCDadyydc05JhjVbjTy6Gxn1NTE3pzF4HiolTOSbv1%2BVLYDlGpgxrEd4gHr5978Oz0Ss7uYNx9RdG4mMUOdhDNkSJcGxXgs8kFHfZu5rpHQlUaZuyMpH5wJjRHclHH2C%2BrXp75fq1NMWTNN5EquB3nOgiFKcd5WL94D6APPhf5iQ0UYrASGWyTvwSAtvk4oeLcvyvf0dVnkiGpiAKOY249FH51Cl2i10tM%2BNz9h8jWJuvJW%2BBpRJ%2F6PVRSWtdsPn%2FssrzbgchSwQkDC37qHE%2FQAra8fEf4bpV8WsWMEt0iGLnW2O7a4pFL%2B3ngc9kjVACDZ1Eey1dviZMMx4f%2FTh%2FiDef9TN9%2FmGEvWS4Vdh2YANOQaAx4hazCIM7mA%2FiePdxyDk6DVoZENbnq9ZofLMxWsMSYsQX%2FRH0krhCYNCMCMuhdyuh%2F9fO4KQt42u5TBLKI7mkLDGDq73vY6KDbE9tnvZAavFUtIYmV41YXSvznmzhtXk7hpVwNInX4hDg2HimWvpN2kNWDx7dcU4kTvzEXWKyD31CZUeBnsg76odqxXARpDkJdQ%2FeikMjVZb4RKCST%2FyHZTiPjQqOn%2FTSaYMIBtJrUzDXhsCrRqHfqb1kMM2a1ckGOqUBuA8RkYfbZt49X3521ms1rVTgtCxCsh31VcnINIZXXNTnwvLm2sjoJOmKxjnNV6X%2F1b%2BW56rLKKDChYjZxbzpLV0XNMWDbp0eDJmWzwTUlgnpLca9ZNgrS7EYVV3ESkG2UWGy%2B6YtIrCk%2FDgrziMA1IknpNCMp0ld9t3byjZaLdlMtBt75NPPeE%2Bt3LzTMLGQl0eqFI1%2BgavhrZE%2BlRVZ%2Bnb8ujV%2B&X-Amz-Signature=1fe6974cfc9cad3da58c7b3ee3fcd361bd21985d92bcf4ef69fbd8ed04de5d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

