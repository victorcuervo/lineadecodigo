---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPQIOYE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgZ%2BHXgPh2gRdkT3lp3vcUSaUXG1iJdJxRx260GHaksgIhANiqbR3utiJZGWAOZwgMbDYSunuYycJPF5cWwAfY%2BJWWKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzzy9TgvV7MuInt7HYq3APfkIstTuQ9Z4%2BS3Z1bVPc8cVXGXB7Hi%2B%2BdCu9IJpNyl%2FfI7j%2BOjnY8D7VaYauRY%2ByMQ7tmrDhcFYoaGJJiEvTSolalZj1xTEHMkD9eFCSRfcAVnQGT5AvK15ykivSVdBjXAYMpOxYtkRW15wHsZ1xC4k4UJbjRLnaFFpBtQfAIcNurSYT78%2FTJp9w%2FCfU62c%2BtuSLZcqGJRl17ailfuMIyNAMjqZAGayRceoz5SwBdPrKeKZe47JjrTroq49auxbqcqDwUxCNmPlcOOc5PDXZ9e6%2FbuGUKa98wZY7lkQ5Ot2KmA0e8bUJJH9mgJeaVzjLxQ1m0jA20i8RQxBB6vrUK5sRaChuERVgsLi2NO6VwNravApj6xrnx%2F32dy0D09Z%2BuIsqxuUvhvhvYoutL2aTIJfgN5uV1I8JUsA784QGpQChVqT7QskPRsqbDjXM%2BwxgR1aC%2BXnhWgLtW5K7PC7oKvODKjE6gaHhQ585wL%2B8KOdV50BbuTjzjiggohFPTEVOERJKYoge%2BdDWVKXp2JmNF290BSTgJ7C4oAHOdf4pfUg9wUWYd4pq%2B81e%2FvjP%2FMQ06Shnro4PVwJLRpS7YoL9rJLTHrVo3gJ%2BFwWcsTvZlplTDbkutkPJAy0l%2BJzCe3%2BHJBjqkAQczxQW37gyHjcmb4WzWG1kDbyFhnSoC%2FKe4%2Bs%2FVVQoa3UN4q4yUp1sE10hA7Zp8jIj6xCD823iiZbm0AT1KKijMVFIy5FP9pHiOfM%2FlYYk0vNBftAUXuPuOqnq3sYAKUNXiYQXCw9EGrnPGfZNXMmBatKJEf9bhdYmetZE9CBuCr5YwAXmUjySsOLvr1%2FJhcOePEF3JSx0MWxvAkmgUCWE7KDhB&X-Amz-Signature=0417f88a086962f69cd5d249753748560fa2765a1dd39fd90c39eef2c70f7e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

