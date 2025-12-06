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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJMLKWJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHceOK%2BLJ3YaW5okUMYrlIYUIrsYrG8g%2FyaD5IJNowkYAiAp6P9NiVOfoJAWc6BSJyheH99eqwgxLSExtZwyLrJT%2Fyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHeaKL6MaHHZ9prMzKtwDsJqfPOmAbAR2q71nSyuB3u%2FRJBarP64HynY0TI%2FIzCG5powk6OZKrcrmlwb0wwAShOqGlNUPPx38DeeZbBTHRbVx3K0ZN5LsoUR%2Fb%2BgGpU9H2UVFaXTLamO3DYww3J4W%2B7QG9wYWs2XKGE%2BSU4%2F0m3sY1hEVuTvvBKg9c%2BlZNZqbJGRr3rrnnj11PG9GXzwd%2BRYbM8koMEpMlTi4FaKMyGNhwc8uoKSyhQmG84ZPS5XvegZ0gKdsdP4qmWiQuKt5aGmtNVjc2pVh4IY%2FjdZnzEokM9nKRT3fHQQD2uYxsfia39eS1jRMe%2BF5%2F4TPdEl8NJO1Z1KAxXMmMBrdmlvC3bZV4pcn2IC41VIjbphMe8QCSJrLQ%2BCOuEN1jGCk6W2qd99kWQxZBvmVmas3mxc1jMIz%2BqYdpyVzd58Z5oWxWUp%2FwSsQayS4xDf34WTHR8zeIdY3%2FUUiqxpDiDhueFyMypLOqLNkPyixDDhB6vU1TIzd690vRKBX4m04slFOrIL4ykOKyng1lviExoNd7By%2BkDna348WjGd8xUHr1VvcIn%2FNmHPdtQ2uOv0LAQ5un5%2BJyY55sTkD7GrNL5dzOnrSJUyRVq1aI0yZ4qcOea7oWnrEuGju9SSTZBYVkcMwj6fQyQY6pgEH6vdoGRrTSrobSOZe9tNYHDHxR59bHzMoMM6NwhDJtRldJ0aH1QQjI6rLmJfl%2Bes0h%2Fm%2BqtRhaxvBCbtRrbFuaVZztksJSCwWhvYLeufGwrOojDBCxiMSDdy6UkaMDkGLYkvq53AqefVyXwXYSrhXrwAu2%2BVKFg5Mq%2BIHoH0Rw8mxF9E2Z85ZynXw6517HBxHFfDragNMY0L1ZlsU7GHu40BXze5e&X-Amz-Signature=7eb9be920b45e6f1a3f72a1061275cbdb39b263f39b23208cc68bd85f55fd7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

