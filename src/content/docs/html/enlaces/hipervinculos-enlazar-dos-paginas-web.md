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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLTGS3W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsXbWfz30A9FRARQNADjA95IJJQ9JwAAlKAqTpdsCCCAiEA%2BYlaPhHXivFclrGDyIeBeIToSgdhXSnDQHrmx6oUSNoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj%2BAdwfQV6e%2B58z3ircA1peODrMFTbcBvOzaVa%2F3ebkJWUyRXAWFzhjD%2FU91N0pYg%2FnO9k6pKv2b7E%2B6kiSczW5yULwH7M7jNoybMMwH2krbS5OM%2BR111bvv%2BGUSiXykypzS8VvFm6yQuHHR9D%2FaN0Ipg0YBpOrmNfws4bSv6Uecs0LVn3VCVHTU4V8q%2BrRhYDsfswNaC0jEuT%2BBL5Ah7Lpk2oHwZQX7WSVA7FuJBRJaoKDqUJ5I15MLhla9RimHhH3VtJ2QNvEKdiYvYGiiAXV2xL3ncEx5oZnW8V%2BOnlJ%2F1Q%2FRXZWebvm5EcFH8M0pl5JD%2BtjOoPhlGbqGIUJAIiLjjSZocozIJFS6XRECR1IZIV4sE59yn3FUzvtSCU9dwFCBbXwleeM8f7%2F%2Bq7P3tNLnPf91mWSOHDi5hlcmLvQB17cD5AA6uL8YIkkzzSMa4KKWQkT5nRgHOEjlPjq2Eb16wfbcBbJNBZ4WSZrgmZ8%2FLFASecHXKOpaiFRjm9CDN6%2Bb0qx5BD2fq7l%2FNhSYR%2F3%2F28hRdSdYr2EnXc4ONHdn3V7s61EqUCd4uZ8Sp00UBYsocdv4CmZkbwzlcuDH6dFWI9Loq1ioehU9FzpvQDOCwkmSJZafiR7H5A%2Bo5NCpMQuoKMTDSF96OFbMLvf4ckGOqUB3ipl6tO6MIChJXkm%2FL8FxlRhJ6YS7T9OeWqo1ZxPZFfSSk72ZtGZS5CJhQWz%2FBR%2BScCbyGvenZLSV8tQbC%2BjVh8G9pEep%2BC54erqlcQbpzn7eSox%2F3sxZe9FI1CfusXB18A8588vr7YWCbvbPBnjQoJdxc3rzQtIR%2FYqlNRcwwLF4l74SehfK%2FnXdSG0Dqa2%2F7yEf4dcgZ9kOYAmemmLy6VPVPL0&X-Amz-Signature=9be4ab32c5e1da52c22be66a6dd05355e19b463a439740b9577eac7cf385257e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

