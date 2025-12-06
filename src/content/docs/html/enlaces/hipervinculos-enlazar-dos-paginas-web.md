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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676XNWSEH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3BZZ2RuEgCoLYw%2BfMteqhpDV4VOvyfGSTc%2FN3WOpCQAIhAM09EyiOwsJNPyGFepqYof8p%2BsNwzBDaSamBAt9pW1e1Kv8DCGkQABoMNjM3NDIzMTgzODA1Igwrp0xB%2FFikqiGW1p0q3AMD1uneO%2F8pL5ZUaM%2FJnVmIQ2zZn0%2F%2FgFZZMbf%2FjAGhDn44HfL4R%2B9YARWP%2BlGbHJvvPOxy7J9arNcHKzBrPB9atePZbvhnQWUzLmPDbA63nccXccJewrkHErqqqX84E104ScCQhWc%2FS1HOUMTRSv%2FK4YylKhnyFzDx80likie81v5ea%2BeZvyE3H%2FzzRffpS5wfsXMPqzesA766ndco9ZlGNd%2FE8sisWIIbdDWT5aJgF%2FC5741Yc%2Bi7HSIGJCHHyamNTC5lzpEdm4WClPVF26XBFt6ppe7A0JfRDmxpmQ3PfsZyOa8vj3M5L1yB8TvlkR4%2ByohQu95FRDAhq5W1eg0SeSMRuLSIbkLx%2FkIU6WMokukuLaOL6WthrTw5Y1capzZrQh1C71otyS1wC%2BP3Vhu5ICPU5Kc3Y32PGOqSBHUGHQA8IF9TaDWDpwf8LWEpoO8yMyKDa8cf1WHCzfZe3Pb9REGXPtS8oYE5WTJPpmZU5sWcgiTOywySafz4Gssw%2BBqq0cFhjRT7gMJIVGK%2FefAM3IWn9I0CnN2OHrreCpp7%2FNXindZecIwvzRYiT%2BtAwkCyfpID8pjvJcsiaWKi173Gp%2Bk5QzqyWRF%2FLycDR%2FNm%2B5FJGFbQNARL2AB1ITDR6M3JBjqkAf4yoZh9%2FHM5TEycAIMSLzls9Hx8%2BPWQwygY%2F6r8Mxh0vMs2nXMNkEgvkOW%2FkCmCbkXeL1ewAAm%2BDI6zgqQVVpk5ino6Hg0sDl8n2if7weneAFZdQ8uiD4JzwYFEs5jgC5r1uQHjwq1%2F1FCSqZNsED%2F6U%2FYUXVgFvpYvWR9N%2BDqMWyOenw951MZcngauvRLoXqbCRdwTnCznV%2BECYUR5kOUxJkiz&X-Amz-Signature=fc435f7b479c8fe81e0ad357a0193c8233a8b3e1211690a62f2a9261600e0716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

