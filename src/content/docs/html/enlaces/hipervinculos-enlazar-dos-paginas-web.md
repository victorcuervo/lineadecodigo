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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNZQLID%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyYMUFT2sK8urB7totUVL9t82d3lA9NoNoqSI%2FFCQ5QAiEAjosW4L0fAmCBUybCsap6Lj3L%2FVwEwNBImfzUYCMR04YqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcoAgBTbu058qGY%2BCrcA%2Bc0LAmt%2BwM4ClIkSuHTsKrBq5ZyzwQtYMR6%2BNsJC6%2FNIf3P2s93bfBR7Ao9oLKVorA5Wh7fj9vVqI6knaGAYEUwajxciaR0%2BFysIZDNLbu5WJjHcBem6AsvbKunQafDh83DBn7u4xS3ipJuBlUpl63ZLNghQRjpAFKGsYxwTBx98UptimEX2n31lBFuJN3W51v2DVJOA8arJD93zeKWtkySbtdJPrEt0UCqnB3EAc%2F64YlD6Z%2F18fRogTztA%2F2PekiOAtQV0dzsZl1Ou%2FlxrWz1S2u9tsgMXsUbX%2FKTYtzVLPN22mq%2Bhce%2F%2Bm2EYHA9in65Y92xfedEESJX4yWsb%2FLXhl8AirGD6K9NPJ1u5rumVmjO3CJOPI%2BZ%2F1ijtvHRXGMMgMcv7QHf%2FHQov35tB7GWg8W0g7z0z0UL9rUD0OzMsnr3G7cB7%2BHFTif44hv9whjUD8q8q%2FVCgHqtVAsVxZySF0RWE2gkiulgFfxrktcS5trRl2XQD3QTSeGMm7syCf4DJRxXHy2GFQa5iogATE1U8vd9ECrwOD7bXmTcgmFq6dngu09Ex3PT7eAIYEiQA7AyOFuUbkikIRrXXmmrXmV70ICaZ%2F73UQSMjLvM8WOcqmEKYdPRuZ0Sl1ErMNmf4skGOqUBh8mZ7d49Q%2FPgCHV94f6vRS0ho4PHgQfuX7salrIr4U2LP%2FzqcidF%2BqSgx8lVKlXBBwhn%2BLIHHVtDOubrwbhTIfGWLrybcggi20PlSAwwvwdeHwlSM8wGCVRh6X3Ae0A7I62XgiL5PNJqvbBVlcKuMGJGrmDDNl%2F63HphhjukUUm5yU2vn%2B%2FFWc7Xza4kny7ZkuKKAeP2QR6uD6LpH3ev2KHYIMiE&X-Amz-Signature=eded3a527cca850c74fc0cd78da5bc12d1431e3f37ed84044d1765a272b23548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

