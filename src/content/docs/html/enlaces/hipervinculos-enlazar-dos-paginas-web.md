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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTK6COCQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjrRsLDdRsZAHP3lUPRc5b7HvuE6C4MjozhdYVQNx7gAiBPfdVwvfG5nU%2FbCH1V1zv6c3xSVeCyBP7SxpEFBoaqeiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKm2kMXzEbnDAhPecKtwDIVeTtA4Dskp%2BumOYy0DIF95Pi5Lrj4%2F0wUOhXpo%2BCa2Tw6v2vDV0SNpzsJsGEE2pcdEQ0UR4IaQUm1tfIHpPIFbyEiaNPYXLXfF9aBQJpGZPx7zmJNu9Gb2jMbBQai6B%2Fy%2FwRV5FFSZ0FucalPozGtOXR1fMRTQ2R1z0ckK%2FQt7%2F4v5r2jPuRBQICe39bps6RUsNo46WOHOMSoKHHuUkg8GpzSuWHhHUcfgfOQgO4qQ59FkrghSwIAgtBUKWd5HosxAsqaMVqS5FKEsfcMkzbN1wJ6La028dZamENRNWdeqYKQEZPYevnensmZIphexPok5vLs0sE%2FsI%2BNwDcwuzH54a%2FYXWTXIKibGhMraJHY1cV4T2fX%2B0ehKPV03EENcRiYDpOiaCob5PBdthvbtXBVEeem5P5uEGGH9xAdc%2F0WR7K3kyQ2lVvxY47pwdh8zwnoPQhjWGi9xwKeyhb%2FbL1v8PnUIAnZGzVO48AjUqGN1Otx%2F3FVf0GGNZHXk8qB1dmyPsGettQS%2F%2FlNN1vIgHqnyqiMn3eXvRJdXL%2FWGjZwav3KlBoY6%2BYOJjg%2B8VNGk4fTH7rdWx7BmHGmYGp3oNhQmHfQHTeBKofScUrAS9zPb50txLICdf%2FzMH018w9rTZyQY6pgHQ%2FIq9agn7U439TeIR%2B6WzMl%2FsqcW2AkDRrKbA3d80THIxnjGCx3Zf2yXlnE%2FAHut1s557wUJ3aO1K14PhkeOXkoWHz%2F0dPY%2BAnFR6T77jG3NZWASHe2rUNa5IDF08gBevmwWm7IFnoi7j8JIR7QeYkLcYfw5P%2BvdQppuNNLs2S7Saa7bKbSdYkyzL6INv5Bg%2FmJPbgHl2%2BlJL39ehpOQaH7eP%2BcDH&X-Amz-Signature=d58e6a595b8052064df5fd0a25b78b75e563bb8551162a12ba9c8240c7681921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

