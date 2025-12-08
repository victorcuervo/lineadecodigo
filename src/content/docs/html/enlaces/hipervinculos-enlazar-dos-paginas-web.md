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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XH6SXD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJGdsDR38z3zhXTBYfkhlLTsQzV%2BZqYbVi1TeBThq0TAiEAk3z57rG2tM98G7IT9soa45I5d8ZKbkKsmteGh4AJCYsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2B2N753BTKccgvbFircA0kEEtQgq5Z8ceuWMakEIGyCiP6Z%2BJHimJzYHOv5eD80zq9SM1hAhPPF%2FyFLlqGx5hre4GQo6SfRkw6dNnOaPuMNiP3Ar%2BhBmbgyODA5T17%2FAM%2F4uK8%2BVxl9P5%2BGnXnIvCTk4h7UOnE75fXvpjZpNDtMa457fUi7qgfn3bGkSJXG313YdVAvdT6%2Bm4BT1Wg0y1w%2F6iFIRBHBTsusQwoal%2B3%2FOcAKTmWKJwmgOZPU1Bch9GcdehmcX7RdVA673R8GvLbSmyElpLeNQEq5vZEhjfXdrSIyodKmYeqPcuxUVBJRYjZiYHktjhBx3hzUxbHzXGws7bwWaIgTTqy9JEspkuc%2Bekx4IyvSoAb8wW%2B2fv0vi%2B39HkdiSA2pPuPIGCbvWYSNC5H%2FE%2B0uQ0k0Ue1Id8aXiBvovi0PtLGOJGtIppfqZR1ex3wAkk8u8tlL%2FwvLkQHsU43WLPNOGsvXZtdDxmdPCjHGEnC5I63J6kjdejKEYWzen9oApUDGRUzul5sT%2F53wrCQ4UtJ2PB38jMaLeZAPOChVugyX8BnmDesPN%2F9fOqYGfuQasvB1HzJkIua9lGP4jiy%2FMBQkZocazZ4puz8BtxrcSUYbHRgfLspOTJ4EXl70s2S94tM3sOmZMJ%2Ft2ckGOqUBW5L7md8x%2ByIFyHp19QMCTZwH%2BPrTgFYAcyqGZmymp0DuAe%2FSyBaik9a1zx2pF6OjxEU4vUkWquvVhaOcnk5iyJS1G%2FMfxjr8Lwe0GKnV2hicFwS%2BMJcCiHj693kqTXEZCkqO%2BtaSauuSaSluX5xvKiuHCm%2F%2Bpjxi8P0z%2Fg6aGHtPq26Y4npcHj8zm%2BvMMjjXsGNYHuPRdy%2FMvj%2B3K8UVJzhzDzmg&X-Amz-Signature=5dbf452e2da45f64804ea74b6304fe60195dc4bcc09ba9bd296f6d5906ddfdf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

