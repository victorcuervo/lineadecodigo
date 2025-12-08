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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO7BFT4L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8%2FtMKklNxsgNw4%2BIsHUWdYqSGNU6BTYcODaMzxcw9%2FAiEAjTwtCJtOEdHmFVWBhigLtVpY%2BxvIxawFCJzjy%2FcnAQwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4sHCr4OKvST4QoVircA3tWw1XgIOuGxa2HEmHdaJeQdAPhYlCKxqKyQGRGrhpUI9HF6Dhr4gAS08xedI9Kp%2F6kDnUR9z6UY0VXc4Sw%2B2SuKh5bCku0lRkq48NTATxpQ8wwOcYKDm8XG4GUNcnG0%2FI1aPnpfbjEjp74L3i8rPzWusO039Y5cK0VK%2FqlZB8eBzNhFqNOPjjwNQ%2F0iY4ssC%2BEnf%2BIf2UYy23X9ISZt305tu6cHgqEHGRoLMhUDNvrec32Q8h08vLLiRD%2BrySIu2PwER5bpj0j8UQmEfXH9mY2FVDL%2Fgz2JQiaPImgHoZwCPxBLFxfCTDspkCLcnM31kYG%2F4yzOPzvX1Mulr%2Bl2sdbsVuIIQGWj7xKm3jF5voiMJYr3HWg27f1h%2Frq0hw%2BghgKiy5ICy8ZQt74SxDocZGEMKp%2F3nI8BDEnH2QVt%2Bf7%2FEKcrMQSEbYYhS0iorHboyGIWw8FD%2FkWZd%2BGT543p3plZJMpWhVlFPy%2Fm9C4ieZ%2Fjw3dSeouE4C7BX4AteOl8ikDVYg6EUSqjzKuwqsbzXZcb1Ect3CH56KpsrtxY%2Fhle6QfuxbZrAANr1g97ti0q74y%2BOCIEXE9sO%2Fdq2owagBJ4z%2B68%2BcCzYHJXp9JtVSZH54%2B%2BSGLoEI44FSDMLCA3ckGOqUBxnAZ%2BTd0Ax71ZjyvtaaFgQ%2B%2BvOIKRcVbr9pFe4%2B%2BGFzIdDbkKz%2FMVEmlV3NIaE15ewNijZ%2FIZuOj769AEbqnT10UiXCb3qv2dawYi0A%2BD4ME1KZhiO74CeL7%2FwhYmmk1h5k2VrD7tXhHIxfZVagobpxWZlAnrorY7DqWMRjNShot5PJru9TH30oqVwwK93DTPWJLUgajOMj%2FjbDAem2J4U1bIF5m&X-Amz-Signature=e0d596f88dd8c9c8eeeb8314112afd34aa2d1bc0af9c8b8e03ebf782243bcd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

