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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITILWP4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIOX0bGmUnbInDJrT3kpJ45vOJGYRNSKu5eS30FdbZjwIhAIGbvb7f%2B7rnWSgck2X0vf5rwB0zU9DwFYMcis0VYwJiKv8DCE8QABoMNjM3NDIzMTgzODA1IgzlvZWYZDnCIGr8RIYq3APlkis8kw%2FZxQ6HX0BF%2BVU9JIr5tlyfnUti7SrHdJlelH%2FxN6VrbhJhVVq%2Bwb8lOHIGK%2Bk2jtt%2BtR%2F1D30ZZ4GFCB4Mp6d%2FzLFEY1eXBsG8V5IaeKyq%2B%2BPIu%2FNEwQ54Yxs9HTCSrRKNNAftMzVu0%2FffelEL4deZgLtI9FQN62rw%2F%2BUDh2417uKrsG28vIIZw9bQaCcnTdOmSPR1eW0sc3sT2GYg7EQ05ZCD3RJpxUZ9tpedRScDF98I2V4UaEvPFva2mDsNqgLKTZUpFRWEtjnomkITLRYDwukiGQkerghEVh5SomapMoHMdsB07UCx4wtVlyPEu%2BFqmEV50rDhpPJbNUcmb5JtqKW54ByZN%2BamfinNZEUp%2Bb3q6tgYGR4FiLJ09QBg%2BiQRR%2FbNgWGHWy2sUr5rZOL1%2B9yt3C2BKiYqODwB9W8M9cC0zbdDrLaGEzgsJfQ8znjBrgbhXsVcH%2F1p7uih%2BPi1hX6B6e1vpE8f7ndOz7Zs9ATX2VyLGb0cOAexmphcC6L7H1Bv%2F4SeTxx5Xs1%2B%2BDE%2FM4GMpbw1Pk3lanNHi%2BJUxTOzuta4E7jE1ymjO6SlqTS3e51HEFpEafjnGdz3fUB4nOmZ0XVgPNpB%2BLbsSTZOKP4ULnyHoDCMjMjJBjqkARruFqEiXGJ%2BglTRgvqNpL%2FO9OMusFljrRKSlACFuJORgHY9v7MWScZy4LaqLPOiT9KRfgB06zxs0qH0rLls1g6ytrHU6yIVmZEhAEh2HHtxFajZ29d6z5hbmyR5F0PB3FXLNZKWV1hytrkak41Rr7ios7QEAbOmiY1t3lEnmKdBhTm%2Fb2TRsBc9wu1e1xOSYaa6TIFg%2Fi2261%2BssO2o3Lr5H7R4&X-Amz-Signature=576d7a548c981ea483602dc1bc32ed7e21136775dab49de1a03e8cfba1b345fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

