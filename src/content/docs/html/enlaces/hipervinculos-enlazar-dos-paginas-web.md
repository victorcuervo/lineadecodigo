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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRFVEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwU7n4h8GB34dVME0gtExI9ELO4k0JVN66%2BmsvPhXTdwIgZy1fbW9NMZU%2Bzwt8iGtQV4gqShj1pbo6QpShlHsnNo8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBAxTFJaGxlyefdStSrcA3be%2FRl7ZdQd19IFf1NXqdtxNPL3%2FRpTJdGxUV5KKiSlF4mW1KXFYGwVorVWz07wQXJWjRfBqEE1xOT0KQOriJezqhJzUaPXolZsvCg6PLqEdX7cdLAE5N5LPKHaur7tdJAJUz%2B9wNLyWgFu7Nrk6tRY7lvLhYC8NiKbjJalgFsoW8l4%2BP72FB%2BkEExvvxtZA0ABNiJoHF%2B5ij38DK%2FVMp7f0P8MTmup1CVcOAEdCq0BNXLfHOTlxcoXjjTUxFlNu3VnZVw8ZfI7CC9YCWVfAO5yR6%2Fu5t8T%2BP8Xz4Q4Rqpr7m%2FF%2BBdR9sb%2FxufMsueL0wj%2BWu0g1y1rj6YUX0ARHFcCZv%2BrWhFglT2rHOBpS6fdXdRrjYTFCeyMf%2FfynBEc%2BeCm7UXl6Rj3YG4L4IzFOaLbmQhCQFYQqDEsqQ3vG%2FrY0j8Z90h9640TqALx7Ulehlq45t3x9bZNOjDRcVvNRF0PCHX6vE2cYcXnOG8oKXL2kwbTqOzDfllHFXy3vDk8zZgtr4HVRiAARDgrpTBBayx5jnyeIkC6puf64YKbIE0yWSTH9FMZ9%2F5fOHU9IjRwyLaeCpAVPO6GeB9qe05sQ0eRNW%2B2710iJlMCUSGXKiaUjxYwrXwURjpvWW3SMLXF0ckGOqUBYEuh5OsvCAelry7KXF2ZtX8BcEP%2Fki%2Fjv5Vz%2BbDH7FuXAr9TfHWSl0qJsGXoVfwdichpTfhQ%2FeYDY4NCwrIpVocoew1pYSmhX6H8g4v404RmmyrDHC3zKdvLqdRlTVbxdojXsBszggQujFI4tPss4dIvx2y2seaTjpqlX2Nn3JDNUnCKNo43qwfNSBGN5M8jj4rCvVcOUTZVU9hbW%2BynnMDcqT2p&X-Amz-Signature=7320416c77986a36ddb722bb5ee341e23af2409b8035dbeae471c1af3d42e638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

