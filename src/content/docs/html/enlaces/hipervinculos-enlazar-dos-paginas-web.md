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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHZ3SFPF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfbWxEH4OhKJhlV9IeJLMUs0Nz%2FzHT06UPO8k2k4bzkAIhAJi%2F2pzfIyiiwQdA6w4EhCrOmC3vUASIuzbI6mg%2F8MOVKv8DCHUQABoMNjM3NDIzMTgzODA1IgxAt3bnUxvgcg48wWoq3APgAgBZmrhycMT%2Bn1QnnfVBUfvzG%2BrdjsvUVFu009q%2FoGS7XmEQdXD7R9w9jQ0zPWggDRtOVBqetlGW1EFwCs4XseRyjt%2FiWkqvd2m8zi0M8OhBPE3mbaqZhrTCYi2fTIjufrSXTb9fGCznk3t2l2OGRvAyQf4FeuVa9yOIhgV7anvePuGHP0fHDTYKaEX6rup6wIvNRzKw4Nv6U0v6k9KuCFPjn3DW7tIjnDq7lEUz0ioWZ2R7Kf1KQpmEJSuSYkT6lPoY8LAJIrdVcvjxpXGHIseeQqbOIsud0r14zCEiDV%2Fy5j3lTMJfWnfqxtAbzJseaxZv0Hy%2B9r4o4cE%2F%2BDibPtxPsLhTrTdaV2sFijixlYJ7WLts2IyqhOadvPGCEb0M2T%2FCcy2rg09peRcL2PvLKqu2RPULOzlbFacR8C7hlOFMqUNmgyFmY2DSqVy9r5GLkXbIswNE67qG%2BgDixHPlps26jpptPjBkNvUfOFseaRsqRWEgCsmQrSv6fCnFLEt6IPlT7dgPO2z90zcFgDJLYaYHZWY%2Bmev%2FpGwTr397PQtBQ0pialN3qykUqouyM9guZNbSzKuKnzpsQ%2B6aDB6CGc2OKYmuoJasziaRwjFpW8BvB%2BA2LvX5ReLoHDCnptDJBjqkAYUd7GwAY9G%2BpOJFz9Y1AAcWX2Iah2%2FI3l%2FX%2FSs0K7MvHLIY5vuA02syiO2j%2B%2BoEqDycMGhWV%2BUfQaSk9AvlIf%2Fpob%2F0SL4Kv%2B9T%2B3cYFgtDn9rbnIdiKtNWE2JzhOGgTOoupfdb6iMWXyTncE9uNpZFPRbJb%2Bm3mXIK0ToHWnl51s17zRVdJds2kkPXojF7NCv2EWvWFZZq63mptxN79U%2BmIzkC&X-Amz-Signature=0dfabda40aa2be4777de62b19acaad4c711ba8e5e0d89d94367d8595d95ddb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

