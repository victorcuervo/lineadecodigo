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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP567C73%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXeaiOl%2F1Zpxas6U%2FGgbXWrPP184lzuKGAWCjxscuLVAiAhvx4AL%2BPn6Q1%2BwQCUT0xHBlgYch%2Fbjl8%2BDdF8Ds9w7iqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7lrNAdB71%2BjTHLRKtwDvnUTJ4sOuQTPah9x57sfPtDNbWcz%2BCJQ%2Fc0y9gEQigZlicIbNrGPNx6BYHtPo10wASXO5I1LYQHv3u0ZYni90K1riMMRN5ltkdNwQ03E3eJ7SDewPr%2FzdYuPc668k%2B0FYvDm%2BP3U5buyM9H69ajfIA6gj2Um4p5IBtIEtQ3u9EjAN4yeBgiv3Z31Bex6itKNPWGIBIrWMxosFdGCZavK028GKvKHMMZPXxBZ2T3lgi4cLqU2Sd5lODTLUxl3GtIhU%2Fmt4VKuetQjsi1vyjZ7h2UCTosU1HXTBcoymtH5huaBwRVrZ0na46DJD1SERIg7TR%2BcV3F6R1eUBiDO4XoN54wE6Y%2BADDSDMf8%2BiMo9qts86Yw43E%2Bt%2BYZL9FZwldr8OQXAP4KdCsklMmzSY%2BrnMx2eugag7V%2BhYziYNUIAYosB01bh%2B7AUdPisYlAyNrXD%2BmQq36yrvax8LcB5BqsYbjBOwi5aak2VgDd5uxpEgy8QgoZVaQ1RuBPQ%2BW%2FUaf9nFPiZirCrVSQ958%2FZ3hud%2B%2Bx%2FP3PRziANkYNTgHX6jmV1uHgBwE8ny%2FySRBilE5v0v6kDRV4a5%2Bo%2B8qeIG0gPUauIqHt8TS5GQu61Sk04E7XILQVKi4Jh2wDXTIIw1O3ZyQY6pgGkFca1Yz8kGTrGpLzu3LTeLNWE8eQdWhyhww2CxGMokUltAP8aUF%2F5KEJhvl4ygGAg2azGf8zLwUAIAmk7ouV3s06Dzr2rXmXuHehr4C2zx8b6awIkHV6kF4WfN5SgyucKE98CJQnUMHRfO1063P5uL5L8Dh%2BEC28AGhbPMjMJxdHmTX5tAJSsBJbYVx71KQtozhiRvSfnHyojZ5T1jTsmEJh36Apy&X-Amz-Signature=69e9408416ef054635fb6092842830c3788207fbc76f610f01cf8f695e1d66b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

