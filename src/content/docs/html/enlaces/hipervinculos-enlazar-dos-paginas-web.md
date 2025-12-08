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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEV32OFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZz0DK1BlUHECY2KCl9tndnFUjDzxdHWCTOE68eLd2ugIhANPoLwAykzXQCdrIFOnRxnOLWfSyHFeNFi%2FdzpqtxGkUKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyjnOxxUKgQGlw8bUq3AMuTd7ZTIK9qAGFNmXbMoEgFx0TKGtsqRkhYxUcVQZsDKkXJgcnfwkTF2W6yhAs7y63Xt%2B6yb67d2OZ7qblBUUPcgjvFpPjX2vQr8xYSvXK5qn7b%2BbDmew79Kn9lLAWR9kVn5Ko5B8Zo%2BhrctROKMqq3hNmA0RAivFZQwfWLC%2Bn1A9gVvovZb5isEwS3NNiGBYnRMpbYfn6ee1E9vFlteSis3MYliJduZubTEnG7cUWXCdSC8UUKcNkRE%2FApkdblKNf3xiH3htYCI5b%2FujTSBGvDLm8jI6KtZ%2BcAgb4x%2FGWD3XwEu5WBdSYmYvd7tXlmU0YmZ8zyndT7jT%2FGNjankjaChiDSBj%2BTlloYL8uJ70tSbfrzM7Gu9F0p9%2F57OMadpROcSFGoCogAMaTV3CJJWmdeN9p9%2B7YzSiRIO7GpnAgZnqVh0aRsK6FU6UZJ4Datbz9QCNnsBEcdkIez1iTw5vFl1RYHbO7UhmLlUsX5Qq9uQwn3JcsaoMi7of8GpGtHiAqOee%2FcInerOQnREyoadAXtKTtxeIEzBPS1KP4S0%2BezzwSheF67Scee2n2MLWVAIcHDTNeSSql%2FKNQ7FZloa%2Fi1rH%2BOdjXm%2BVG46HJfVFHujA4JL5iocFyIua85TCo7dnJBjqkAQBgHtfCwrQ8JgC0UuAC7RvHpJwo7hV1NbuFtW26LN%2FUge7lx7fD4i2NcbFIABUV%2BD6WfWA13AxNsQBw4k5meNeBpIYBEsDZ6zzybcLEB1TDIwFrKP71P33Go9I8vGTzIYhu1d88IKT%2F5jyv70StheF9ohlXneL1puAjuNjv1LNPGGt7LlP3EtI6hBsjsD2lM5vSTuFq%2BuuzI37u95ngDk8bLHCW&X-Amz-Signature=af7d685202e16e767731f69e67d361ccfe4971a979e075a53ae976956000d58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

