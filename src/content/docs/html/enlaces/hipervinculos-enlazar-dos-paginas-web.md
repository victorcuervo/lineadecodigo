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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5WCNNS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDg3PXUe96pocjQfoSvbOX3CoLtsNNsbthGzeoR%2F1f0pAh9fd%2F%2FDD%2BuN3wMS0Y%2BRGI11c%2BwghMaXV9sjK8PaNVsEKv8DCFoQABoMNjM3NDIzMTgzODA1IgwKLcZAXI17vbArBsgq3APS7XgZD1ATDAomDIPaagMpDmVguS7lorJtM4PKmiQ4sdUtmflRJDqz4ltFZosfGTmDzWKbnyokUJo43P0gHk6RQOBF%2F7Kee7gKgPWJOECUBGZEciHPA8oPycLAxi%2BbLMUkeL4QN2RihOytvcid755fDZ%2BzwbUdR3sCr8zQ9JY9pA5pRiShy2%2F%2Fg3og44E4l0BgwQYR8M3pJRu4SLX77QhJu2nwKbQ5qjYk4ODs902YvoUPk0IINgJneuKEKpLhKBwpadM5RxpVpPfIcSsSNqpbsSoBjPOpa12HUR9axqCdUMaN0TA4m5i%2FeVxBnwZFZUXGg07lpR6vVjdJd%2F2Q2XrX0QnPegPbW6pAs1S%2Bu5I2bib0MzMikU1Uyk0WyOT4y4f3in9XD0U6xHxSBqGuSwc2oDc81Pa7QgZgjEuF4xMngP88mlGqkHtWOOBA9uS0MyNRwHke8IuE4BsNMmMsdRray1fBvBOw7BGFj4ANg3DpjZ4Tq9GC5fmYgSd11P7RRkgpCgW0CeyPpOPqN8EfaNEhIIkzu%2FsP4YUTOVEckfj%2Fuh8TC5zovZ8LkvZgZLsqEbJ7z6NOpJ4D%2FuiAn6YxjYDnexNhmam1YkeXS8Mbl4r%2BNCiYoxGWOXITDAQ4cjC9xsrJBjqnASKduI5SwYpJCjjjttlS5yJa6JpWanxoDCQO3R5icCPLRmcslSgODj56T2cfPec6vdQsJkKpKQ0QmR2Nkzvi4Khj%2Bi7SXe17qDM7T%2BKCcP6XaV8INWJCJFzQqqHL8M6Wa1yBv3g9cS5uZioQt9rPRQznNT%2BitxhlB4wfz1HHNaiaeiDVhEDINZx7kXdTXGC9q9VWhTE6VwKv3zV3FrSVX2Cz0pl8qSSv&X-Amz-Signature=b9f7e44d4cfff2577a8df79d62fbe392e317ca0c826b5d5854a657e1eef51140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

