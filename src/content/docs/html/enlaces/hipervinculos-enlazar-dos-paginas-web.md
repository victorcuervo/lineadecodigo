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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDSQ5S4P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGh1nZ8S5TuLr9oC%2B8%2BxwZJAJtv3MbBMO6AzLfrnAWJmAiA4uR5IuA0hhjNbL3LeiApOju1tJ4aiH%2Bc8gPH7aUVCTCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wIxs0pZYhAuJgqQKtwDgYK3OWWniYVCh7Rxtyn9HgnaYYeX2eLuIUJyo5raKRE4PV48P0jGlC%2F5ByFmdi2v3JGh9DGHkzhI3CqeF5dmCXZckUa%2FEWW0aba4laMPq5zDYOM02dmE11Iqn%2BCAjNzvslS3hlj8aeOGYrBSTrS5bybmJkyKKKCsWJOWeK6T%2BUvun0TG24UNOHhLdg2GGLl6L8eRFDpT%2FVSkYvrdieCNPN0EsIFKgrVixoviVXPZb426xYgI6D8YBVSVrHlXwizkcU1lDnpPwkiWENWwwZRXdoyDuIC2ewJn5qWlA45GB63cQEU%2BSjgZsZAOSzv3ZCJOmVncaWjLdBjlrFK1utxiF1mvqZPHLXyb%2Fps%2Ftq0zEl7fbPj%2BmW0efN2J9f6pxejuHnZH7Ahl3ee9ltuv%2Foieo1Sp8HTvFfDYXtkGwYogu%2FVc7YMmo9AyPHQyq5atxETut2hfZC4a%2BS4iWCCgWsP1z7u%2FsQSbGVKUBY6qCwBFzxcuXsAIz5RofuTwE7wuDntvCjlYNrYE1fYhaEzpo1%2FbJEOOelvSYcSJxrrOF5B7GQwT%2FPXslSNyUTJZtK%2FAXjgLNMHOiqjXfCVRCJO5IsrO6jl6z2SQ39IktMmkNeFwt%2BZvJoaKLm43yA0nqPEwwIbcyQY6pgE8p4cZBAHPnPrptipTjlj2iDe6jSXIoEoO1BDU15fYx5ElEiE1hqrnvLJGwtKGCgflrnf7W0Ss7GT7k8OUbo9JWgG0890F8n4lG6bk%2FOf9xe0FEnv8VRMGpriGiYEVAuQvWJ1G1ljYAXaQZnk2dRGnKrizzkrabAS0O9fVi6QOaouscAx4UI8C5wJrwyHbsnA2rxAB3YAYIYq%2BQrGzNxoCzJJPbFe6&X-Amz-Signature=ef11d97c4bf0493981bd4460ac4016b03d6a9356926115c1e20d9375865f9049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

