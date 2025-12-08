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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677HI3Z3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz3uWijhp3Dfq2cyhfYjMiFj1ppIUeSNNplDuWewRX2QIgHgKQTNwRInKBg1w57stle9VtmVJpQUWGSuqe0jbYx%2B4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEzOblC2AxVe2QsSyrcA9bo16yC%2Fc7ANA%2BuA2Y9NpPxpP7W%2FDODr9PIqux1869lbyEBi2tL2r2MB2rpOvtYgTgI0KbVgB0Lwv52SPu0J0E1aRuI9dlZxr6tE2hNSdVyssGHVcRNG4JckzI0DKXcS4c5NGHy70G%2BXoMPY3eYxEj8cJy8YlXx%2F5q5UGoMjhPegPRfnGTlMYdvmxtb0aQJPjSg8rtHEijFUrJJOgHaFYFoZvVn7PxoK2Oyok7j4YhTrHyjdsDka4SoUBYfpST71ifFz2ZTIypCMGzRhEldOlP38Kz9AgdVT2cWy5Py486UyXPJk3KRA%2F9IgdXht3JaEF4O9O9MQx5Cc9ZVSa7IV4cpydF6GB4SpAGw9WWAcN20lcxZGTh9RDT70ojjxAviWrt663NwRJ3aco4BCGbk3%2BOk1TO0%2BqGiTYAJCORZsW85qsYFZ6dzV5sofz0c5PiugcsX%2Ba6XpFWH%2FeD3%2BCDJt7ZFlKHXwouxa11OsDTn193lMqX%2FsjU4%2BYVjV63FW2qDwNd1h4LpMUSMVwPDhIL6lkDUaQ%2F4AKNzi6CvVIKXZBymlQyYWsdSDbxZ%2BOfv6RAPfOdB%2B0StUlJp22Qx7NBiRcq5R5V4OffoGHD%2BNfp2ajR%2BoPrYSPdNgctTlEzxMJHD3ckGOqUBUIGe%2FG%2F9YyJdGb07rp%2B0gbJ9LFWyKDYJfq22w5AmW%2BEXt%2B56I8jWI%2BEHJW8Ef9h7SKaNtvjh3KocNs9bT1Dp1SmNgLLUpno7ojySgKhoQRqiScbGbYouoqqupy5Ea59LJ6%2FiVxEIZ%2F%2ByEESACmsHFsVkObUZAGyxkeWeM3Vx6mpGLqf5jVYIqgdQA%2BCKZroEvduCVNlUmHogy5Pfa%2FpAtv3KU77z&X-Amz-Signature=6461aa5c903d24d78b29d8b3312334016b243d6bf2e13b99727dfa4fa46a2e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

