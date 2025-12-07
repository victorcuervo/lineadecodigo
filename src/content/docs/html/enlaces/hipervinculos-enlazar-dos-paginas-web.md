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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IPATJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxC%2BkOnRp%2BRVn8rb9QU4fDV8Dx%2FVXKAre28ntUEPpEzAiEAp2kLCD0RpjNbU8nmVH4w7Qcf7s1Mu03VnFBKRKNEDkIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOlDn3BM%2Fm3WBMvaCrcAykpNhtB4eb1ki4Sja00LiC056Jn%2F%2FsNeVHTPlB%2F7av5cXEIdkyPHSHscY2K3l%2FUyB%2Fh1D9nF9MbU%2BY%2BBPgWYRdzU3QVU3NeU%2FDJqCYqEDzxMlrh6plQSoe4iOXtxayrnj%2BhA0h%2BW7RImd4noWLQbkLbheW7wv4A0aaM78hINPt6Ji3Bw3YWcXCTM%2FUE7OJx%2BRg4r1PhZCnTMRVwKBQl1DqJbWvYbGPKY03HbDrSXM%2FzAxuy1XAzSru7y7JyAQHBJs6MX6Gt1cnYZz9R%2BoJcAklfqcLmB2r%2BgGVyYaJNW8NQR2scQxPZ8%2FBxTi2B%2F6rMs1UEzqVALnjjTmEjpeIETpDAFggH1mBDd1zHbJg3fvV3%2F1q%2B7gUg7fsCTmHXanU8Td%2BVn7BeYlj1n7ihg9HBSnPjprkjzY1QHzVMjXzIWTRXjl7Xv9Cc4B4ILhdc%2FrpelyxHTK0zZJ9Zk24fM26O%2FR2DarGGEHivM1LtxijJmilTKHAD3l5eN6DDsdYfNc9LJ9Yy%2FLsLI4BYmN3nQZ%2FvZ8q%2BAz%2By9Z43Ug60tegaAE3De2yn8PRpZC11QRMowpGTCYZFJfX7mEDeyFWSTEN%2FmR6VqvePCUf2Gqa2t7iDvxbfWhAI77i%2FKZsj%2BqJ3MJr90skGOqUBfGZHOSWycGUFPz9fsMcUfRWnOxJIRZWYR0ohxgedBrF9lwdjv7RsgyYVqLqqDaXhF5imGAk2vOC6OMqiXwRBVg02ME6FdxLyvhdF9wDPfPB7OupkXOh79w9yBoL0PgzL6PBKD0kX6HzE%2Fte0dF5e0W74ZNlNqntAmvmza1Id9anE6T2N8PNkKINomkzuR%2BjvEZ%2Be4p%2B%2B%2FHFi0MR3H6ap33R7Eeb7&X-Amz-Signature=3f07b41ade90bfa50f9669912f009467290796f93b27accabb741bfc54f2ec47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

