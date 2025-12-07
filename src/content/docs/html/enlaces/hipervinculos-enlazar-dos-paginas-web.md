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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N5TSNL2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpVQpZNOJU0hFw3lGpxSpm%2FCUsidn%2F2G0pw1ePvcpRbAiEAhGfnJ9YyNMh4%2F7sONynZSXd0OWAv%2FbeqFWYZrJI77KoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiLmmlHYAsgIilIQCrcA5XJHjPsECek6avP5sXGnXOTwB4OfAk9dewPyPm1TRmwqhx%2BXJVzBo%2B11eOVqgXipsz%2BiJ%2FmuWG%2FrsqlmygyLKt%2BC72mfXXh3vyIgb13Mq%2B5MkX2MVHQVRiaxFX2A7KzgBtek%2BADqL8kTWecHD1lV4tmv3Qv0%2FEijgR%2ByI3DiXWPCbEJmug6omAE40lQrNz5S9sJHneDqPAD%2B0D2EcixGzzbnmz2GB3D%2B7xlGAIpf12%2FdLBDxA1d4GrUYzXCOvYgkfT6Rym6%2BpOxRxdomB%2BfYmLU9jTAbHqtXdcspgxmcIFLpPUKjhepXP8pfJaP4SqMcFr%2BLJvj%2B1zKcJXHJ1UMWY5BNQ29MuqUI1gS1ajzPU1f6atQrCg3G%2Fr8a3NL5QjlP3KXLYTNOIZv9WpGddss17O1zZo9WV4FE6KL1IGFrZ0FZFcSsnHVr6cKi%2BIjF3olfpgEtcP6liSnsBruN9Xakjx5DDwVhREpzLFS6nnCOea5sRZYlstT0V%2BgDlfgx3YnK0CaLx5tIMjqPs50vaoW%2Fyw4jIQ458fb%2FbjZB6Moc7119NMBQUL2DyXqtCCtNEVA7CnB1buX1Gc0VLNZp78kEhIeriKHQdfbYbMW3SbXyxnIp43%2BXgjmi3KNnlf6MOua1ckGOqUBZxVA8qci1JUMZfJ5F72IVm%2BoHOvzbtvYf4ef%2BFKhlM7A3WJS3J%2FqTAYBaFJ7doTS4mi0pcEwKYsYj7sbTPw4qlt1vHFDUwouKYpJJXcBzmdTPMFRde5B2tvExkWe4a989WT9R8RaKDqG0N6kolzVNPsids08Rnq5zIWOiJ1sjOOxtuK5ZEblrFfhMaon9Xe43j%2FOdDauZIaR5NJeg8S%2BSqElQ4M7&X-Amz-Signature=4b6faffb2839a3796a5faff928f758aa3a3ebed72e26a66e1f3a515dde22adea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

