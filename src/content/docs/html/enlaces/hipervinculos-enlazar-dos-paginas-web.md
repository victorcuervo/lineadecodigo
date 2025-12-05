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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBDGUID%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANENP%2F%2FnAxi9%2B63%2Fq0PCr6UZK%2BKICYRv7C3NZu5VU92AiEAoAdDdYySv86amWPvuwOLig0A07vbIkiuyJBodk5ftM8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLTrWruTtsn4hp7Z5CrcAzAZT83LLabLogiCem6guxkbH73AJjeBBMEACPHrk7eUP%2FaYzmf8y5XMeBKN5lXxX92kvRlvJ75dUqeQPM8KtoIRzx5MTnUWf1eoc1ZmD0QSRQ0e7CjM6c4%2BayAFMQumOAuUQ7N8JKWCmBm95TdJoc2Bm0fLMV2RJEmhDa6AJIRSXcpxwDFlwmX8ViUgzBa74PPlB92pzBL0bqmE6U455VoaBkwZlDAKluKrhzkYkgDaXehwVY7Qub0FgOep6htA8AlxXu17XbN%2FOIfl61om0G0KBTcvPq994covEOqslXrukk%2F6zmn3dUFysTLp0fliERulLiGrtZza%2BtRPH0XUEubFPcQzmNPXID%2BlO0rfTi5vSvvpuaKFZDx7Dg0DRXazILkESq%2BGpaw78z8z1mZAfE5NCmYJGnkxd2WWMqGBIZrumWLZBCQQChxU3vWTAmMee%2FzpDx88Q6OCY7tIjZrlhGuWKi7ROVMlLrHBQjVAp3eZgtvidMFTzM7YG0NKYZfi0PqMkoUWQPfkwzhA5Ckr4GopKoz35ilMhmM12pVmGJm1Krd3yfn%2FqT7%2Fpl3fX%2BL9mlUK8UMlmlQ3PZM4WRVZ7XoXvLci%2BQ7XEQ4sKRG1lqmF9dvdva9KIbABV6V0MMLmy8kGOqUBLh1znwcESIwOQl9u%2B23KqQ7hh45g1MpcWwS2lix2%2BYBoAXBdoaEVQEHQelRUWYHAEDHDFQeN6soGnEfeJAoOc%2Fzx8JUvOPVZ9upxRXjjm7Rny7EhDhADbsvd5j0IxizmSy9i4oyLu4JlzPmCyNMeSjhy3IdFCBMYAxZbNto8JQlwoTdgvwv4e3Gb%2FBI2mgWBRxjE8c%2BkHDj3%2FtCofl64QTWwbyro&X-Amz-Signature=bd85723a9d356f0d9e9a0fac8f5af6f1a1d5990c08e11b8f269f2b3b2a3b9236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

