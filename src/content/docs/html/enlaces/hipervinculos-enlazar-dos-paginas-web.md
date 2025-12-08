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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMXC6YZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxCQMSH2k2zG3SN%2BpLfTrp8kgmK1oJRiFTgjq3KjjQRAiBTK1d2UuiKyba7SoHBYNS3K4%2FV6dxbxy%2FDsO%2Fgv9%2F2siqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2B5dQ6H8RO0ZwHUdKtwDsvu8bqYShekMuP2WDtX5DjoPlRI5bIEWv8Cb11rKGx2sVf5cuqX4IEb8WFRv3P3kFaGB5XtdDMZF9dBCwcBZ14rB4G8CAbSmHqvaL6Yx5C%2FGjbLxDeslz1CtauA9cm5Cnq6ocdt9VxQsSlafdQ%2B6d5aISVVJ0DDRxJ1VDt9UAddl%2Bhc9q2Wfn0%2BcKNvInMGEdG6eHnZ1Qt3mTQEHJ9%2BRMc33D4iloGEJGpOOIT5eu%2FNb%2Bria4mzeE6j06O6SYIbWVH%2F%2B%2B7%2BmzV8yQL6XOLq01HxskDS4weLTUuJ%2BfHvaX%2BCQKhyIXf5W87hfSccZa%2BTE7f%2B4zNSjFYG6dwd8OnM%2B%2FPCca8Mcb7OI2m9xoQf58OrM3OIj2%2BBgXDHWefbQKP%2FjcALg%2B8WijR9HnrnIM9tlvrbHi5Y0hF1mu77zFrKhOYy1yDgTj2u2Dqx1VzXG0QGgCHX9uo%2BsH6mBKGT%2FSEpxMMnvq8%2BEO5pgFaUAC%2FTeTVvnhLIgqyiMUzADj6xza9N91HMXwbSxi3Xdz8P6WMnSwQ%2F9gsP1hN3GyeVCB%2F1k2vk46n7BYobZDodXPG%2FZUaLbYVF6h8eOJv1zTQdig43Z8cqLRBGLbA2l1tu4E4xCp%2FqX0LMpixh70GTvKSEw1tDZyQY6pgHrZIqFNKQnuqCwWFHs1BGg85sH0bBKUcleVXvfDjnQYptXUPUINJISCzHXThPYweE3H2lz7uwLuW1cTXoXkb6kKJEKGUDvokLiPNSw%2F4xCcWk9Qn%2F6hocvHHUuNEYHdlfkEp3KBOswrJAZS%2FwA7CIYEZ5KeQFCBTh4i%2BVVjKrKXBeNNWc7jR1w5JBWdnIz3qJF3DquarLaO9G1eoIYrPgY%2FdSq8q2n&X-Amz-Signature=8e2392da6130527ace35aa6632c2ac3c202e8c67e24ce8e9237cfdbf072d5808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

