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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YDPOSOK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuUHZIYUj95ukTINU55qKl4m1qsSm%2FLaRZwmxFDVr3uQIgAjv2mI9O6XEMAfMm5kWLcqLXiSxfyLoM6%2BUkbv69cJkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErbo9duP2Z%2BbOJGjCrcA3incP2oUsw1ivH7B8hsys50Q8AL9ApPFF89jrTtY92mImh7BFO0n%2BJtpYZ5NRc1Azq1mbnwRo8q9tqO82fJrwfTg57XKCnJ2yELANpRdvf3EwsE978jqUWKv6tIQklLG4O%2BRk8SvJfU5q4IcBQ1Lt1VouZKx1%2BLtIaYqP9LIb7%2BYioBKe%2BwgrVEuvWtwQFnivRI13XY3P32rlbtK93OB5X38yHy7Bx%2B2yH%2Bxsh%2BLViK9NWj0tohHpmwxfzBLf4hPXJZ%2Frjm2%2FVPkWfyx4F0shIQFawFJ4oteq8OoepY22znh1uyXE1yVgdI8UkTxRNEe%2Fwk8N%2BykDOFdUkob%2Ba9lnBz%2BBkO7vcbNqjGWA7V32tJ0fN6KEtcrQYAYhMFGJW66LuOnHNs%2F4h5SrW3GMHjx4jZHwu%2BPD6ouTfZE6Hl0auWq%2FszvEfoVJ%2FFvOr1bRaxgLNGyGmkc31lBVGu4m4Z7I0TZTcU%2B3qyBZJQEGI%2BoODWbYg%2FMDgMnMO5DRlx78YMJzOS2PfpAdH18SVntzLtLPl193XNbMVyYt2aMxgmTaPgXBfh45vHXlAMP8EUYoobagKE0AdD8tSYQUuIeU3dV9wp3WNaplXIEAvQYPqwzginLbDYUQE7M1BMHHgPMOyX4ckGOqUB64Vb5y4OxEGpC9hK1DqG0k4jFebKxjglEvAZlQcDcMD929w0BaXRtRUHAk8wZEyPT88PKNbux3Sp0G6YU2wU%2Fnh4kIaiFo4XONgUWETsB5GwkPiKvijeGIfaOTgbhvRNArhKj2DmSeMmj0UEgmeYCaR8rwjZzURQH8XUI%2FbaY3IVZK%2BK%2FatRg2y2am226po48Fzv%2B9lYWgOegFFTCBjCm%2BuOD0RO&X-Amz-Signature=d4ace5c681d0af92e0c576e94c4dd6a068a7d2ed15b641161f1f4803e65861d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

