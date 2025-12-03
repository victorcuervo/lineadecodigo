---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYVYRFQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHXOo2GvbFedsqFaEULBNNAfRPqMN99KdY6D%2BQ3DAnf8AiEAsfjghWTif%2B4gPZ8zYV0cXuGuUKpnswhJMP%2BcdXe5WjIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGwkCTU%2FdcYcQ4oBcCrcA4jdhGOWH3AXVNiyCrAzSGFT%2F3rKsjg85HP0hU07FCLTVx6x8EQmZKqEJ7eWgS1KTXqyBnRAN%2B%2BMZmDLkMZlyZx043UfTGxTKMv3U0UrXJI7ULtGN8cQJegdtmnxM2xLd%2F8NSuVTThDyl1IcymAJwYD3k70tc7o%2FvhwuJyMhE8Id90pQHARtkOWA22MfBTj91oFI3IT5ld1Sf%2Bdnidku8vwrCbr7h%2FW07V8qKbELy0Av8h%2FZtUxspXoRwM8zh9aKDININ8552IPWNLWtC4qCB414LGxfMTSaU3Ar6fBI028BaJ2hyZO9X3YghP1fAwkFTvDf0FF4xT6EPqMleITEmQVgrGQ%2Bmcl3vKbbMI3m5haP7d2eLN5A4yTdR3XPnB4B18dI%2BFGynck1o5Z9KXOQxrOsSSxvDkkqKVMqmf44DmhVHaYjbBXkEBYszdOEJqC2KPpR33BQq0oVsk47x41fsJApP5yiYK4w5bXQ2NjbpPg9HSSg8WkRi%2FQRs%2FEkKBvhip7LBfle3AO6rZboOuVKc7R7XcH0hYjvjvWj7R4ibMqZrd%2By5jzhv8bErXdn7B2tafyDZQBI7h6IY3laxJRAqa7dQd5SFxtlvYOvH4XlCyyOJnI0GTA%2BpyeZwkp7MJ7dwskGOqUBSyd9jLGbRwu4OLhhHzlrnLjhnZzjUVED3a8wb2UsETlscjpWu2iIc%2BibN2i7HN%2BvZwxMGKtR43MyYRSuYWP73thTJQO%2BM8xUJeC8JZM9hdzq640vR3qPNpcthKwQQbrmOo51WeseEmypuTjtOp5T56uxz7Ln2OVMy7BwM2YdKpgHrMl4EZ6tyr6%2BHR%2F2mQyCeD%2B57TFpNHtlnJ%2BEaZKHWGwrJAzI&X-Amz-Signature=8f4b72d0f2b0f451c499d359cf25cbcba90d4858c5f8360f6f2f998751f5f87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

