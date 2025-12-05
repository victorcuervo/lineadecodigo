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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MSL3GD6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClDP%2B1ICbpmd1L0GZOxu%2FUV8%2BAGw9YidvlVcu4vggqnAIgGzuCKcqBK42fSMYCY8xLHfl6ASYgnkLPulVhsET%2F9OEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGRQFKV%2FQo47Rxor1SrcA5pXfhkT07wroa%2F3%2FqnurfbiIEuZgKaxuZ0SwSvh82epejGgJYjFc1O%2FgngeYUzeNyQ9Eu5JKv6eolY6o5DibllecVC6Z0TB0AI3GtYkVbzSZY2D4ev%2FcUKC0x1chBI9d9kvIwn6wYJLwrxm4VoPAr9%2BDWsPVR6tIA3AkTQA1CxIxk2vghKWV2njywoieyQF%2BteVzfI%2F9hEXC4AYjcMmhNRsT4npJXWRP5F%2F3UguzmbYoMH5f9r%2B1LdMGwHGG18jABOvFCVKLfFmyzUSstO4JrYUoijGXSw9ehte0WsFI5CdQhLHUY1Utp4ycSLkxmmYEyjM%2B9ubQMRyHpauOslPtNeVv2WscCNmTnD3RcR0LN9Hfp1nlp3Q4lY7%2F41oOJ5BzkIPsHw85V8GuDPMhXO75HkHCsinfZgZi6fhzFmdGj%2FBYE%2FrHgLQZxV8mp%2FThwbVYaOmTVjNwVnpTI1oZbvIYwdDGmi1e3roXjydqRAe%2FZxpMu7luKbpiR3qGm%2BThf2eI%2F0aSMPg%2BoPul1OWDuhWffQpVntP3D7adOTMciAqAcdYBI8a7JORPrGoCRCgiN3nm44U4g79g1hYn0RI2pgzrSqp%2FZLfGirbxF0c49bYfcLSnJv9nDbMy9GGrrcyMKXRyskGOqUBr%2BIQlu8MFhmnli6VROO6pVqbSJ6eTOrqFkYzZ18tElnvZu88%2BM7koOvsQ4EpiR3E7nUNVOBXOHa8jbfBTgEPQEnvGsymtfQKr5dXAfYDuh%2BE9NIg2NmLrUNTtOjZwZPaMmkqaf%2FQ2nll9Tg85iAHXRNuaJLnuFcyJlXmB1abiHMq1ddt%2BCI3AtcvyWDKSo2KGdtnwoGTAtJZb2V2EzZWpF9MUp%2FI&X-Amz-Signature=7be389566e7dd4691a8991cfa92738bd2cc870c6301dc4a5810f9df7d51afc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

