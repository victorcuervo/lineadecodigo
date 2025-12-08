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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4WGL22%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOB3PwQksWJk3juB2q0HApCadOX7%2B%2BVb5MlVH4CFKr1AiEAoAYYbcc%2FbtC6LkQynL7wshvm5y%2F13LCX7DI13PJhHCwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkQr95WMG5axiW9ZircA0mM9mXKRKgW7Sc0tfPUZC27Oh51EmwXyYP%2FvobnKcyxLS9JMMyxDp3pNtB45m1E3ZmmKHBl1wAgEkNCPhyFPdpIVPcvMMkFjKoseqfeNec6YZ8s%2BfqM3mbM8GNyWBwrUWKeYG6vFpQyFMWtXgRjqlxdWhcTkGTNQkDS8hDXFQR%2B%2FcZveKa5nAR%2BLZk3sZ0QQX%2BWCDv1KIBn8AGTaZ7SvdwgQ8YbOEUWX1vs5lVABNq1%2BQ%2BM52BBI8HPqzMZQx7QXQ%2Ften02dei4o%2BsqQXMQHGT5o%2BF0Jnjl%2Bp%2FqQdIqoRmyyK%2FpU5Luat9Y7KeoDGuHaYZDpXcRMz8%2BSn%2BFoDHIiOM6Mu2NXAkNXg5NBUnK5eem8jIYCPkYoUYqnHIlzY3s82SK6gXbeOc843yWzVAk%2FMvV6haNQFa7ZcHcWbI6JNnTiZDuk2eNJNOZDemVXuv20UIoUDxhg5qsuGLr3f5sFgsLpYTozHyVHyZkzsdpdiZnWl3e1ZAjFGCKoEfW1vvA6Hi3tw5EFNU8p7BTQg4pn0NUeSqIPvmNPcp3Hw6HMHbsLZSeatAK53NVuYcAVZPCQCBrlhNe1Ev1m2RKjzjbnT5AB3%2F7GxmBQ1ooVDc6A5LL61K0vKkQlpcRQxT6MP%2BU2ckGOqUBkTouqJZsBLkLFsqHpnc25%2FaMyDydk1SLCgnn030UzNaOhvm6pxpXP7EUS4smWUOyplkeJlJ1IO%2F3%2Fkopa6pyxu%2BUijs3RqQAhYatyWMJfTZDW3QmOunIRG9dDLwD6X%2BWYofK%2F%2BhHwlYEKgS12hX9i7mK6YFJWzjvtRntq6OM3fGEB4EbKqCgut%2FB0x4s%2BIlrCEf05TsY04%2Bsvbw212GrKyECOYLq&X-Amz-Signature=92850cacbe6270401d3f0bf80fb994243b7d6b013ecd72424cfb116486f3874c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

