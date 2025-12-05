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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YU7FSX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVUnOiTOqXre%2B6Q0vzjhiIv8kODMIzslpvYU8YFRXa8AIhAIM6d6KPyQWTpQA9urXZsk8KW8J6ZwlmLWwv4qv2D9gvKv8DCFUQABoMNjM3NDIzMTgzODA1Igw5YMUT6RXrgiuqmCYq3APuAmwOH27KUJ6rycB7CPqXREIs2EawJuXxD11TaAQhrxtmeLj0wml0gxMuBF9ctWOLzZn7sSnTjcQBngniHhe38svUDrLxsZ7Q22lIcUfN9T90bVPP1saXrdWMirVnTDUfxYIdN%2F7V3Z%2FssS423PNDfT0W%2Fxbxol%2FXKZMRxAk37zoFSwZPcQJEuoaH31jsMZ5kS5hvjXjxgL9z3Yt7c0UFPM8d3xqbFnFQbfpOXNU0xO0kI90U04UHbKSDFLH50olpB08UXhE4qetILN5C1MxQpYvA%2FK8oH8NToRo71bdS5MufM%2FuIjOuSo5c6ebtxVittiig0HkTkHlQj%2FvT7gOyVv1CLsOMEdvSlG0wg0njF7nWBVynksxD6imBNY10TK%2FsPuoaeFEsSKUsSyEnXe%2BUEGpbx1jmStpy1G7vd6bFMnez4Q1KawGHiHt7vQ3Mz0fvkGI0ctgPbDctIXNazBB8NM2HISGUZMwPNiY4Z19DZS%2FI93sbhUe3M9MZcAvk742%2BUR%2B1RVbEBIBQzJtDI4XlhexWY%2FowuKtRXhbOk39yQ9OExobQIQd%2BAkIA38RIOXFF3J7V34wu5D8JLum%2B7ZcUdKBt4cyvWSleILB7LVFRZyJbtX4FMUvU%2BTFiu%2BTDkssnJBjqkAf7M7iE2bdEedC7UdWd5g0MFIkomSTU2bnWdrAPB2Q6HQbibqjf0dT53IfrCTfuiW9yYccokXhxpRcogSR0d%2FmS%2BG%2B5V0Sbr6JMVN3hBEkuPWDapMGZUPESg8v46jCq3SqHRO1FYQDHOmXngeHPs4fYhNwcId2hhNIZXNp0dSxqSsdX%2Bf8%2Bjucxc8PTEVjI6o1xCx2hZBkWIbMgXC6xW5FVCOTOT&X-Amz-Signature=30d12d4c77a844d3defa56b1c422ccd4b0a79da7523548965619d4a2b7783d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

