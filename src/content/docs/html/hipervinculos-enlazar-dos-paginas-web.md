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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKN23EB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHaOc5ExZrpy3kzCEmWvFs39Hf8mcptOx1k8Olirc61eAiEAtBuqnCGUnv7E3HSlbLgKqA7CtovLwSfeMjY2FZYqmXkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDT4mFNqN2L43%2B%2FnnCrcAx756zfD1b43pwV%2B0uaIMGSUxYt4fmEGlqvDpcDdr0EHuRg6hEMVjZP4mBZPL%2FIUVWFwZyZEhcLjT0cHscf%2FhKYb9KjJpdWZsSC4ararbzyTaXa%2B6L%2Fl3KB8%2FAdce%2FR2vHg6tgvqMw4lhh469li4jvpmhpsNklOrAtC6n5BvXgI6BBF8KltQE2HK1mkafX5C4r2PSWhZDxWcTLXoXpxlG%2BJrlKrjoN5CXENkkBcOPA6y2NsaV0NakRe2A%2Bg%2B2jX9%2BPJaGkqgqa9KqJFGZ5QjQnzOwHFL7v33tY4M6eZCfNJJu4N7PHnRbh47dVfKoyBNohCHfz4ZKJRvN3i%2Fq3N7wJ8F1o0mIheNfE0%2Bt8G%2Bd9VqNKPkT1Ia3yMTsJtReMDBLNzbZLz4lj9GLpsXIHXnAobqztI3NjO7%2FYj4L%2BBJwCRIbucLzi4CLdNJuFSTuz%2FVzgP%2FRjpIiAaPbFdSlcAb34oPG9VvgkoHnqVvnoX0IF6INF3zz8HNSIoUOWFyH9IEaiU56kvhCu%2BVZDpTB%2FrqGOcXXRo1vq5BSlRYcRSdKiin4CG6CnK2CnjjzWMZPKnBuw5lSLI62zy1E2%2BVtw4mKLjlgrBj08wNKs2FzHbZfgTUt24LiAexS1lopeZoMISSwskGOqUB01cCd2Idi2pLt4szUh0vmh60HDP9rih4XinDqKKmz2jBESiI0Z%2B8X5gdZqJfm3OcZrEcLGCEI%2F9RUV%2FxGyKvNkj8gsPSoFhbDezayl0DyPyYAot%2FGntD8SoCzifbJbRYl6nmLL%2FHj3qFqdm1UNOQ3Tt8o9qoymszVn4jVz9QthIIWulvzeo52UFO6WboSIW%2F1eIHuMZAegC7w8by4g%2BGkIhR%2B9cP&X-Amz-Signature=9027f7651010e078553f67b850ec0d970d3532893464b6e2e8c42654c0afdbad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

