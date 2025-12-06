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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJAD5EG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXqxdZk9MIQp7nCYjvQ0dFoKfW4NwUFsg2fzuvSyXRvAiAjSrWlEQKCAKcFjV3F7xA3VSY7OX4Hdlp034Yb5aT0sSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMNxEI4REmVcs18qDBKtwDqi8foJfQ0LICHj4V71oy4HgtN8TX70HnONq7tmKJY39%2F59mLJ2SN0Z7qScZZbD62WIlWGkMh08PofSoREmHRf9UTqnQGilHOu7RK8QlWFvH7xRqMbw08Q7zSjQhFS2xNMPgu3AELcWii8doG%2FxgNY00lqv4C2BQU0j%2BmFDlfUC7wsVPj7lJK%2BauDhSVGJgdxfyQEc%2B626ymDqwWAmw7rtvHC9cvF50gXeYBYGc4ZLVw64p%2BM9swY44%2FcLSlP3pL12Eb5wfeuba1iUSRUALxaFF5PViDYVumdqbWwJ0N474sTQpbnpjvFkjyP73rnU6a0trc7XugQn%2Bri90FCFw1PON4u0uAvzWqiSha%2Fs1nmW9Vtw1SyQzRFvsQpphIsmif35oLhoCUeltkoPAW8k6PNODANaRdmrQfnNWSRBztVRotOVdJynRUOJE1crOhboA0PfC2kY9YdqXSnq8IVXBNYuEVJxQndlicvKS2g4BMU8Iavz1fudh07Wai8J4GYrTMJRvN9PiQPoJzgvvKlwmTOOXykFEoEL9gX15GHi5z5EjLhJF%2FsVyYAmGTLJ0ttA8sS8mXLjAxHaBZabele1zJVPPHi%2Bt2HLgX61wooLW1xq1B0fE%2Bhr5naWJ8viyIwibzPyQY6pgGM4XYHBnuwR2L9yPQFVpB%2F6HIp7QLOMGCt3bKf0tS%2BUkJuvrRvEL1OTDO9FArt1D0G%2Fy%2BR5Kyly8cwhjKG%2B567X9dQT7jancSLf9CIYZDmfcgEmY2MjL9eg2MER2AtuuDVIb%2FdFEksEAYANuR1U%2B3EqLe5JYiCQmirUiKqfwk6skN8lP8n5GJGqPtKaOzB%2Be1xEesDu4QtnczwMR4RFHZ1GCtDfNyX&X-Amz-Signature=639fc752c56748af2abe7e7f075820725740cf0ad3b3e323d0fac305b80a24dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

