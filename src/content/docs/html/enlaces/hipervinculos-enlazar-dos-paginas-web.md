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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YSLE25%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYFztgVUnBdiJzLefHVK22fLQv3ByJwj%2F5fxiMcSO4CAiEAvKSVPsBw%2BxPSO9uh8g2oxpaDgVOmmBRO%2BrdhG%2FyOZfcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk9VQQB8yldSkH2rircAyWTnuLWv5WB4K1c7Y8lnlTcGtdJMAilsrQ7c1uIiZiwdeMz7ktz4RVr9Us8tDPckIvd2L2%2Bgl%2FrxL%2FP6hQ2uD4os8e6QOWsPjI6Slepe8%2BvUgW7yBper69knuCI7BvRyPJOhK0VGGXqxCRin6UsACnKzLcUd80i7QaYrJxhpjzWdYKpTYn8GeINDVAeFTcSiOxobygKawIfk4RafuH4zhb8drA8CoqEfQGjxahkPzKiZjCI42NoQsmYVwLamWHi7TxLMKVopnGIh2X2j2iEX9PMWP53WTZJ720HZwfrwEGn4FASEw%2FOT9BCSZkOX6A9HcKyYzzz20hJiDtoGw4rNV73hwj4dp8GcgK493z8L4YD0BXF7GKJZbAhF0IMA2v0vDi9ZQruIpZxP%2BqeuhuHWznBGM43TCKtvYR96yiXy28o%2FeYsMZ5xH5F3k3nvxztPK6RrA8q5sJaVLWELA6PSk1c2o3%2BvFRPxhfYnLhHbfqYKMn7vCHb5N2B8qdc2%2FXg0lANnBLeP1PLLIirjFJy%2FXhhin4YFNwymbepTHWY%2BXPUKoWL8WAkpo8TRlArnKrtaHNDp%2FHSUFf7ty9Z0229j61ewsLvqN9DYbNVYy%2BDkmT3H%2BB6zL%2BN0wVGf6D5cMLPf4ckGOqUBDj22M0obCn85oN8NCW6NfkMyQewyv%2BcuHz4GruQo667MSrWQ6PIkhA4LWPvew2XmPMwNUZ%2B9sNSLaX3A50xTM9W9VUCFNEtz2nu4JSdyvleqsZFf%2BtBDrCC7%2BBI4TwMgLnr7fz2679dvLnrxRxsjSonEyO72gYCj0sv32SQKfg%2FgLEj74YA1d7lffhTmxsqM6c6n68aMN2UIbZdNv7ihSacIURLj&X-Amz-Signature=5382f958ad7af9d6c0ad6ebea1cf0b62a97bb347a334e90ce17ae4111e7a97a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

