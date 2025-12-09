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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MN2YTOH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUThgZvjcwSMDrTELwRbhKsdaTVq7AR6Jd50frqGJGKAIhAP9jKPwVBlCEAJisCUOkUDmIm6DZzfhFc%2FrjHXdk%2Be4pKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKsdLPE7ktzRSKwW0q3AN5UVRe5f7GkgxCYsKq3UkNdryZZfHmm1J7i4Iyc%2BX8E50wQTthkfLhkfkLFjPhTOlZfvl9LGG%2FPdZbDz4bCB1rs%2FJsx2zIyBsW03ApyBQpLp8jPKPIzwe9Idi%2FjhGEE2bPcXsiC3XlzbjrpvfOo8wDqLXw73aNvm0MvIQ6IYviPgl%2BkS4Udqqsp90XW98sNhducm8VbISRoLbK103BuKlpb8D%2BbmULjfo2Bs4JKmJ97m4Y41EwMa%2FQ5s56OETEMZsE7Mplo3iodwmCPbOuGFfYcMCB6gRSfZu7mdm334KkM1xQ%2F%2F2WHmOfrqNPjivHGUDupyBASFGe3YeB6sY6X1W9a6KNBi2QLUZ01ESOXyYVS3ItrAQ8r82DEs14ykHZwPUHr5NNQf%2B6K7LfKLp1sQvrz2sQdQfdNARnbvQuMaZJ5ng8iCt25dBCW2aoTQl71qeS3AYUQ0dZlGJypYqQzpNmzvgsaTWH5MPnEf7Vt8PZq28uv1FQWuvAdaz3DSxKKzENdWzJnprrMSJW9HFLf%2FqTGVqYX29SW5ikUE5YmOg5HHI4bze4UHVkyfMHRUWoTQ%2BLbViEXnVa1CJ8iTHJzFwokCWY%2FXjX20wkB%2BIK6l48oOsjqe5BVasyYwIt%2BzDDn%2BLJBjqkAeui4RQTDCqgsh5Pa5c5a%2FfVsfgv6nuph0TYyj2iYtEyC3Fvh2f9U4gY2MiP4Un%2BJRiPJxypPkqS4yRITdyGhBxo9bPhjv5S2BZzaiOuUMF0AD%2BoH8S6I34eC7AOpvZzG9Ulyt08ky%2Fb4iMTQVeVLOUE7lsWFAAQ1PzlRkXatAaNZfWN14nPMKxiVjDx0wa%2F4ehRlSwMi9Lj5t3NhCKkZGPOSMZq&X-Amz-Signature=493121ba64022335860e07ccacbb1d109b794c03320e0c5c5b3e34f8c906e05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

