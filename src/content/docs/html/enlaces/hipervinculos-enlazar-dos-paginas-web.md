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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FUKDXL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBV4zHvy6uOI8i4tcX5jmpWx5%2BA4LLD3J0cW1nmYfjnSAiEAjOx5QkeSl1TI6QOuDgRPZYFrwjn4%2FE82c01tAwLTIFAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMelm29TxIO%2BYw9ZuyrcA9BWxX4fX2eY9dQHUbn75RfWzDpTFcXLIPRa7GRiqdutGzPxuR0dgnnLcqNrVC20xfjGHCp8xOxJ3kqKUpq8pc1cHuxp%2BYzDjNlPHEZmQFy46Va0tju%2BGwfmXGiUG7HouLd7MwmI2iTpsrLQE44qdN6YbPOAHPSgybtlpbKYpKjRbgHUkZoJ7grMmMhwPj8K2pLBqw%2F%2FE4amrlBLPJqKpPHUJkmW%2FrAyuZyrMPy3XLLVai6tPGx28cNM3JLyjwM3ULij2j4jOK83zzEZD2ZG1lOxJqzfZt9Nib4d2su9urDBpFpdchQQcM2X2v81BYpy3WWNqolcvFRhrBfsfcJrzUykGQ2RwUeuATDJYrkI3BOa7xF%2B6ACZi8qpFGe0g7DliFMUZjF6FoIK%2Fr1VZZww%2BinRVdZzdQvqLb8iUUIVzy2zYRmjJrxR8uNpbpORMUKECGkTKToAIDPZXPQxnE%2F3ZAm32u4hn5qkBTNYhnViaIe3fYSaABUtD31JIkB7KaoyOl16xz%2FphQFbELEUdgd7Scu2bY2VzZLRO%2FmUcRyUDL0pIIg7blxJMudaqcDH1LcjBcOE%2BgZpWzUKml1gK5JF0WkgMpKqUzjkaiU7DG54oBtWupM3HwQhoLoCs7DvMKGm0MkGOqUB0xc9W9TFdqz2eiGLyQA2%2B%2BkAI9ocB8EX89kEvC5U2XAwQocisnHTba%2F4OzUtoDaRHrn8wHyyetOip6vAfa%2BRueWUFkFMJ0tTXGKBq8bHBfUlpEtcfpV1wnz36cZFQwXjLa98bN0kDL7TFruifTmCU5EZ8qmOIgO1Zc51S1uT1sQpw4zp61Ru5a1GAGOH2X4oaxW8gUMtNl4iqXgNQR4l%2FnKhdD4f&X-Amz-Signature=d0a8876ecc67f52310a71c21dd8e6630a6bfc09aeff091eadd5c9617e6fa280c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

