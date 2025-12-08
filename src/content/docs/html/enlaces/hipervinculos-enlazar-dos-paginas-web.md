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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VZ5VLS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATlC9eFh69h1U9IdQWlbmaC1raHupeX4Y8g1XYb8sDuAiEAmkXY29HuwY5E2pbwBnNOZdOCkOIxptjkTDbBNmUeZ%2BAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3fzwv1QENVjEs33yrcA73yGnRfzGcpEN0I%2Fn%2FjdG4Dmm5TdVJsfUuDi9w6ELYB6vL0zrZ6dHrveJsffuWAjaYwPnnwuyW5SbUzyJdfBn4VBDoOgpuB4fz4H8bxa%2Fq52%2FIZ69WDhSyApjcHdz%2Fd036EnjzO7PVbDAMWTjibFd3uWA8%2B625APQmW6bJ%2BwgmcyDGFefctDwKkxiFW1HH4tue3Yc0Rw75e1HehM5c214mP5N0Q16SsO%2BHxl3bqqBebQVwUF51t0POvFMx1IugBzK%2FuFbChsLaFlHJQhF4mVIWDpZP2FhvTWP6If6sdB0zTBrCn97A2A2x3G%2FqJbYmLqBOxp1KtJCCH8NhPsqXbwHazHx8%2B7lNmkrd8jEmo5vJ3pZz%2FlyDL0ewkmXif30Kp7bNpNQI1M%2BTwpjHs5Hm%2FLqvfocKDGC46XenD5C8qlTYSvW1X%2FIp1yd4p1cgRem2cD9dBasBPG3AXLZN6n7NarFNHrIWOPrlShin%2FQt%2FtuizVOgRrV6ooWIjio%2BD7VY0hjyvWfopkrqyC11ZAHTjesqcVpLfDM3a7OOjN8KheL5v5MdMMuzt9Ci1LA9FKDJDtIz8Mmh2Ld8ck1n55%2FPX1Ji0xKw3ekZwY3OEHUsVg0Ompa3VB6JqMi6RlM550ML7d3MkGOqUBln10M5A7Lsz3Uj73rugSuw4Iw73GNBOVlrxBADDqg77jJPGrt9vfkTQGudnTAexrszmvJg9qe0lazSRejSQ5OuUpT5UDbSCTZHD6dxcf4QmUKuuEaHWuG32iARmTJWDFzTjwyFUJnokVJXDwnGgBcoWW5G0MlTrTYONmpJE2n8N1bkIcnRD5WP%2BX%2Bvp08n6PNVaJxC5GFNHjP%2B9KtUbnxUu6n6hC&X-Amz-Signature=857cdbba38d2b600be036eb9e3e0efec0d2e342b368655e4cdca52971b66a9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

