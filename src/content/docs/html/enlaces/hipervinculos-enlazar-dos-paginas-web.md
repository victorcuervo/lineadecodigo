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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGPO6NE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDGgEPCq602yljTsqKnjBSyCV4F%2Btcz0AgshZ9USJpcVwIgRurJn16Y1AJvCnS1K6U5ZDbvHElWJfnt8fgZAjWTNQkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF9R5t2%2FGmwziSIyYSrcA4t%2BHs7waIA1WdZCeLjrPp6BF9OBhicvBz6yFLyrpXhQzH4SXbxDpDecXF37wnYcOYr1JfltNSQZ1us8fowWzDb4I2yOjKmqYvhxiDDEv7AmjHJQnVgORbrqXg1CIDUprjBko0sBBfWm8uOttojbbsj3sxZZOaoo1VtiyTDmeR%2Btx5PtQq%2F6250Imjx6M5%2FvZNiHBYA5UL%2FPVi8SmdoD3mIilD89eTyzoHlDT0RehdJQs0YJT9MtBxi46sgJZGP59U8jGaFdvojbL7ubwRpdwatBwNi5n8n3L9TUynyEuV2x8cgZyfXEMwz9m%2FK2pRbfEVH9aQNIQr9wyw3H1Mhd9S36jKyVxaJDEBP6OAc%2Fr0MaE%2BodfhdAMLMBEcsQBtL05eMECuTkIXRbhtOZLl%2F26RV7kPvnAUamYVQY2UG0wDKHNdZwz5MxpWLpXLkKX%2FK5D1aqITtxmb2Jg5KmKAbK0bAjx3gP0DwrdrQm3jRaikpeZBMQ77589bn4NAB40NKJiHjUG0HWZCNf8Eb50JH0ugVAAA7vCPlto90kGieQK%2BXDeEF8y%2FCOPXDmzo5BI1YmSYx2hDcgEDuQAmF%2FwBYuMxp64Qfgg8mvPjCSWCa%2B9SXUKDe6Tsk%2FQMh19wYMMMO%2BxskGOqUBrH5H7wHJ8%2Fs%2FCLnYLEzuqey2JVDlldFJITfFrB7lvVFS6c3T1QxUdeHg9Mh6dF4zAq3rUYHXMoNXUWcKeYh90tn7GEv6wHWlyTm%2F%2FwhJMliHGEbPAea2I8JmMWU4nN2w4FUISICcA0c3NNL6J4szqDe6Z0o9emveT7W1HzlUTZjctfxdPcVKwTfNd1hyV6iO1WMs2O4kDyXO6UUZaZe1fqLAMEAA&X-Amz-Signature=24982be0486f686eaa4c91deebd614996d68c81bbeda54fb5efc97ee42fc548e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

