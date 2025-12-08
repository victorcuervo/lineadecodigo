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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNG2DA4O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfKXsJl%2BtDsvj34aTsgk5PrxY%2BJzLHG6X1VwLknJABzwIhALY1vXPlSYRCN2jNVl68h0ENAI9k12XnGXriPz0bxlW5KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2ziW1OJrvfyPBZ%2B8q3AOCV48e4382275SnepuAnRzjANrk9dO%2FaVVyRESgt9qd%2F4JkSS24rzaH2eS1GQfwhWoF2VWYCecUp8dHtD7Rbo5Ie2yLRvt7%2BGriBiysAqwoJic2YUe3YVcK3zegre2kJnajrCuqbvDgEb1BJyGfwzKWf5z2ApAo52w%2BSI1jigv6nmBseiSkb4s%2F3CZ5Brli9QesjIjCfHspbK6MucmBi20zhTafkFbuui7Mv8m0UuYVYkUyl%2FQV8nOFHhU2%2FheUAn87B7BpIcmvJY3ixevZ3IDaYREtusxZDyubE2yMTR6rmoTBbmXEWvQk1sKM1cPzDmRjHhr1g%2F6GhLRCKnuaj6%2FHYO1G7oFpOvRAyw8u%2FpxA4Jq4vxdqO37qnV%2FFc%2FQpLIrzSKTh6xDZkfS6PdrBPiEE2sW%2F5CDjGFvNHF%2F8rzq4sVy0hdIinaSMlsS9qaKObJNHW18O6LITQwlB%2F5UdXDHQ83Tu5ffojQgQdjkt4t6wONQj10DK8ova4Fje60trjOxw80owDNXwKYJMMb99ZyrrAeKSXuYHvduoe7U%2F89HfZr37xwe%2FSS0deZju58GExsJgozGp34lVzgSSadheiEdcF9WPZQHlGMKj7ybtaK610DDVDAP4PKIIx9pdTCG89rJBjqkAQ7ahaN4hdiQv%2B7CgDTNI%2BU7ggYwhnAgDak11BJ0wTsGPnOz8xaQEZz8fZCEVH72OkKo909boewYj1ECtcg7B4SB2tG4JPd7ToaPavCB1AmffiAMy1lMwHWnbbE89o7YlOyPbJKLC7UDG4C4gFYBLW3VulD7xSUG45DwDgKB%2FP3q0gW26oe29KafrIwl%2F8XVm85X9ekLawXhaGlcA9SljFduCNgn&X-Amz-Signature=ea70b9823ad5b5739b63c44e41767280857f993616ee3e1a436e65f1bc0b8334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

