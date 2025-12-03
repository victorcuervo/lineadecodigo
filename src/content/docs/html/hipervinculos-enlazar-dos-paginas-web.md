---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIIVISMF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBinsED6v%2Brs1NwLoo7EoWmjQbv%2FSn0h4Jh5F9eObZs3AiB2dRFMWzJHMDMo9SIXrrrMwJx%2FJjbEOtuBGHTfc1xa5yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM41SsHXqE%2F41g4YPCKtwD%2FZnmYXHfcVr4xIQw9411UY1XOhaflhxBx4DQz7THEu9yq5SpIVL8fR4kq9CN1b7sH5XLC6VCz8RPmRU9ksU%2FhZlfq2YRczZVaGqZnjprfm%2BUpW3QKaL%2BbBpcwFlo2H5S4LlLXQ8wuxX6BYgfX4QJrWEgKHp47YC6pmImr%2BZl0ORZsUIqn8MAlsYuaF9t%2BwkKiQ4ixpjTajusQBJkrFAPzLq5lK7pKuN1dc5PU4zaD67ySSYKnVOThUdvfMkmWy4AkcvXOI8kR9jdU4%2FoPLd09EvzWH0ogAuqtr8MumTC3i%2FoPEdErQWrYFb6m9wFKaiBWFnC%2FYxKvuD4xn0%2BJrVJ5aBiCB70Pq55NF5cR%2BRttJj6T8OFH%2BY0JGv7dUp5fF6Uh2UpmmwM72mjUbnd0UYZ7DnA8Lv6ijrxKjrnMPeqYVqp4eY2UhN1tBAz0BEW7e8nWmL6AjmActHiwKmKfhTG%2FjiEWkFd%2B8qw0bQmJ3rkHhnimy5BigDjT0GGp6Dl1xL2%2FU5EDjhim1XSmm8ViIFq6pWVdhgOeTAIEO8prPTWb3y7016KKR1T4X82Ma5Baz5gvfWrXMtVvW%2FbQ3NV0mfS4WDkD8o64k5ZGpp1ZSSv2fy7zGkKM6ZG84N7mqwwnb3CyQY6pgGv7Ah57QKaG7DyrEAizUeGMYgqeVoGR9%2BQlbBAuRREYXQMvQfbZv%2FwLKSq6Ub93DtD5yFdKHM3AbPBsMTGiqkm8ceSgeMlShhCIqlP2caQwJs2uMexS163cI%2Fgd15ufuIAKczjZL%2FcV3CbHiAyy%2BIJeG2a9KggzheuHaF%2F6TFyRJz11IRLY9nwYm6Srr3GsTwY9XVp3Xt9yvSgq1eMonVPqrh6HOxP&X-Amz-Signature=905dc2a3dc2535c3d3fa8df7c0f63f29f7c1f169e2bc7107685e64d606cb3232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

