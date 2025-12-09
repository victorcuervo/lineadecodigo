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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YVFOVB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T223746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjyI4b%2Bd4aFZMJxQOQE68%2FMxWpMv6gUm2E551tQ8wDCwIgFaCy2wHXu13BdEwK978XjHp2ky6Cmt0qwGPkkxUjDBkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCRf1rkdGjhfKQHpCrcA%2B34jtJA0c9x03RaozcYcWH0HGKXOOQY3ExoJkh2TEccHVwbIgZyatkAfT2L8qsIzXHvKYKlwDQY5%2FCYrjtzOn0ViTnpr1Wu2wGScMWZR1Tu6OSR1cCaAmmzCtztpZ3I%2FKuXDvw2yXeWfvuAGBnw4GbylOr3cdHvyPCs%2BtkdW8JDS5UY83y0QiN5CajQJ5fQR0YevBcvatFuhloNr9wMd3f7rpjFfYngU7BLo1hgz913nBQyEXpI%2BfMrpueEqtZpnztiIWJEBFZ4fDpzh%2FfdCHN2wz5dH3ADuGoqD4azkrAkNfSt4xbZD7gLmwgSYdmfi%2Bjbgh%2FnkhlphWPEMcUb%2FUF5lWRyBNvs4Gxrd09cIJC%2B0iM3N6MTaPWpMZWZmdQXL1zyVAqq1vWiZAB0cIjhClIiD8lEk8X0miIP3SKnPziW8apyFAOhoMQ6jOxc2wFndT3tXvB5fLZvFO3AcHO5INLUoEkyGodUdZkAoAnLGHAIUZ8IlZ3UrWEquzGaiTMucb2hHo74jDbYZx%2F6e3pmhJMQ8thC6iH8LMMMDIRgHKWv%2FGxP070La665tjb1MZ7aF8V3U9E%2BN6shZVt3j07Hi5yK%2BDDeO2DFFqmnRgtiwRlmfzU4%2BQ8h7NqfuSBGMMbD4skGOqUBiW3NxydY66JX%2Br0S5jAlk%2Fz%2FkcrA0vVTli2sBJEORuetKOvJzehRGcz54Ron9Dxo9J%2FR0ezTKXOTUOHu1pX1rRiT93BgTqGU5wYERhmbic1O3kZkwUoeRs8v8gTBrLnIGHCbNdwbOpDLqLZJRJx27c%2FicYK6Xnfq5GMFe7Nviiz493Fygt6j%2BcExAxrGgCnwru%2Fl0HBvkQ%2BdPIWKKsJV4hNwPDuF&X-Amz-Signature=2640a20d29494ab457fca59abc097ed20b798be84b4df1f75a4fa0bc2f33c57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

