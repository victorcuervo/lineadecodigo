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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGTDXZJ6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54yDF3b%2BuQBw3cPwi8Bysrser%2BOcQU%2Fw77gtBRPK2ogIgVFN64%2F5dIVGBqIHG9bY5%2Fie01mHq%2Bzeepl9qrZNXiHoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAJV%2FIdFUDEMQKJ8ircA5YzPBWBhNmk0q9vZZeT6wemYMOyOGTXihYhJQupxLEb2Ji1jNbLdfNiIvVemmVei%2FXwHui2vgUMK3qnhoIflduZREMplOsT5qmiP0ywyxTxh7oZY89QxDZ%2BQGYZnXM5lIrM9QzxIZ1nK%2FKg3xaRJH%2FVfwyYdenIXuWTbHlH8k7Rhd3v5MIN%2Fq0%2FmdlARP9M6ocjkiMD8kaBrQNz2%2B%2B7s7LfbkuPFl%2B%2BqcZv8KW9vQt%2FnaWWkZLQhenswvdr8JQhhzss3Wd3ddyvRNKdrpyvQaYt4nDxabfgHIssroiWIRaNMGjcGNQ0DvPp0B6LZU0DbCpLHAxTcSRurqA4n18BF6D5BKF0hCWTNH43BS01lv%2Bz5Sle6h0WxTsvtO7jqQF3uX5I6WYpbRKy5dh3N%2BG6OXrqZ9K7XkPYlTVN8gpJoz%2F5vzqtEZcqdv1gRIFWrqstY4u50r%2BMOPYrSnfp3eL%2Fs4dA2aMVmYAKVZd7ubPn7JFuYmwirS4htUOJCa1CgDqUvFRv60WBkiETETmG7t%2BeLBZEWGMzVgPXoK960RvTZM0SJq8bR%2FNiA0oJMoQ%2Bvh9ydOnhbyrlbqlrUpEm0HTRaAGwwaT9pE7T8qgvqNuEvQh5PTARIL2f8xrnJzLnMLmz3MkGOqUB%2BT9MIrZEiQ%2BqpIZLfU60UHcyIheD6IZ%2B9SgrmaaCxaSxEFBSu66f9gHFunNKDRXFkfwTP7ZsMZMF8tBpEuNPsDb3eLlgiuG0O%2BKv%2Fa%2F4ZF%2Fw%2FeWBOhyK%2BH33KlpWtVf8KStNoLrP%2BKOpmvk%2ByTLe5%2BdgUYrwLbbfZU31TxN1a9DDQAyGwJQsR6FCKM5UOVy%2FoajP3ss8RVZ%2BcgUn0%2FmA70qarLId&X-Amz-Signature=cf00775fa465922d551d97844b465a2eb52a5ef8a92c63f7b142cbcc57de66ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

