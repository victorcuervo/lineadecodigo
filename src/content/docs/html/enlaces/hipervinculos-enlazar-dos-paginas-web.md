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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYXC25K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD5v6w2U%2FPG3hzuPC0s%2Fvi6VbOe9cbwW0oXOE%2FctMgvwQIhAPie8DY3hZXnrd7vNgqOs6QnsBOYYjB2UJzm%2FQfUeKtyKv8DCEUQABoMNjM3NDIzMTgzODA1Igy%2F3%2BI9YB9YeJMorE4q3APQhG4Qbt64lWDfUP4VfRuqX0e0qIHqtG6CZBkIw3RA2KsuwrMYA9ApKKeBRfEw1a%2BCUtOzlys1SXsiugcNjd8clIJYW2XWRIyYbOdGQY1XN38cGMkq%2FSVUfJr4Sb7kGTn7abQhsF5L6H0NZlLg%2BlH%2B6yC7KL2p9dg0jmD736fPWvzpqdD3gtOlwamMC9nslHoXRVxcmIyHBgBT0DsiTihWvxLXsTmgPy7RKg6XFKDQ11YuY0SwXS4ZfUqWZV8RUTJxbyYRU7b8pUGIpVdMZrlXZfk%2B62T8QjYWMHXbFdMLgfzlk%2BbRn6lhD6NQKOV74Npdux4wl2S9PKhbRpABHAbZ3Xa9%2FVogk%2BnSioTD8Fle1qxC8c%2BB3u1ZfAhRYSknZpxH2m3DzOdZwe7PyRiwTNs5huBnF8twF1vDPQY8b4dIEBmz7Ap6biQHL0u%2FBqcWD6%2FQWS9Sf2ARipfK65BZlQetC0e6X0giYy%2B%2FEGTm5ebHaa%2BR%2B1mrcmPtiyY3VDzhiIE5hpnxzV%2BRnNSbup7Vk045uih7tI%2Fnc%2FIuyjklmkGu407%2BuCNaJ0NrenW%2BgVJk%2B4UpUvqA%2B3ss%2BCVRqOuSGkfs7XcUdx2epMAEi1yw38y%2BrOyWFen4IzjH%2B4aYxDDU58XJBjqkAYgdnkO7X5jOp745EHwqnWhgv6Ej3b6%2B3Xws3MuoWc1%2FVeA6MgPWGS1108bqfQAw21dTIM1eYJ%2Bo1O2Y%2BaJyQThSBXnQWUo%2FRxj6S9a%2BIsBUjgM9pHYr7O5%2BIg%2F9dPo%2BJpVIikIRMKL%2Fc%2B2fMJWyH7v3gag46atJAe6fXIhCTJ4pjxAcgBApu4q6Y0laqenlhCdd1hNgNpQl82ub5%2BHo9Oqjr1Sg&X-Amz-Signature=8141d52847217c432326d195a242671250f1d8e0b6984280f2e7f615e424412f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

