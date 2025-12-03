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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFI3ZOF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCsuPEbeSLPzgjAEtg3C79IhkFVZoHvpYG1TtNW2GOxKQIgD8JeRASgec%2Bm62zX5bkkq%2BtiTEASi5QLXxwxHNdQQ98q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDD09EqWCUbA7xodNkSrcA6eJgbbxSHX2gMwI4qbWwk%2Ffb2DRaIM5dko88bj0uo%2BKRUVcYRBdQCxjnZg%2B6jT%2Bi2o4GdMxYO4BtNNAbNHODFbwM9isAseGsEzgiJ9B%2Fy7xEGiLzLZ%2Bb2WmShhm6x%2B8FIv2BjmJvwgktuZxOtGXAFPr5xmzSz4rjgp1Od9HKUAiBm%2FSYFLBbuk9Jje1kuSchrZRKS07CvL2mBzEfNTkSlCBYeIcvOhcP6Q90edSsGvUB%2F%2BY7N0DjafCG%2FlselK%2BYdBl0ogGbFPo%2BbSrro73kH0tfCrB%2BbhFwG1%2FUvPzgHBVNIRaxkoFbj7%2FD7TVcT0d3LJZGGHnepFXux6zbVAmNapW%2BeMdI7r4m1XxKJkzaDIIqOFEYU5JOZ1l%2FJKNeOwlqzK%2BwbvALbb1uy1BVtmtyUJxhW0VvYaobvBJuC2ems0P98mIPy%2B%2Fo%2FOuNGRu9Y5BgGXB8OR3r3674%2BTl2%2Bb3IwqJFubJz05QpADlHivTrLaZumZ9Cbnd6VhDnAfawPdhGUKaax%2B8C6hxIFsdMEMLwrKjiS0KO4fTaexeuUfnM%2FwKHCUQSfcU5AE54Bc2Kt3pNeA1I3%2FaxM67QsuSb1wnkXZLpDRAZZRf9pz3rLTv7GG%2FiG45OwsYVcSJGtnSMNeUw8kGOqUBuFpjrmeVjXs4CNnt38JoeE1c3tqb0cELX8aiQ%2B6HTtNWErKHpgXIJRE7HF%2F1%2BiS1URRPn9UBFVKj9PfwSSx0BLvETfcJk4Iph%2BUJezz5NWIUx17gFl3j6BAUE0jkDbSSeA1bkxxe3lCGUHQ6Mx1w4HkndN8AkwnauOuaH%2BtOx0RwtWUdd6hyBuPt0QAt9WlThqqHScXiPgFiGKzrS6wtmtpJn3Yd&X-Amz-Signature=fedc17d9a7c15fb1e6ef11844af55ef71a5c72b03b3b5eab053c3c7afed7eddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

