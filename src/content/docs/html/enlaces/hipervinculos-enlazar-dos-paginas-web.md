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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLIFVCM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWgEDOmrJFyWLFFfM4Zg018lnwlPQKsdo3A2H46q8DiAiBa%2BhoCCTnNuCtfAa%2FAhOYNcrDL6%2BczEnJ6hg1iRfkzTyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMjlVr04Z6USXe6t8uKtwDceFefYMEYwVU42zFb%2FjpNRBDkviJF6dIejIAnIFkmRFNAEF08p2iDi5bdkFqwSzNPaaWMgwKYgEW8MD%2FS3er5dA9v0RM7YvplFfphVfvjkexoC1WJdGDnLOrGBEKgbTJ3q9gI1kNeP3K9Q%2FJAvsjC2Dp0L%2BfYpnboYKCw4Hox30EkfkyUxZlmQaSRAdzKpDm9M4EXq4QlvdV%2FX6AGjR%2F7s4SECCOKGqVOsLm%2FJSj6RWTxJJu21LWMe6iBrHhgcWkpeG8i3nVp5qDxZxNpYzGLMqNEaPpcbqa2ZJewr31E7BYlDxpDEH2zj2elIL4ootFStGayi9uygA2%2FRFxbZrKzgpaVFFjGc8a28C23GDeuN%2BP1xoSUdZfp83Xwh16HO7bwjaV6hX5qu%2B5J%2BlKtTAAidmlORA%2BFualg4U4BGeFoVRw7jbY%2Fdw9q48HUKsFls43a30giHperrF6RAq5PosdZ8G8DHq1eHT2ElVbMFRz%2Fw1W3YPU6gj0WzW4%2FPbajwmx1kyvwghg7KJ%2FwRqjgWTw7LiHs0qIvwZlnn3Mo07r5UZNSZZpTvulIUbr3qxFEKIKheilgXQS57%2BmkWKqzb88vDN6uwqhM58mEuCmK7g7luf07AGSQLQTNCWKCAswh7zPyQY6pgGL6eKiYW6niE5wxfeZksYWR5xVBoEqxC8KUDGnhtyhl2CEhNkSz6Eudc5BBZKf4shTc%2BaYHLkhSYRIUA%2FefnjDp080dW6nNleEu%2BgDd3hc0wgodUwrFpIFC%2BLaL71LhqZVZHv0P3zMRjpc7ITrHGJsFnfKTy7rMaD1omAfRbZeq3S0q7haBUKFID31krlVFK1peMkrmRuyfnMwTuK6rXJJiVHejmcN&X-Amz-Signature=43a5c02487a54add717e30e6de7abb31c03b12ddf2d272542d0900e1693fc60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

