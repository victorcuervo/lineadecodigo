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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDUL3VN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7N3Veje83ly9r1tKfXqPsnZuyGRXP1Nxr0C9BUpNPpAIgP%2BWEN6LCYvBpzZNpeLr%2F1C5LErY7aJ7V0qpicjFxFuIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7pmRrfBI3pVAwo3CrcA40a5PJ%2FIUvceIBkF59yx65xKOygyEsY7oyVyfhzCxqOShAEsWWTi8nhNvKy6LGbNUjcy7qYOjVWvsLH32k7EjrD6XU%2BJtStXbOujR98DVevSrq0WRnWEzsbLTCHehHdsFgCwqcPpmefYsOdgSMIiDXuYPWXlPGzJIov%2B4Nzf%2F9NKaGORe5GBf%2Fis%2BmmG8f027GcqZqgLzzmOWobTKcOjM7MHTaPe4z2PG49tXbn2ag10e%2BXNtH%2BbNBgMAAccmdpEUZXoUWcOp%2BfQlrSYAAHhodEHaVTi1nkWxHqIPdU0EpEj5B2JsVQneCnJrMyeZReBELzAHlnr4T7NCzV2SecvULrcygshBsyaNq5tFrglBNMNJ5kP3XhfPlp%2FuN36Ze8wkE%2FuaTACR7Ka6JrSuIuIfqxBbGEmsx2XHmmOkTEEK1ut9BYrIzdYXBEWIUwA%2FWBr%2BQKQwk1QTU0%2FYTYRQtJCjJRGJSLKaxhfLc03oWASjZZ16pr4IJOpkLFjXoz6O7qjCiQUamN48snNa%2B6j7r5YclF21jebL%2FXKj3JPp9SN3TN7bX%2Bya5rAbeYA3N5J0Ah5LZxtpgvkrU8IMg%2Bwv783kbJJzMF3GJx7ZlB8URtyVqlPnivGGZVXb5JpAyFMLyA3ckGOqUBdkh00X5fE3UheZnVQaB39GfcWQGdOijvJkkMOwe4jT0m6P89pJAClsNeqTsfbyyC1ocIabZB2Uscgdem1%2Fb6ewoPmQY8q2su35MLSUplxO1Wgo3%2FS2onIk7gk0cND7YKrvtyOqDxPXy5MzKXoaq%2B0xF0tRrlX%2B1aA%2FCmFV%2FRaXDPlTp7H%2Fns2Mc3cviEx3lLx2lwE6sxK9PAFW8c570DWh31%2FPau&X-Amz-Signature=b632e89c163bd46aa1a0a857abfc1f0f18c9d83ef5531626ebf26c0388fc7239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

