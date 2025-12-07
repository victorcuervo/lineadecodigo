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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQJ3T3R%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDROIgcl3nvpCU6kMb7GZTK%2BlbpVDOejnWeCdW9%2FPsYqQIhAMS1VToR8l8CTAy6Wg4UFQ6wBsNnQuaZgAi84jy0SApZKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXM13U26KY%2FPhY4Z0q3ANTHDKcOJzWiQzRKZWPH1UEJqfG8%2Fvs1HzYzO%2FeNkSIYoLVnISnq3I%2FryTxx9rIfi2qQrNkRs1DpUeH35Hv03Jf7ZDtOfz4K6N6MrfCuFX0Cj2u8NV4VDix9MTUvj%2B5q0CFFJTNnka8OC4SVkAIn5OfHQWMFqXc92zPm7tCtGhIndYkRRPYLg6ui1P%2Fr2pTofMS4M6xtykiY8W1%2F5IqXtGBncMuZb1uavy%2FioLRaVoczZmrXyhv53Lkv%2F%2B0mXvpFOM7dQLLYqgB6WknFXyEbD1OklPevEBgCjAgWeeleR1XgzhYMLUHLFqFdFNoqSGWU62hzH15BIKCQtWdYU34zr73ROGA22LLIFs83lknZtfs1hRqzsUbh4QJ3Tvcg3mEaCzWa46Yi%2F4OeqI9UvHpYJmb3i3u2T%2BgnVIiRgY9FP%2FpHyQbIWAzKiIcg0eR1ic5w6m7ZsxSSatNsRKpFffEAgq84w1nBoV7wxdMCKi2SMEhbZVVsid%2B1rbrYDKgmhH7Cs%2Bs0nHZIYX%2FAFt2LNrCV2%2Fes0dbNt36u%2BNC8IeNzThBFSqiyakhBxzo1uo0XflaQ7LWQlWeqYILsq%2B2ns5uQcV3gDpoFMi6MBIfUJOJS46%2Bh%2BqjIO4kkecuqOgC%2BDD1%2FdLJBjqkAZ8tckBjYgolzN2LNlD3XKNvE06%2Bu%2FWml7ahOd6CX0fkTHxCQm7AWZg1OjBXdRhA5jw64vSnyfIfmPs%2BCmc6vLkWnW%2BxZq0btH%2BZ%2FSG9dZ%2B6EN%2FSTw88RtzDOi77ZZTlCC%2BdNedQSIgJjyTUUiFFH4JMz%2B414BK%2FzjxxwwkJQu61C1HJ02j%2BFRvXYRNfymG5z9zrbKZMGZH8nx1U%2BhLZmKefIVFi&X-Amz-Signature=fb3ffd5a1ea3539f843f95943540896f25fe5a6633fbf9dfb42f49b34e2f865a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

