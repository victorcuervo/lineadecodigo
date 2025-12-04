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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GX3QIP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC1OSRzKu8EhiQI6W6CKFqnaHHVOAOyYpVKVrfA0ENR9QIgczfrjJPRN8zKPGgLQfi7ZwI4kBHwCN%2BHAXu0l2eoRJsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPFa2vttxrhOhLmhfircA01I3orwRykCure2OnZCDUrmvuKGHvnFrumjNfx36Vcmhk6szRSIVFevfTP2qv56PX6WuFFeTxGhI%2Bgs65F5Dw%2FypIihXirD%2FMJBZz2U3JlgBa5V%2B7WYgUfD62DW2uTS5cvgVFH09Ef3vhUxgwwSfFEpepigKInS6bXsAP3NHqXjJixi2ABY%2Bu%2BTNt8hOTGaU7DHX%2BmokiZvvbZt9o68lJcrqW0Bm9X5q%2Fe3CNtAyU%2BcrbENgc8GISw5Di6gaoQjasTh%2BAFA5FFhIZgomQy%2BTcrI0gM8ZF5Z0%2Bi31Lm%2FLa891GAoK88OGkclO%2BBLVRJBrpKfEmP9wiQ00IfgBPLzaLf1biI4bGXAgKyFQAXU1vAp1roO%2FEtUqpdEZsXcqFqIm5poEySjsmo%2BDL310GKAgt7iUzLFb9A%2FZ9ja4JMuXRniuKJxJVBZf9LX2dds4Do32saf5Q2cYu0h6Ovx1TXD3e8XOtZZ%2BTRHZQEpWQAF3dJePqw3tKW6ipG%2F7FgoUF0S37dZSp9GNxqEr8eIJvmeNyD4Jz70ootROo3xnbrN7RHzYM4FK4pDRNu06gYYyU173Si17oLOZb%2FtYyJOJq8Qnwj5QJuQiGXXbXip4kIhCgeda7rqrYSEynXaw5PCMLnyw8kGOqUBeBIdjpHTdt%2BAJu0BmsM%2Fr2Lxy0%2FV3RwOnv3IqRW0zRiSy8vG%2B%2F014v8AEAmNcBvVHc9GoX0duolrhGe%2F7hIweftlqbmn032uGvd2kCuo9xQTXX0O3Sf0ACGtpFnXbIZ1AyUOC9yBbVSzCdhTWtHBdU7ImCqTZ0Ebs1oWvW8Uap36eqrh9n%2FnOYevwbcL%2BzAP2frqvif0%2FdR7c56QqnPZTZduLbRr&X-Amz-Signature=9eaff033dc511ed6d4194763c49185fae5ff367a6a5c985a47f124f9d06fd3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

