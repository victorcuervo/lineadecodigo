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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWC67Y4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9uI1GojsFJMUktWU0fShON2d16Ish19yd%2FgZO41UN4AiEA3Zbbw0NtkDT4gB6VGKqR8wUQ6Iq8Sp0h7gvyYd%2Bgceoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIb4dECid0Efk0EKOircA1bDmUnVeOZe%2BDbiJUJy7XKAIVzoW62CS5UPW3BOAnXCya%2FVR%2Fr0bgrLm%2BLJxfGOK1m1BT%2F2BsJ4RxlUuS6tqB2WuBwBmokQg0QN2Oakh0c8UFyODiSrUH%2FDn7LWJUPu0o1qa5kriJAMaQj3aOAqVfrRIBgPxRCrNoA7sDxauTpvTq4OVmdJzmk%2FxImrH7DLpmp%2BHi2M39W8xgvZp%2BJ4edXBQann%2FidOnrsd4VpQubwTmSQsfceF3512dhlaitxZ8AyIJ%2BsY45XqwGu92A9YqT0LT1AQgblT9Qds%2FrjfUQY9NXR5ROu158jTq6re0HWIZjuJbfoVD0F%2BgY5UHOqiKaYWNqBqi8phgAUxNL6LEAoxs6mesVcvyHmxhuSfRJ41rBYUrUAPLlgI5kMUrZI3Bca%2B141QZ%2BLZqB5RUrm5oAgYMvX4n%2FwXW5DpFcj5j4TFUA6kda%2FZAv0myWeGIJstiFSwru8PIp2sifYUTW9jfOipqz%2BvsZS6KxxpUbaw5b4IoMmD06BOKldXkNLbD4Wab4Ew6mSWg5uCNEoz8SARy2nPy25OgOASs8EzvyHVTkwpMghlhA6D0rdRvIzHXvBZdCSUwf6D0AAUJtAWCZ65fpON5PZUqE343jejzc8FMKrey8kGOqUBwFugu3v2OxoxxGAQ9pp7iV4M3XWIervu1XS5z0FNefJHzCqybZisaZS2whZZYdoVK7uljGuCvnfYpff62fsjM%2FOKJhXLZfYk9XMjqhhHYu4TNGWc7OMkUrBdAgwIjen9Ij8k1RHkKxr7VzfOhgs3U205QvxMiOTlnJ0ix8r%2Bjy8phcF8qegpIByKSjjbpsMP5ehLPJUGXrLowl1WW3Uu726uFL5x&X-Amz-Signature=21c4f70213e215a6fcc46498e2d73b6b35e58b60939bf0ba589f2d085608e93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

