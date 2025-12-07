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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4OUH26%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2lPptHmVHYIJMscaJdY853PGeeGzNZesNrMFiCrpdqAiEAxxg4p%2FL2tbTFHu9wNqxpg4VlKs%2BwHG6Mb5yFR1G2DC4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGN%2FrgJMyiG%2FeEcffyrcA1bMxO5mjSkZ7Dx7tOETWModTkeJE8hFeOBfLsCWzc0X13GbeYFylQmac7UNaZX2%2BVyji%2FI60s1hu6xb8c42kjadc4JPPmYDyWnR4II4UyoSFnLXKVqYAY644digeT5yDNhc7gtTbpn9zzEQ2AHEyr3%2B5vzy8BxUiluy8RhOYfDcb%2FxwQtWMqazqMFyhMVb1HU5clzonS6YBM5kTcgsC4fTs31H5%2BnTSPR8CC8h2u81QZuNdVkIDAq0%2FBK0eiTl4ZVVR7bxYf07O80q513jhDH2N2FFWnLEE6aLffwLe239pj5TzFObtYX8cgWujmGTQVzwB4eBp3jbQtGtBrR0wzbfZ8FsHHOU3IPQCvxvJrMiWTuaAY9oJlQ2aHrUcrIn5cLxnlmxt6b5mOHdIInZ4AOYUQoNnh2seHyEZORt%2B3vssouePORf7WpF0QWsYOSoW3OumibEP7%2FGjvrI%2FmpMl2BkMur8ujvC6M%2FAJSKaG3s3LZ68u9mNH5zjGqvP04VhaFD758V5BSp1hCZhDanxz6QvK%2BrMpvLShAecflNUImdyQsNoB0T%2Fpl7dKAHiN3MzU72Doul8LHm%2BgFT5DIftJ2ftJcQK921RQsaDyjRzXsQJbcdx%2FCKBl1wAQnZauMLia1ckGOqUBe36NH9HpvLD5jMw2SDRroYOZSqwUSNNQy%2FcLitDH36VcP57CU%2FRuTHxjotTVLIo39YwKVjPkMTm4iVe%2FggEgiaoSeMjKqT%2BpIx1apwuDqyXZ%2BzX3vo01nTBW6bvWD%2BH%2F8N%2Bxa4oajECLeUoTgtCZXtbaJsUj22jR15BzywrR3Yie7SvUaxGwUI2VZy5dlf1JUV%2BW8RyiuVjRfVhc008QhsodIPnP&X-Amz-Signature=5ce44fe2a4bb22b415c27f73bcb5e2912a9a995e13ba4c0e862ee05ca53da020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

