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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPLQS2K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcCnXp5aX6aa70UHPYqT0%2B1Ouytt6RulsIDx7OxJqL8AIhAKncaOn9l067eiVt8QJrCTqc3L2jtJQIfHjSB7n%2FaFipKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyR14NwU1J9mkNhjoq3AM8o1cGsEq%2BXBOteU16a6SG4%2B4bnR3qCMx1v%2FkX8%2Fa4rHtaJFT8NA0JkmiEh4qPFkr0cANmFjwBf%2BasK%2FnF5ZVbj6zratQnLc0L9Ln6%2FQfadpPqB7qFGWUJyaOiSF%2BmQF2Sq0OEMgjkCchRZjcr9SZ3i5jorLOYg944X5%2BkGYDPgjNZw0lNlds8Kq2iygfsR5HFOnx28tjDcyCSAcHTBeYyIP%2FECFnZaXedk0StzEfzLd7zBNfX0i46%2Bd7Bpbf9Q%2Biwn2xz8x5NYA68MYqSp77ChtvTKnBtOOVClqBx94F2oKhZj2fp0dh%2BCGKk5z2VxSpSwvCEGXrYAbNM40HXm2UDs33wGjyBgs4FW6sSAitNsbYQJuyOofboGWPLYQ7twQt%2B91wBrH9qK2mY5M45AVreFRJCl3Gzv1tWZiD8qYk45emacfK0neJY9MJWJGiOeIgyTM7i42qyv06XLNro5Zag9uZEN%2Fj24d9IbR0jk8R9%2BxldDr9f5vwwHwp8DKIU87a3wVh7wwNUvI1kPEESQstl0ale8ZhnZnSd4wOaK36tqrdVSSC3ID6a%2BxXa9nrRyuGiEt8M32AmdIVWy1dIOMUiuFesu8IhXXzJ6fKs0jhX9yApB56I3oc6q3I7ljCn0dnJBjqkAZR%2F4Q6G9ZIstKSuBYqekMQBAtS3ivnjX9B8oJtLrTb0dDDfmA6L0T4d0loxEuRL4bpfp7SjannjsKjgrZv8mefMKXLmUBRmOxNktDCRR7keUoGfJYrd%2BcK7LKuN%2BNawfDIzIvS4MCM1Nq8oSbGvY7cSAWq28IGCBbplI5yDBZIeYpN1NjxZbBEfjWuTiy2hVZQErXEUKzEDG6%2Bj277fDdZaLGei&X-Amz-Signature=e241856cc652cb95d3cef83628fae882583e0545557b9ba7fa3f137203a989a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

