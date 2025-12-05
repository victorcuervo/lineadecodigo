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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWBB34L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSHRnZgFHkVWpFMyKJKX0I9KcilZmATorHPYf3YsR0ogIgNeUkvBETEOkqTMC%2FNUZbIsNjYCJ7O6%2BR4vxO3T8IIZUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHGELmFmJwcxYqYD7SrcA3NjbQreA04twWeKW3Xf%2FGh4hFmI8LYcyhe9sgnzRt9h8X1qyQk21tD2nxA7bf923kH%2FQTfjvQEyGy5Y6ZDDpmtzHXgZ7EHcHu0vzfpx5wXetA21EW7C1Xxw45Y4s6DFtAXPZ9w4LYspD9%2F6Bw5EAKT1W5ptXV0A%2BpCAawZQKQwY1HroADcke%2BWdcv7efQ2ZhtgohaDpeozVrZW%2Flz2cFDCXg2pFdfLQfTPGWZkUV%2FJ2KN2MHbMAEdSMk0rHdRjrQlQHPO9PltMA6%2Fw4zxXe%2B6LIMcJ%2BvXx7%2F%2BTmTHHaXIoQ1NzSPiHzAUgXa5VeAxoQUHqGIUx2egkx9tJHFjLY3tTQ0coXR2jjHSsrEne1e%2FnE1pDpeG64MKymOK3lam59%2FKGGjbwl%2B%2FNQgP%2BqsJBiWl5ZOcd9XvTCu29k0PCbqFKA%2F247D3NapNQPbVdHTZbhljpDcytfl3uRN%2BKJ6B0mGcNujvjaKbFf98Hi9cZYx9iNmmd1SSZVkXpr8wIinW1qJRymB1TeTIuC5%2F6G10DTnJdyEcLos8L0bbUHnmPC6e2MAvhGCv5qtJ85R6qZ0CD4rJwVUHAKcj%2FsfYxp5AA%2FKZJCfs559O1IGSt5JvG1xwkbeIg3GLfsTBFFL4dMMKqMyMkGOqUB8gWyBPv0jNWYm0FVhQ7dqj5ubMJWsQlHArrUePpIP7cXhUH5jkgo%2FxJJK3znnIIeQ6JkKwnG%2FRifDJbnX3nIsRfsF3B%2BGXRVHrAridSx7gKQ0Rwl2ogQP%2FbDUw0CReBaQ7Lglh4%2F7J5Zc8fqIxLn65sJNz%2B4owKYrfGs2U6Tgvjbavwc756LMdrb5DL%2BgB%2FGvRjCFib1yWBqaEhP94FhgFzkQt7Y&X-Amz-Signature=f32b4dcf6008e9e2798784f71164032d8db7943f1731f19606f524f0b9f94d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

