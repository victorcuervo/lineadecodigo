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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFDRJRZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiPFtgSDwF6251H8I0NqNgY%2BP5AMHLFsEvbo3kfaupNAiBdC4npUPShN8qlbnry%2BmExdpccHG%2BCzmn9PvOgob6deCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMPr8YOVzHJu7lqsIPKtwDQy1ymnULHSJz8RqCUhz%2BDTMIeoQ4R0Kgr9GIp3LQcXRqkXVkR5Rs%2FsldwVj1HmC9Jtw77LSw949fVa1f1qz6JvZnY%2FVspc22bMjjeZStAznTA25K1fYfMmnNkGANNq03%2FTp4ZnF5Tvgjvee3kRu78OG0L6XV8Z0CFsez%2BE45uoqTMlwbQtVqk95RMhPipF%2Fe%2BuEjqsQr7fWbXzz3wzwJa9qzA1AWC7fDLrUwHGOyt1W9Sn2ZZzIyPYLbtr%2FpeJnIrpgIm6UZc862zGesN412U%2BHDAEgn3HLXcCSAKcV7nCZBaqTv%2F8Y%2FE6BBQIhaSYMJYaOicwGXLfs5uljg%2FMphgp2zvpPxg0BRe%2B3kpaHU3Cn3WBIiuLpODhIqVfjUxx40maqoSO7WCnCAv%2Bz0CU%2FEH%2BFot%2B8aiR%2BiY3ZYAYGR1ge8O0U1hGHJ8spyGbXuqUKJ2ET5shCDYUHpqXsnT4bD6BncPVkA9D2BZa4auS6xZoctIj93abTErn5l8K4Zyb34wNBZG8NwnYG0%2B2qHm%2FT7wCSnxnlDKjSsfYpUL1RL8Qlk5DaSbinbZuqrPDCMuPTSUsbve4OKsg2Aqnnb3ITEP886TUNbT%2FF7fbo6w6wucxaWMhT%2BQFzafgtOLtUwl9TSyQY6pgEURb0sx6ntWtMfJBv6OWyXlE%2B4zOwoGnztni2H6QpcRea7Wr0i%2BsUkM7nzrIsC%2BPpd7ouD3ojCmDcW342RL%2BqDHU%2Fodv9NOlwUamHDPOyUAwQ4TqHHwiWstBFs%2B19LZagvM%2FSMtG7Sg40HvfeBjNk3PPulUcnT4%2FdfmhFJ9CeakYr2pwVukugXiPBYNpPcDarulfR5WvS1TzSjfK5tcmnS40HusSoQ&X-Amz-Signature=4725f6af1207e367bc58023f9f495a96ad957eb5e86efa85c4218c7e7025ef90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

