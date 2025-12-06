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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIMXFURA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf7gczrn2YZNNSbX0eTaygA%2BEcH9f84YWmHcW%2B%2BbikUQIhAKI0UAzft1Qm3rsVf%2FDOiJXflXiCP5BXKu0q1ttQMZ0gKv8DCG8QABoMNjM3NDIzMTgzODA1IgyjlxwGWib9YiNEsf8q3AMBcgDLIT4i0bN6wsEofAHIXFYSB%2B1CDJJPtS9sv2yVgMx1WlkgwfjU7VREs2o4KZ5jH2UARtIVwwexHddd06sA%2BHH%2Bjr72UkQFm0qiKsKZDhGg14xLp7pog8IMRFsd05RyRAvNTc0z%2Bwfn02f%2BZuWtTDniTQytYAlEgYLlh38CBVolIdYlDBZVUPul61hrfIstsRBgDCV48jVrgF9FPY1irKqRw3W54YBY59%2BW9nT38ifjdsPBN4cZ6Ctq08Pp5TYYbLmq9XuaBNmvJczX9lGfMIfOZ6JIEb1PyGCyiojHNzMrCcmc8uUe2mr70EDvC0nbZIZVNNEzXXn%2BshGYOoQSdVdf8UOLdmNuUBxs3ksi0PSszt9%2By%2BYzNt1EP4WU%2BN4lkfTYrCkF7uxkY0CTp%2BmLfzEd8gx7ABNGiUeY1sxojunSxg5cGnHqwERGHDxrjYQuZ7%2B7y5Uz8hB%2BpsHvz1KxKxbpRhtbF4InyQeK%2F5uI3DhNvCZtgpTjaHKbLX%2FKogUQ3Txv7mtEtON0QBido5QRXmL65P7X%2BNAlGtRQ0YleH%2Fsan35JrSOEj3uDEQdLW5P7oMvPU%2BGLbCEv4Dc6zkYzSylqG7Qu2tcSWMdwgxxDhGJ7cj%2B7PWnKpc47EzCS%2Fc7JBjqkAfvxvBJFjRRpOTbcvusCJtasUe0GO%2Bbh7SdN263vU0E5qw9UP2Q44bA22wXCmlgFRecjGJ%2BlQjB%2B4JNTlU5YuSfjtzOIwR01XCU%2Beo%2FdQxg5kbdIFf5InBZF3zEWDgTTg1A7MHSU4kRv1TDBcmprjqSnGi5Sp68sE2ubITK%2B1TEtEhJLnbKnswDdsw5pbp0JgYqxmh1mieRR8GoxEPBrfPRCAXJU&X-Amz-Signature=c0bec0de633dfb05835514c930c9d5ebb37f4925b9a6270fb9fff20c50631933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

