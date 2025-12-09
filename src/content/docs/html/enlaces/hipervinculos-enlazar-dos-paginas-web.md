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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRIDIGR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS2xgQcdmQZHZDxs9FPBnf%2BaeaveKhkksazgKJGJ50kAIgMls%2FnMpUh7S2ctPZHatjNhGW7kEHu8NRWKPLSPEl4OAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaNO8QHbfHcrPZnJSrcA9BX3CF6ppSqsU72SJARSiSqrrIljOWXdjBdcqz7u4qr0EjNbjFAXoEk1Ts3NLDa10N76QalA%2BRbXbR%2BubusftrsNepikK%2BO30WZQyvLZzni01EwgoVlZPxZ6%2FwxUETdQHyQb%2B9V4n%2F5xsMq2sD0sjRdLoibasf2tjgJTEaCtkGtNO744cP%2BVp8J%2BsYX6qRZUtJtGtvPm2wzCHCJMoh5SPqDqWvYXWP8sQT7Gi9jiCj7MIbSu7ig6aeY2%2By97EnBqejt8blkh699kmYwK6PGmqKLgpZNAsCQ0RaBYcu4GvGhOfCp4DkCM5jX4GCTjUW513Nzzy5iVg9Cw2HUGOKCngryXe%2F1ttbhPPVwd%2Br4Q7bRn%2FXbwCarH0rhzz2SuG9GKBU86y00Tcz%2FPyevHoYM9lGNi0Vng55s4H3feLZ6f5uC0VI0uvXjq9MNxmyaxHgbY%2BkIYRkqeb6ohk4f63tB1HRnJBCGFt74loaF9%2FWKIua%2FQNcREiumYtKVVlhYCKFMQUEvF6ceAEe43edXxIZtVeU6bDIYXPsSPI7CxyyqeCQ2rLC%2BM%2Bn74d4M3kRh4kdf5k2Awcro5joDbMNSdzhE5Zl3N5UuHKYLs2j5fZMe76yB9yl6kjGFaorm1XucMKKY4ckGOqUB7ZNAEMuz5Uj7JkFMPhMPQd9appRn9upR7Gg%2BLrTptGVl6QlS77p%2B5XUBRnvbGjpndrvPfOm0AVo2o2C7eKc4L%2FVI7yNRNoOlp%2FxOz3SlI6138LT3F0p07g1jYPOY%2F%2BKFCsJhVGqM1DcFUrgrjj8gpHg5m5HEBEDS%2BLfEKPanmZqsDg5h2dEFhQ%2BAm3R0QWj3gDq9R7FX9wd6%2F21%2B4KzUBMWklXmj&X-Amz-Signature=745fbd4347dd82324ec51822ca4f497c805e573948407730c7705a494c08354f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

