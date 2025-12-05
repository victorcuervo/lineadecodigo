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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZRS3KLO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLTGroiJ%2B4oUwj%2BCdF0x6y51gPPwp63J%2BjMSX%2Bl7UVPwIhAMYtb38reU0hAqdy0Dw7wMlFnu8y%2BHWuOoTgwcPdvVfoKv8DCFUQABoMNjM3NDIzMTgzODA1IgzS8kbqjemgZ1qfEWUq3AOdwyf6jXTlRXRAN7pBqqM3JlgZj7ikwShLxydV2QgRtXPo2gWbkOZFwtyKWHa4dXajTXB4%2BKzmCGnol32ZzjEdCPNSR4RPn%2BBnX5A25bBYGy6Hxl2Qdzk2zJgktMEzoeLRqG4XJdsFOC6GCb5McyOo0erjHHxKuA6vHtq%2BmZNU2FPqbxwDmAOSrGpP2b%2F95nrppioEEzRArorbVb5HwGZLRYSuYvrqo0exfZgUP6pI85EbGti%2Fx2yGiThNLkwllEGc3L7BKngVphaZM5XY8UjHjAf45qdHqtfxYxZQEP2SdfckdxsnfrNCJNVm7QfpqU0KQBtlqs3zbBcaAykOptMbhHWSTxv0LaD5l7TKsxou0sdcGDvHdUYHQEK%2FhxNMzApIhJCtj5saJcBSMyKSP5FMuD2cGwi%2FvKQWQrpsohorkvSVQXElbwogfkVsU7TGyTNJB3Z2vsac7kBIE%2F5Ld91QYHN6VacnXBX%2FXJru3WehhiDGOoOQGo2gFWpBpMrdu1GfI7R7Hw3Oktn2lO8jZqkkbGn9o7fjWyois%2BScmhOgDsJO1mOLFseE%2FFo8zV3b2KGxF48%2B5O0moLhJsFplG7%2BC9RM9gmn1bnVICFIL43bBnAuycINKdZgtVTcTUjCxp8nJBjqkAf4vNEOEokK83Lrvfn%2Fyxldq6NXmYIrkeUjqv2KM2ZBLiGD22gsF%2Bk0LHPvVUx7K9k3ZLDsnRXYPWrr0eJ3EpXgYFSkISNNaZmdDKTf0QfeFJ1PGWqudox20tYpvISnptyP%2FJ1uxLHVR%2FV4m4Dw1wFW3oMZrnCEdu05Tz2JKSGUnrwEYI9IWzr5YAK1I%2FS5%2BGsewPQIamuT1qphnSa3VmQ8i3wf9&X-Amz-Signature=9e6e5d0b66c83c6ed43fb969f813af49de34120657234f457151bac660e0bc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

