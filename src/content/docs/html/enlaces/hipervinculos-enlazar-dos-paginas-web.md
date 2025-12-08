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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZN2XJVE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ao%2FTzx7GaN%2B5jQUCBM0rfbKXUrTI7pOc%2BSSk0ufDSAIhAK8AysYl0RdU1ewzj3EkmlkZrkXuC0AxAuYlCZkBDTWpKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKML2QfIUD06%2FKqqcq3AOPnpyyMZcRrMn%2FkJ%2B9ipcOIcFEgouAyF5U%2BjYjTE0FtfiQRbo8y2rvXPQ2ggaE6Jbctd%2FjoUXfCcQ6iT2ZC5dikI82BKfiEVMkldUX3KjDjUjUmzeIotwf7Dd2WhL%2BJsGshW%2FVuI7TnnLIV25YcvzRzAS1kuN5vm%2B7DpT5DLl7v5saJK3gFy%2BACSs2kq9sJdDCNWvMAOWTiSNJOA9fglJxBFsDq8dR4tNXNJ5dGhf0oBjd4H3kkwfQBNY9X5ZrMPfQV0S8gHw4xxxQcZmAxuJ34TfNBAt3z3IzSsDFb2GX3KUygCENauXja%2F8Bal2JGqD8Mich%2FlmVIR8b9x25rkNwUPy6zHBBWsBMPT8uvIhCuv8kz2lEGa2ShrmYU%2B%2FPpp6QF3L91RdUlugsgvrZ%2F9E%2ByBaSWFaoub1I%2FDo7JisMA9mkAz03TAtLBS8sCvV3k53P6p0Pm2SP%2BZ4rPMyuGjVzQuPjQdRPs9pbc%2BPQ%2B8j7El20Z90pg7BaueJ8uyIIqmHrz2Fm8LGEY%2FpZJx1jSgKGUvIKOryzIss9oVhHzQwP04YTm609%2BdvXcGA4EKUHyn%2F0sqZjiI62hqUm%2Bz75ay1ZDzoKSSW7m0XHEG2HblUb3gJjAacihdz0k0%2FUJTCv0NnJBjqkAQrdYvMq1pQTlvCDZGnDYsXBW%2BmcK5t6yoPHf4RB2%2BO342RBPEVjbecp1GqfDDmKKcL8%2B9ViVlYtMNwJAy2j1T%2B%2F60hFJJbfafvkZjpZAl8g2sgmdhu9Myf8pMzjxTtSArAe4KH4DbV2sPSoUumkmQaS1yniNvw8C3X31uh7aOQKTac5ZPtTYnxSuUTlfpEfEXwM5GpDwM6JRj5iSpyeV1mXOQVI&X-Amz-Signature=72ce9d8714620b6a8094ec68255eeed41cb40d008a53b6c0f1400b82f63e2df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

