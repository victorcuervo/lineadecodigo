---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWJFK5W5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCw6BCLh9qVGxl1EKWmLTyXYfWIfCk0OJ1ci4HYJXnSYAIhAPJJ2jrhNQTzNhonaW12S50q4Uo4L%2FfA8KN9BMKMNub8Kv8DCEYQABoMNjM3NDIzMTgzODA1IgxDumxftk%2BIFkezt9wq3AOz3v5LhG%2BxvrFHS%2FygzQWt%2FKy4VEYjo%2BqGn08K0hZJBdxMNFZB4AqCP3L%2BCojCl3IB3jhxLQ2Rw0bmcJmt2Ic19EkIQH9iNRPLZ1D0OKnrE9l6F8jDeQ6pUociFtyHULQki7y85yWV6O5OhT8Zcv3go0m54FwYLYFiBwfAinJXUhVTer0QJe%2BIGKiHch0tkq%2FuSKwYotlD2WJ84NNaq0DNCjdBMxnF4W5dZREe3JLGRErwiaVsceqWSfdw4Jub5TZwPgFLKR3iK0afWoPNY4kTdUVHQaeJlzyiRN9oTZvVyvDxi4JMcpZCd0rod3mSdS7i%2BsOfgh3nexCxPUQrMd1HckUC5SKwc038jgA11%2FzjDEa29tbpFTEbXbV1GCIxHSKhiLhlU3WDLtVHKqsQ5TY214B2cjSI2lConaYWU%2B4wppySFB9I0HPCa3SFaR9wuOx6JDycrjlU5xq20%2F9Y1K27GIocHiGECEN9mKPghtEb6%2FWxJAev0Fy4QiBD%2BH1xdtxll%2BHdZz5hbu%2FNRTw2pJYlDM%2FpQB3OnntETcucosblA7SRMvDMkkuw9QLPjxU5boZHHdgqv5VhyZHaynGN4ufmfv8ndu8n5ewBdNfzrvsV2g8Hzi5XIOUrUxoBJjCPhMbJBjqkASFtvtT4vGNgqpim3pB5dkwirvGbTTugn7afgpvS%2BHAJx6ffZc7R6qvMfoZ%2BbAs8lyvLgTe5GaxGoi12gwfsIxT9PulHM0UCPVS%2F%2BCOZFK9VIMyg7zTrPOAJTlN2hXvQHpFGiS%2FtqG9uLrynQspa17n966nrpA8%2BuiY0Rs9PNW1GIWYKPakg3xVNB9RYYUgzgZqKIwmJRlFoBc4gLSJdeJbzQZWj&X-Amz-Signature=ee4f0b68829a89f0736d36cdaf65e737f348defb07de13f81d0c3a29abbfe887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

