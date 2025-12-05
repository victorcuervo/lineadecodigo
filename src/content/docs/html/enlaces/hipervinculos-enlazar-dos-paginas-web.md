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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7WAEW3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQUzgszHQJjXi5h0c7d9C9I8P%2By3J33wxDXwEsWYQnxQIgNNbRlLKIOUIwVxkDvasex%2Favn%2BtVF5S49fSLOnUVIC8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEac3vWa6dJQKRbaLCrcA75%2BiUAxEkLfgxAuLTFO1f%2B%2B44W6mECBRmHsZIcKrFiGPOhNXXZ2noofENGCieGVxSrn6HIH6Q38M1Lfxp8R8m1cYMo%2Bjz94B2W2VkYislby3UnWLbNaH1YRrXsR80hpTyPeZHjPt31iAuSSr%2BieCAkuFMR5Vl66a930e55fJLGmWhHXq1WydqW9JWtrT5o5Ts82Y%2BMRFBxCnGyPW7gfrsE7P63lRttJ4oLRyq%2Bz%2BcUY%2FJzzMM42QXngpqdAHcdBeyeMR88FHlMjjDzfetcWyStgSdNSck4I2nLnbiDK%2BPem0EyYRLhoftrE%2FNRBvCt1Brt3D4vN98xjUoGWlQgEklNag76%2F6R2ij3qKiZK8jqGxdq0SsneR0Iv8SzQsU36Kb5mlAT7Cbe4nSQyUH2TrsXSmN0zsHZQn7Cv1DYLlhtz7%2BTJbjo3RdxE6Rbr0YY%2BR%2F7xp9izFYDHCqgV257k46f4IRJbVlCr%2BnGDLUvGZzAYh3W3PGf2PgpFrgwzeG%2BxxLMhE3E7vtRdIlnyAFPyQXZufGWO4d1rnN3vjLih65F%2FayaS30f%2FFFrdDjUYCwHayaUDXPOz5ktQU7kTsNua5T4%2BjeFIEehkd%2BsYZjW4HPeMQxWUPak%2FZtdM6KW%2FxMM6MyMkGOqUBEhvtaLQs%2Bso7TOncb2y%2BcDvZ%2F8MKv3QPjDgCm9Pt%2Fge4A983dvG%2BQ%2BwnQ3Av7ubkahJEgudFQC1o3hmFHNNJgtQN5RCK8NIKH0heGnmvZy58IjZomSol6HBvB3v6dRPJ2exGhWA%2FZ8iusQKYorrqcDnqw9PfFIISOdCYQSfkzT%2BxQlzEK%2FuRxmTUSCf2qqM09E0JsM8v%2BnCZUuY86kfQIe6ivIPn&X-Amz-Signature=135564be5e4c56821401a6a954c2a398c58ceb31910881dbac6caa6a6353556a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

