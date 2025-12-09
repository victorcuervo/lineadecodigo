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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKKS4IC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtEx5MhrEvI%2BpkCJOgk3edSAk2i7LHHKdceTb8M4FGMAiEA8r9tfh51elK4Tbp%2B8vCMJ9OwXgkQ8vJPUsznKQWfk%2FwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMK%2FQamESDh7BljMUyrcA9goJXyOmhwQj7aRyFUFbNVHDUmIBICUsTMVNI0tZt%2BfL5pjb8%2FzNGxRmeca%2BwaqSeYMxvfJrbDE3HAjv4VtI7CxaBsuLOh1AXXaxjc1aFeq%2F9USGg4PNxzBthHMZpXLTX8nb4XTvTEXypki4wTcbwBnyueig9m8Dxddbt8p1vBIAkbdg%2FmtGH5Qebt7cQAohcIlbinOzSVOrGYO5amHglXxnK%2FW5C5yGrmwmTHq%2BvYN9uG1s6A4tsnDdai29rndvP47MsIDVOxJE7dprsY2NDJgikRjCQETSMtpYQojFfi2Zisbapbz%2FxNPKe6ddrImQfWfIIPjfp8s%2ByhVW3WpYS6lL3jkb9xtvmciNdOuh9%2Fvdb%2BO5TVdi8BbhOd30DaNgHcDlNhq0JJVKIH7MLx2JUH9lWnFJIFj%2Fz5CicibnqY8ohWRvoftYGHrVUjB26VeUd6gHl%2FBX3tueXVCuNsijqKaqMCXgPfbPoIWIJVILo37pQHeHunW8UIY3Oakyl1HXzluiLdgekx%2FL92L8zKo%2F80WrdnCPU8HyShbYlVqWnHMumdVEYjj%2BUyeaLHhIBSxPfFTSXqwL8X5IyfMTqjuAPA2JaAKNG5ADT66%2B4qHKvNOMe604qqu%2FPaIzk5HMKzf4ckGOqUBonHlJY7gQ6%2BKn19DOlwhqjxFAeeNTI1euS8xpaHPu%2BMrFcacaXiiP0eJI%2BfDdBgAQMq%2FcPgOiCcwR3EBUKB903buOpNd5tCajH3zbuqNO83x01W5AY1EXSfujpF7sq0BpdsYkrJx6lIgKo9wTHI5PKrBDJFA0SGrx5gpzAzUQ9WAlWDOnOAqzKaEL411xYkhQ8by%2Bye%2BzlKnD0wX8xSsoindCFqv&X-Amz-Signature=58a638a8f986387de827838869ad9d1654755ee9aaab71068d835f1cf3418357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

