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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBCNBBV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDpTTCQN3JY%2B7HcNxmi3GQ883SEZVQ7vPnhOyQUdtKXgIhANvxPMemxwLD8Nw5gym9tQ7Tg6czatm4taO%2FlULdC1iGKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQVRqcBIiAM2paWkq3AO2J55vKGDstj66567dYERqc00rwjMmW58Di%2F1JnDwrZN6%2FuSvY%2FEKvinfDKlcXwd7Q%2FxxFpdUbH7%2FoXPnj3TjcudBKj8KEFf3xxzs8aPC5rGXO4XAjhbIW%2FY7Dr3HFJeqr8%2FLQY4CdEh%2By6XEgLlJ8hNl3OjMZqfmp96dtfc%2B5bzSAfnBxpbK7GYe1fnceysPjro7E2wxKI4z%2BB2PM0JHh%2BLO5mnej3jRj61qEfFIeg3bBEBf9ocAEaI76nEvc3CwnbfS0BI2mHf7OvmKBSHNvmsdeJtowDtg9KZR1nHwsKmhyTwg9ChYeXA8gj6uplAoqGiVJbk0djn6yYa3h2rZ3CQdX5zIM0c9KvF20GXIG2TDOm6DULZiPZO33A5rcBKSw9iI1sx0j3nuju%2BcLA%2FtlxhD%2BU8BkwLavlNIbj7ZEpITouAu2GISv0SeC%2BwyU224IQoTWL4A3GWpX6PzdrpFWIuFauToCC51wRgB%2FbH5hvt8s6EktFrW3YeAORJuo70qkW7Ym8PVVdxjFt0%2BQMqB0LrbTNI%2BBQ9ejBPhjvZ0mf2Qhq2awBLwicMqpnLGMFHClm4egD53NPu%2BSkGuxi7fsepO6%2BewF%2B%2BrvAyIsWI6VJ%2B3%2F0hPh3mvfJDuWTTCc6t3JBjqkAb1GwdTdcL4Db13%2FIh4l4wTe07WhOgqaLI7ckLItv74u4HuMxilvcfCFJqZZjyqrY8CbtRRWwQygqgKEtsq4cBlJ3UKnYpzzs7WT2ld6h0Zfby3A8MtXPyqqhNQ0FTksSuZTT29m1qEs0V%2Fm2GwZIpsLPhm72m5%2BbZLyzUEnZ6q10cOlTssGwNxEtibLOEMJZdQ3CnQtjyDn2QAUgpsBLTy0Av7p&X-Amz-Signature=468f71598f875b09cb6c419a1a67640e41a83f652d3b69467d5462a1a00c64ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

