---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYG4UEDT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHORvV0GDMthz%2F%2FMokC1XWjbqzqbz3peOg7heYIy5QgQAiEAmUB6Jk0uxuS68Cw6Ed7CpSAv09owFeZol3ue044Pf%2Fwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDG%2BrzCz5cbqMzXN1FSrcA7Q64phO%2F82GRdvfPBbS3MrMf%2BKxArlB56%2BYG2fKq4UH%2BKaIBg%2BZOi1ZlD2%2BgIDcR6e5UlQlOszrSHxTHFNb9oLUZXY7Zzy2lLkWCVdl4oU2m8A9vJfJzzlDNgpODHkLZN%2BQqwf7iPFFhjbt8AZ31rVj18bLwmCR9n7nG1AkyD5RjOcvG5UT2%2BaVWl4NA%2BbjpIkQA0hJJKNyDWwwikEjIFH14GBKNBRBHUDF6f5VQ7ZJKvb36Fv7FteNHr0bR%2Fmsa6UbdWgz0O1%2B8jb2ebf%2BWw1YnM83FTwY14xLPZqO2GcBibkl3LvYWMRFno9MjXpOXKdtGZqKWJhS%2BZ6EflXw4OU85qhMz%2BvTGDnOCIKVBzQqf7Bj6j4SV4oaK%2BecCFIBiDnc5eJf%2B2wToivcthRj3eon5usL2ma1F6J4sOY1fSv4gB4ggN2udwLMa%2FX8yYHut9YvtfIQTSIZoGi4PIq%2BABcvZo9SJ65geNYtGMUB%2FdHEhyrUD7E7Qg%2Fdo6V3zUbdrwYTyvbKhJKscd1dFlIcXlf5vleLEXGYQP7T9XLSuJS%2FFGYspDDbud2DSfrmhoRg4fYZNQwGJ3JpnAP6h5WXYCAAlklY3ddomR35AJoH4ru9XV%2BhzAUFJ%2F%2Fo8ZwjMLTzw8kGOqUBZT5ygAPger1oaWQS7yVSyz5483F6gjpoaOp7m1tq0%2BJTVjmCDXUQXicv35IkHaX0mzAVg4t9BvnQiItxzTUoYnTR6NIcov%2BB6k4q38rancxwgvSsqSWAg%2B4bLcEFcSlHsprji5irsHxh68KkU7ontjUKGUAMdJDUqVqhpYV5eDC6GvjSo1iH4q5stYNx94m6qLh71egfEL0UHyyL34hZCxF4Gi6%2B&X-Amz-Signature=f589097d3e3692800d283ea582700b317640c93967d549e6d8f546e7d454692b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

