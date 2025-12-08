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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5EUMOG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt3nGDTZoqMjArM%2BKTGq5o4QQLdtEVNLRwKVCyFBv7GwIgGPC0bNAjjo5enNmPyl5CHhq04mnoOkK3Zu62RzwWRAYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP6LVGq5SXoW7uG3SrcA%2BX2PKwerg5aXM%2BA9TdO%2FG7v%2BaJW1MKgTVeleuTmDtXjIU2GLJAd7kjhHnHFLWq8Tvcw8nm%2F%2BI4KgCA0XzTsZzFmbuGXsl1DYqKG0GT0hak0pjzPDImuSN0Jv8P161VkPfhQz3zHC3rBAPN345Qnj5YAJe1GrvdxJjmOENf4n8MJzDyrznczqRCuAuZplDPEvuE9XUuTCySJ0Ip1DUej0BodvaVYbzLxRW2nNyphzgWTeDQxUiQzfPkD79gYX%2Fy3yyU6RIkqGR35UdQjvsjhpMayd5caTks3wOOgEXxLXm5KYdy%2Fcx%2FKya%2BHIAI6dDfc8V4mHmcLQEYTeRBemxeSUI6Us%2BYxV21QhKNNsuZkDiwEA05%2BsDKUz082omROGRSY6xExgQGQBhOQq9YXH0w%2FrQDuB1bjvw6onkQnfBTkcjChcgTdHUFVvRs2jlej4Pb%2BrE6Xv542M2%2BUn0p0aXeA5ixtMVYJqa9RVu79kd8SzpaCkZAtFSR2o%2BYqsP4g9CQLaPvOx3NLDfdRsy7BW1cYxq3cy9t8cteIoz4lZLzdXaiHKktXERYNGIhwSzPIRlEPZe47IMs5I%2Fa4oFc9Zd2u1dpYnfA8v0Bt7tOO5ibBvGyjikd3Ui01tDxlpLixMJaH3MkGOqUBQctxLST8KGoCgJfqml3%2Bu9x8%2FtqVztuqwCph7OXOfaVyQRds90%2BvtmAj%2BAw8vlcln2LXym2J%2Bhj%2BCFM5HeZpA63uEaIxEBi7jkv9nwt188zoaToOcfeqqDhGEkT7HXSMPhgmw8kX%2Fs8L6q8waX7ppCw9f%2BxwMmDtOc%2FxCKywoBdb%2F15OvapS6MGye%2BsJCbx34WaqDOe77Mu2MRHo7bFIfiPNtnC3&X-Amz-Signature=39e0fbfd4a6f6abd5e030e8c0914f0a0b61a52192b752e7401d22599743ff267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

