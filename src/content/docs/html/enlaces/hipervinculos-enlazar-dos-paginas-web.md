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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JF22FRU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvdZmZ6PK1QpLbRil9fTCApEPF1nxF1HJ6h21Ygo5JzAiEAi31IwdQFgsM3A4ALrx70NqdABq%2Bx53Sk%2F4FZivw4XKIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlXe8piX%2BvmnvSFeyrcA2wTV428sCCVo73vHrPwP860WDUTk0vmxyPbGpQ22OZHgVb%2Flcyl6zHtwB0z52wbNBK0lkPwX9gSfUVy%2Fw8baXX%2BSQQxVFl3Y6gZ9kD1P3cJt3S6LmF8xyZXd5svS%2BxMvX1jp2tSi9%2FE%2Bv48GjnHlFIUJyFCA%2BlZLhpn4YOylkH8psIgUyA1CG7kTL8jauH4MNoe4tp365BC4Nm%2Fq7OervGb9DrEbpP5%2FJMXKxqhj7%2BfsD6au%2FLjYO10cJ1A14csrgjCxfnzyOpeGLtR4wdeWKcxTxtDFVeBXRXWW9exDiampshhSsUnDdauFpVWZiZWf3Y%2FAyOyx%2BgjS30UIN06eUQ3ZDWjSjTzbGSTsSRXPf6vytrYR3H7mW8EjO0vUPPgmGk8rBc8vGL2fceIAjt1tyYpSIX6Lj5YQi7BK%2FSk7I7eSs2dStUwCN6lBVr8NKEtgmboKphJkyoZ5%2FRybBR1%2ByZk3oO2S21yIVssJaNLifUbvg6IYc1hNtw8PN76mzSsyf8FZISYj2j5eaRYp0FLmDkd7n8fwPV8FD4MKhc5MIqq0vMF5dkbQ8bbNVKqolP8ZfXHZTjmiz9KiCdDix%2FRLCq3xce9mElkK0YFMjApnrqkhAmmiwIj%2BTJamHtBMI694ckGOqUBu84BeTNBo5gY39%2FY%2BYmAWAqVJ3nKMkBfexxS85Tqf0VwxhCo0K7d%2FvGdlMFVZ3gneCitF7wNaOyKXb8tW8OU2CwFUyvC8d35CwZMf%2BilQVjxiou%2B7brxCb1NeqAmHo%2FJR48audnB5G3fARwY4idtkM1jRD8%2Bp81cUZ96LiD%2FiFB1oJP2t5ef50N9q2oJ7BKDTtBMYOszjhGH%2FpYDHTDZsEN3EJCq&X-Amz-Signature=a5e31c0b21a3fcdc8d1f92b6dfd7ce93ef3db250b8fe060658969fb57a9a00e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

