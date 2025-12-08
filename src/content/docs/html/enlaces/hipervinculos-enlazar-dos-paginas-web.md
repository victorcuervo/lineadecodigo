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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQA4TT5P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHLVlH120piXTzXf1V2t5EbKuQsB96HP0BKWGP10dUWAiAWJUlrZrRpCErlXakb5nZlfkTWsy5pn1vOP31w8c8liiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsiISODyAUDWxqDOCKtwDgOnHbPphZqkPou%2BHwpjo61InxWPyI1qZQ2TBGljsvbo624Y5iKJ5IRpR6f3QnMQ7TvdRJDZd1XfWb%2FMOQ6ZUv17byFGqSHEl51qQMP6SdrWjbkWw%2BE%2FdigkhHNqYrO8NKrgGJubO7%2B7RGo1Qn6ZKzwcz7RW4oWWYh%2FANLUL6cwhOY2qZHtXk81%2FT7oVXK3zzZ5toBUq%2F6l5HTQnAw4ZRUQHhLxC8DSXvQ%2BbmN4qt7A6uQ9a5gU5YgAVfJ1l%2Bt9uV7%2FaVOShS8fBnwS7bMh03oKb7pW9sBnEym39LhgSW58OF0VOtd8LAOfG9IzAAie4DqjZ2NE7te45a39FN5Y9ZHLtea180gOAIza0P8%2FCfeiezd30CqIpPle4pzyuwBOkFZxtyeTyPQqT921GZYE%2F39dpa%2B9zr1ZtJQdjvRLKVYGpXRVuTbzd%2FU3057xkXSyGH8JBC%2B4uJK2oxjgI1bmVQE4Cj11yJeMJ4NITRlc2U3bI2sB2D7RTfNs5Y5V%2BMXoPY5GiKOwbPXCuy8SUU%2FHfIpvMUuSwJKQmRg%2Fa8W7aVv56Ku3ZlYxbRQMSLAicl%2FeELsMMPhH8D0wKSjFav3fZ3DnexgA7tCvQEQ7RR9mzrY6Y4nCKThEwUWkmHFx8wtu7ZyQY6pgExwZ691Vib9%2FWXpUJho38ZPjOSJNxLEwJXZEfAot54k7pzWE7%2Bg11JUI5ZXx6J7s2nWrsXMtcPDzkc%2B94mucVvThGLsjfZK8CEjxylb6UG%2FXcYpeioTeNtxXkxEWDsDEEdhv8a1BSjZNC6iEwvVY0x67pzuzEy0R7qz8yYANqwwwijcZ3aMJKlRS%2BM1zGAHq1Mbwez%2BpPXZ%2FfFWr8Wib9g940GJ7Ov&X-Amz-Signature=4f329e946836058471644cce0def7e08c7ecc7fe46025cd6abe465f6146ba322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

