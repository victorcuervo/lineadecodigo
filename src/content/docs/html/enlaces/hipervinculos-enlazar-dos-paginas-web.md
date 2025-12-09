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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIRZVMYR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxTR7ASkKQI35fdKJQLwrxIiIVoMv2KdeSxTCBQFWWtAIgSADa6JPX07780QzUBWcDX5dIYP9P3WEvS43GKljiypwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVJGdhtqkBQTruUYyrcAxBWrZ7GQOjxN1Nk2BFUxfXGAfw1JJZeUj7xpxXx8WVUrfr4TLRhnDAcB%2Bg%2FbDGwiHjno0SWlLEJXAtKu76cPUiaZIzz1frte9YUYHLxnyKYzGyenC8ST4W6F0wc47oBJCEnpTNkoMa2PMbm0ZE2UxAEzs9pFF5CNikwzYRqpRxjKzKzE9BPZ5CujQ45sb8EgzYow5rqk7TNfxMILcwVelGqNv0CW0xGet7ey93zMlTuipvixLvEvK62wNcXB4kVNHCmh3p4FEs5mAE3BxE%2BNO96spRJFYcev346mvzWokrSEPUd%2F%2BSbKLXW%2FbjGy%2BuKLz1KO8wQHBW7AWEangPbBU4%2FNo8YD1QKznRq0kKLRzzsz5gYjQezJACev8bJ6Z4V88T6WktkavzhKhamW0CpC%2BWO70YaupzCTCGgucCi%2F2hAOniSk0ptaXuZRsmwtsU%2F9Lul06UIkC8PNaRNIz31FJjGUHCAER2tlL30tSHUhWu%2BqaLbc2pofBkKHieK%2FAaf1vueNK4h1H09Vo5paLSE1Z36BAnaaW67mU9vDNvcjT0k3g2mYRge3c%2Fyz0k1wzraeHXerj39VBZ9XW5VOYjWGsp8ipoZKNiX4%2Bbb5xOM7zvXjRniTPZyiyTud9IsMLSZ4ckGOqUB9objh49hDjPqcG3ziGYQpTX0MtdoLqv10okDt2yTu5jFhkfQ%2B528%2FBboVOrY3n8Y2fJ1YpxBtlfwaAcIBUdd8Gdh7UeVULNihdhetXc%2F4mCXeqrGczwtbKnbK7XWjEUoQCBouTJZscYK8lB3KpcUX1JFn7hxVShc9SUwsW4gzfE7Ms9Ddj%2FTMKWONVjIwxMj0hBb1IU43%2B242ylYwaeQAWG6ssNB&X-Amz-Signature=add18b11d325883c1d3ef0f33496c2088ba846c6b34e0d9101a4eb8edc052c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

