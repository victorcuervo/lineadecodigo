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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SX76AZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgwlUMJyI4kIMK6WxhXDHh00gQMMAjW2w1BeSXE%2BwAmAiBv%2FzwUxZqDv%2BkMN%2FGNjjZlgGA8EwaZc7bpA%2BjYIMTBRSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMWYTZsXnAr2n4k%2BEnKtwDCEH2Mc0rZqLc85k8t5jT62YUIharR974FdnRnOY2ynAZVcP%2BB87486P471Pe%2BAIHfJVRIOMEGCGNTKUK%2FleZXw5PjZM%2B2%2FeMRjRm0yMgzfNzxTzE31bR7%2BPqnpw4WGBg3gxtupm3WBzIfqUYtpBeBuVZPR6IKgW1nzuN0o04pbmyKnR0V%2BLpp4%2FopypIQgsGZzmlM0ZVGVJ6HVKIrToIctScGZZr3EXkO2z06lHMh7c4eYaUjH%2BOyfi3diLKuvoM5y2W%2FwROqNaoWTkDNctljPNtowCMOYKGq61uA1JyQOn9CcPUmTf9ZLka%2B0lWe2ja%2FzanOyGbLLSiMh8YD0zpHhZIWGWsPD81RDjkA%2BhdbXwqCXWvDZHVcSurXV3fFr4p77oQrAv1h2MgWV7ZsonxAd6tAODbY0g9RVwquh%2FwaFdA16Kdy%2BnNik8%2FL9M7yGmCZfpVhGoLap60F2PUh5CwC7YqwlrKRzzwRs8e0YfPTv%2FHhf2bEZ9ANDNgUecakjJnP7V49kc9q%2F%2F41ym07Ol96jTpsI6ayIwFQTIDTiQq2sH6K0eeTT1Rk5suWCkhFPysgF%2BYO1M%2BNt9%2FSiX45YbpfonQHZDRCJhMqc9tFsGHnpkhTCThZNz2LHEerYgwk8LRyQY6pgFjH6U0NqTtjunVL%2BuGLUU%2BUqBzIfCvBAkIx9lfNgwtIwfgVENyJrsl%2B4OMc7MGa2gBP20PldNXHLlQIfnLSJE3lbmItOqyWDuKrVtMtanuRMA59b6WineESOXTYDUXqEhNDc0q5vbm6y09U4TRqvys5G%2FdRoFOgfME7rZI2%2FqeCUg9kxu%2BLrGM92yyq0hrdqsaZX6rty5ipglPC20Eq9mKGACDxb7x&X-Amz-Signature=4461ff2bf240bb5ce2da423c1a344964daca619fd495a8bd6d136a1cf0f4a923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

