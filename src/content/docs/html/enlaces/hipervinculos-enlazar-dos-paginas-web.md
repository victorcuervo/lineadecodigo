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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BNMQSA5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPXHVXWjaDmI1Kb91Uomte6yrWSklrcIvraVz28d6iaAIgTuYLLkiOgnUsWmPM7Hz5zAwAzGFJNUmN2kmG0RRjQgYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT2kaMk9k1%2BaSTjkSrcA85PNig4kmHigovu6t9nlqz6dDHEE7y%2BwkSHzza6P90UhvtuVdX01llDY2bjUpRcdx5MSiV%2BfvwtlxjDxvTjgB6MKfTG5Bdnt%2BuXqi4iiV7jL8Kpxq2M8RWu3DnZy%2FHeZC%2BwuGJa2A3a5qZDQd%2BIDrteqgn4uRF9chCwJ0qLWSAeYXTOWA0CYtWVh5c5FOSDNKFS33UGa4V49U0pzl%2B9cyw1f2rAofog%2F4o2CJjdcVDzS2lyRYztsWksd1hW64Xa3t6bCc80uduyM2P8IN8acvuhJQ320xFFwenZND1mkYm1m5louZqXSrwuX1gK%2F8Zwtr3I67HxcPYB2vrEXE8%2BIbl1wCUBDyK4dKcXTtRkIIL%2F241l8WLV2tYQ1ZA2pnkdyruz1%2BPE05YPSfTUf9Vr7QohTxxcgorDFb%2Bvopoj8sUTDzyqVt1PLcYs4iJJ%2BTrTgDgcbvY6W7z1GBgkIK5OXP2QS8w11CJzmsAy8Pf5tgHqfy0QEZ3bIt%2BBSoAEHxcsS51Kyarktw8TZ0Fy1SdhKorLp6NY5npsFjAgRdy8pzVe7x10WE14tIlQmXNcvkQXREnF3k4bzeXWGUBzJhfVqSS7VyFkblC4u4Z%2BdZ4CViaPtWsbj8ytXqoRZn2yMJ2k38kGOqUBSkmxSYa5VY%2BMFNdjRpPvbmq3ZJhFBXGLkZh8GVyAmYADEKazqc6bxUDFtwNeC3jTZPeN60WQXqL2KScz3VJjyUOT43Oe30y9vvL%2Fesv5%2FiAKSMJPx9aNMxlzervrW81Xk%2Bs96h1%2Fc0%2BQ2DrY%2Fu4Pb9H13kiEECp6lv7YkDIy9PgtVGbKhbyvwg2BWZQIgYrbQdN%2BNKMgEM%2FK0BIuZToV9BwrA5v7&X-Amz-Signature=35fb48bb6169848cf47a5025c2b118fee22e368db5bd3a470844c8b3fbd401dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

