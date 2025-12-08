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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVJ23DV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCjNQLb5flUj021%2BJsVT0oC6xi0oE%2BEN%2F9mJ5R%2BOHdTAiBYy5wltTmjvfIeSPhaUq0RAS%2FEX2O8ShYvRsFcuXjtiiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGnLxB0UFD9hLToX0KtwD9Wt21YRojC6RReYkFVLCyeDjnFJOPHGlym8%2Bdk9PZCgjIkMz8%2Bx0z%2B8g%2FO5H4nCsv5UiaUipfjceBl%2BgZD2ojZydu5xUEP1ErVp6U2VQFAttD5cklDCfLZy0pmqCZCCx%2Fm7nb5WAk7Rp7XUrU9YGZ4PHJwfDy%2BF9GeOxdA%2BwbL%2FkVKR24RvyLblk4pUPw19Vfl%2BLeh8asFwVaHYKrUszXQj0DifiLG1fCfKzn9k01KYKZgqUanMmm1M0LPg4WOuRfrqnzlHeXHpLqygq4sLKOHek6XckcspI6%2Fi6BarwEnVqEBtfbByRtNDq95RIK9%2FOsZYmDCnGzs%2FsR4VACqXWa%2BSMuaSyDuN4jeBOYouf4hylHjOeOITyz21tGx6cm%2FynFiNAkvRr6DviEETVhz%2BBil6y7bIQnLzOuBPnGlIYBTsM3XSMK4iQJAkKj0odR9MJPh7pxIFwPiX%2BzlfGlpXX%2FsMt8AL0G0fAnySFG1Y092SJU1s44KUi%2FunujQSfBXkBVsEQBZuZgVqcbLj9l3nEATmIK3tAFR8gu1ECEzvNl%2B8%2FJxi82qoICT4ib%2FFhf2L6gMH3sydc6SBbrdQB2DTQMxz37ZgxELtWkZnHOR%2F5zM1nM2JyWxLDsW9CVFcwgJDbyQY6pgFpAo9t1VF%2FeBCQH0DrWXCtgku%2F0BPIIClBmpsJj7qLZwzJ0jIUJckRM6j0xaDI8G7%2Fxffv539RvGVVvM41zh%2BGg8mYy26rKn%2BZRsClmtcDGw%2FMhFn8z7yzRQErdor%2FWvEB40F7KgnLcYj%2Fr%2FT%2BP%2FPBEhxK8rg9raipwm5nChW6VVeiT0MMmqUiC0zeY0TRyxiIr7Mbis%2B91d507SQX0A9LQMWv6%2BaE&X-Amz-Signature=783f243f2a51aea9707c7d0b9c4a6a3487df28815dec0baed3a3feaa131cd1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

