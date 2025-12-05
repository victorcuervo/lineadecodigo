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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSO4G7S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1h9chp4c%2B2fD8YYHFxNt48i0B1n47%2BOzsX%2FPnoQRJKAiAoImv0VIrjIkh7bDhzOF8r9vBqn7fbFjXQhu6z04gpnyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMX3SsCejATVtxSrCWKtwDPBj%2BjMKGZY2h2BrIAL%2B%2FJWSufziuO7M%2BRY0vFIuI7851B%2BbnHPMamEkL6OnvhzpMKbpuH8y6c3t1qiuG4N830t8C6BizAhFGRLbucqX46Bhh9XJRzW%2FOW50tAwf2NqeogC36RkD3enqun6%2FUw15jAAWifPB2kx3qDLRIJhbMM2o9LPFt%2ByvZA%2BWhNM08JYgPPgxZ5d54R%2FRaJJDv1qUWXq0ytaSPUvihjKNydngpqH7Um5SlTyY1vfJh43RHzXXDasleIPT1ZJ3TkdgX0Dgb979Kl48GACkn1MU8xSK2HUi7mKRFVVLIsoDJ6cFwUmWP1fhtQ%2BkkphSIvnh%2FTkEnjA29He6khvvTyZZ1nFW%2BIJ8z5alxiU67ivFfTU%2FJZlYKXdAlNYy0BO4xSMfTK%2Bn5sVPwfONS8iOowVTk8cT21w9b%2FTlfsFjdkvkhTpEUX6ThHx7AOw78BQNksyvXWESCPCeG6D0lVEywnrUyLRkvC%2BNn83TPGwCQkZ3FXO6Oa4SKgDLZ5sXPumJpyc4UOYwrc7xyg0iCaV%2B3BImzNR1qpmhCoUCqxmMzaUc%2F4YCDXBVHMU%2BPxwO8jTv467KmGcP2tyZhL7ei6el4zSiwwlRBRzIh8EeX%2FVqovC2UMkAw2arJyQY6pgESqRmgiKUIqn9PO9YyIlDM53E451Vx5rFE%2F%2Bk9i8zXZS56RYMtFdoJgpDCj9NXs4p9Q9ghJm2G7syXdY6fijJGq9ZtOjAThNUAD9lr0xpRlMz2Jsjim2ArCG0DWNayF32p85EY8V8Z4YNOpaWQuPp%2BNE010scOeNqpclxTI29TMuFIrn0DctQdXmjG%2FahU0wAo%2BSTcZvVb6DMqLua%2BB%2BmTu0fIhfu%2B&X-Amz-Signature=c896fe213c9e7bfb7d56e649244e05ff5d640eb7486e70d5a0bf82d3740afea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

