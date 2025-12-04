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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSYVC2PY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGl4yNacZpeue6NP7wxgWppqZutY7B0XSd5HSqiBQinFAiBkJbza7TQMd%2Bo%2B9N%2FPFWmfrhXK72vWxbMWf9RJ7Wb%2BySr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMPt6qS0KlBX9VOLi%2BKtwDfiTZb8sm9Qwjp18%2FL9SSUsHkfZJyO8PyXWR9DiYGm1bb3ipTPpf4pyKUOlCPDkXPY65hHpfRYo9MeBjQR%2FR6Qd0aluOVBYzp9pPyuLcB0kxdF2u5OfzhN27%2FFAVHeHiTmx77ilJVrFmVYN7z1vxY%2FsEOQoXnVidNXhJwGx2M%2BNGzZNQLWyk%2BIELEpvg2Mz1gAaOZw975OeKKauQfAjW%2F27Aa0mIDk3KuBRXh2t9nF1HttWVgsIJLkzSYRtFjAWFFbYOUA%2FM3YnS7Fzv2cZn3MidPGOnC%2FvOctW7f6zH0C1gZHCuqVaRtYQ7U6JzLA5MJ4dv5BYWPiuP%2BOotreR4PaUpvDJfnOeaOUlWxP5fzsxtd8YLd1HryiziiAoP0ZapBB9qFVl2pwZOCHYpiyBdFlQAJPhJj3khvI4PW2n2BmDP6k5ucEov0d%2FoUcnT5Nq%2BKfL4P4EUPeYZcm2oCLJaHVzMLhS0H7k34t8c6iomlbwUPLxajGSYEUa7o1POV6jGOYa83QODSU9KI4oFtC3bQ2GRMQy6BdkxIfFfRGWDR%2BMeYCHDlPd5Tv5sOkCywr5PcWFaOiSR2cs2rgoe4II4ewE4otUvVrsOGUHGH3BoyEoeGWSFCeOYMSeOkqlkwjdTDyQY6pgEg9VGcZPKWQT66dR7yY9QV5DiOldwIGZIuD5RrPyYkhGsm5zujddQ%2Bd4rFlc8XYsN3Np1%2FWqHt412tLHMTjJVH686XzGWOVRF%2BVpfQFLWoJQpdNoSqUV4yQvd%2FiUI7Ha4isyGQ9whMQepZyREbL4B7QyOYs2GBPGKX5x%2FZS0s1wew2rhEmjST9yrj0kSsInRVwdv2KQteSxZachg%2Byma8PM8HuPtzX&X-Amz-Signature=252354a881ff7346a631b1e2227d18b8fd52f86a495d76fd1bf777e23d2b88f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

