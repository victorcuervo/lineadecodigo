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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673BAFWBO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzHgZ9750aB4S8tCve1w%2FAKbciBR%2Fos7tBPqbPs3SNXAiBEm6HuAfZSk7zGe6Xp4tBNPcyct%2FPUFxLBWmkKnyNSIyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0bDh4JZn1Wjq4O6XKtwDn5PtdOz9KrVq%2Bag6V7LbXIsOTD8GH%2FL7A3RUb%2BiOo%2Bt2Cdfz%2BcVzM0ThQ8dDGNK6Q5bfc2oC4X4dYffVMRRs3yGxVb5OqoCVk5dYi1EUKeWeTUvWSVnwvhsC%2F%2B06OGgg1lV9IC9dtNQ742TM8bKjww9CO83SpDlP0fzd1P33LxJY7JTIK8wEgRG3QNJVvhvfDpKsQYdn84lf2Jw2Ua2g4Fm0i8%2Bh4ntb%2BF5wNJgUZc2LbUWq%2B6B0Qb0f0zwwENrJinC6SxvxvdAynSI6zKY5GQVnsZtfqSil4DOpBOQsY2w9yYFL0ZSRqAeb5OVHoZJ72Vg9s1HmpUYHkxveQC7ewyRqj63NOuf6NiAVRMq%2F6QWB378Pkww9tbMvkcV9Z%2BcNz%2B93xGsWn9S5i3Ijfjlr5kLexLlnb%2ByGbHeOVQnAs%2BgS7Z1RkfijNv%2FepS3CAQknsM6yU7EZORTdIvEM5kBb85xmCEMW3WCuJlkMNXd4DsCg7J6VTwQWfk8bSVDmp8ebmK0YpAUw2BQdV%2FB8hDzb11uB7IAg9A6BUtdjvt3kfa3SgH4yFrofzsuM7bffvD7jYkP8MJ5pLcSkWDk4i7IHlKPnDCHD9h7ke%2FIC%2BFI2inirqgZFsYp7z9f9IOUwu9PSyQY6pgGVnAuaUzD%2F%2Bv6T90Z7zjcOjPQXSAIx8U5vIZ3iNMj6vN4REQnlebeH0b2z5PfctBiK4vzsdDsi6F1p6joPF%2B1S5JdlqOCo4SX2itKJlJFMLiS9HyuIxiNKyWeZnyHg68iZX4bCKgsYV79dNjPNRxYxf%2FLjiEDlbGz4HZqyRAu5k6HjRUUoFM7Nbw%2Fs%2FdA10Bx%2FfuxFRBtI4Y%2Be8mkX6WT7RIAfp0%2Fy&X-Amz-Signature=fdf9c33eb620db0aab844efbbb4a8806a8f094ec02527768c9ae49dd83281bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

