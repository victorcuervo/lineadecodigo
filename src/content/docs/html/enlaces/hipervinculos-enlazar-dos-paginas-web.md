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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653RS5CRR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvgY5gxC8Hn5t%2Bt3GWOqBvJmD5iajr%2FFzLOHpu5AujfAiEAzTdxKoioC9xkZLrEbTvM0Q72xcUD%2B4fobcD92yhlcWcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVLA1gd%2F3n8NE1LRSrcA6CcSXriJQ6g38Ooedgan%2Bp9IG980%2F%2FEzBpoId8kbLmtbqA1wZRTFkdrmaDTuiCnqFfbyR6QdUJfFbFllrlVHGkdHgKrS1GrJjdRhKtT7AsBvnL2GygrHdT4MvFxhhHkBNqqYT%2FuHMdvQzqKZBSV3%2FLcfLBtvTuZg9XZlMEGbbKZJO618fiTuqSePmWegkDtCXteq8E6MGP%2FvZIYn4fj1JxywU9uStRiWWuxZ%2Bo%2FqecwjVsZISZ6lnKKa9GqkjhaiG2lkouAL2LAz4rHOIP%2Fce0v8GcSbHTQZwH2IP%2B2GcaOKIWfLT4NQTCwnezIXWGvE19WfGXK%2Ba3gVxgbPID50XuBgkHL25fal%2Ffv%2BrDVYT5QoJMRsF9TSbsDwJkfq82VbGEWiQLuk74sfgnMUCtLCeObYWv7xh6goze1ObQUICPGibJlSNY4cdYlAMX%2FhoykQvuERhS5bPcTcS9Sa%2FQVUgzdtBUTESMKveomPJaKxLC4L4KPv7xk2lYHgOlnzndbgA0G888BKmLY1ZX9H8Zh8FtIH1Pi8O2BVKHs2y%2BKtdGZNFB7AU42C83PZsWboCe%2FvKE18liIb%2BrcuznXqTBsp7t10k53JoFxEsBKcAO73Tp59RBzwmgUq6vCDbRiMJ7v2MkGOqUBGDw8MDHZ2q3T1nXf0GWc2QF%2FatYZmtHVribtY73VgbODZJCgcpF4fVYCfQE35Muom602%2B%2Bt9noFibcdKsYrzd9InnHMK5lshUqfIFUyMI18HJI%2BzS7DFood5GfONe4JYUT54GfGQYDdvbRdFt7gqW7imjDmMBCWL9eYzJMlHH0mtjGlKg6vgBKgGxMU3OxxitOqlpIJfKLtvEnyj1VYNtvSqKXoK&X-Amz-Signature=a2dac22ad6d09ac3f5176eee0fb2f474fca40bcc06b0feca36162ccb05edbcac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

