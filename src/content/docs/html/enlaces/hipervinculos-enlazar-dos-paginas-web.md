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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4TM2BWJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaFMXE6mgCTY1CjuK7P%2FcSXbu%2B%2Fl8x%2BSLLpgAqgfz3PgIgMdwhhljrobO74IXCKg%2F1SiM1YGQNei6TUeANHu3MmX0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPN0PdRVVtyo4arpvircA9Gi1nYtgYEjSHFeDNA%2BEb%2B7nG9l5zpfi5ET%2BDMM%2FLAUxAbOxdKAgktJ54XouBSeLXAx3XPcDnmDa%2BcwXLZWZB3uanE%2FqThli%2BahSdQcHsI507Lu%2BWqHbO5H42zvPYlrvcTjJOOrtJPqWqaP%2FxsOUmvHbWMi2jJecMfUSMsiBNflxEnRqU%2BNVLhY2tGAaLKLyjbE%2FyNabK8qCqt5IXl%2BZqxM4LS2w%2Bl180J46t7IRdXsbjGperc9SNF286LKbrN%2BcsXu%2FGkKXinCnSKXPbD48InAQKZIGq86VhVi8vLHywzv66X9GtuPdlUp%2BHqPvKLJCiBaVQu1R3IJSqbb4yeMfhBVuftQ%2FjcQf9XHLIxCjTYCtu2IJrGYlYrQbYUf9Tdk1kQ4O7Co3zxaVb4niuwVRv02XkBKg6o6nlSgP8kbT%2Fd%2F2W1ClKWqIIVSfcomEDy%2F5MnNt6x7fcKyBIED%2FnhsVlLNZDbTHM3s6biXskrV7gSU9rvKN6QdKdSa2VGrAqf%2BcA5rMVV7EtQMQyXHyQ2vw27IQFRl1SbPP%2F4jm7IheEWKxgiRVaoj3zcFZLqcpnujytZ4tZUSgROqmQXkxghQQN2DR%2FULDioTQRYUdBH0V1ZorzpM8jEidVsW2kFHMKTQ2ckGOqUBTL4SepqqtnKgSVzBUhLygAZSQ7LXkwPgF%2BJjxczNc7TxsZBnoq6P0ITYOWj9z%2BlGup1nxis3C3gAUBs3YI1Gqqx%2BOQ2nZmw7WLfRHI4s3evR0yZ5jBqh4Ma%2FabqWp5Ugh9eC9sIiN%2BwVHyO0dr%2Fr%2BYvsTToUg6eQfYs9aBubaH7JW8M7Cxj4jP71A21ciSkZQXAXk8pGl7dsEweT%2Bu9MULGYjIzm&X-Amz-Signature=e1d1f9a1a4fa813f0cd9e29f149912cfe77046a260d4b089a119744f6f7b5578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

