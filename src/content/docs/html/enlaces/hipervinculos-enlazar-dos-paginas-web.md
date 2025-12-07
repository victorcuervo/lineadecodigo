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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVSXCHK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrgnhsH1Ny8QDihiijQQXChcqO4a2BK259%2FwaLo%2Bg5IAiEAzzZYcGU2fxX8NpagcqwXetf0V%2FCLl6CyNUuFK%2B8BbSsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMFSM5A7oKkk%2FudJSrcA%2FTpJqSWwPG4y0ppdcFlMbVjm8OXwonObUh0j6mKHWsy5iyrbbUB6eknrCojNrLY5zXZm5uoaHg%2Bj6IlOtHm599yOqH7QBWhcAPvJd1sEGjffz1UdI6tlX8eNjpuFHT1WZOTrCnfXoUvDA4epCTI1CWFEvdU0u4xroNbkI%2BiEKlYQN6O%2FxYyn8C2DJ0rWd6U8SFU2cIZOhnUklz8M6JURtMf0Gx3ibNtHRXHGevV6ZrB4oKb1p%2FuQsvhfv8FgYJ0eRu2if3i9nPNO6Z%2Fc97uMkhSiv7%2B%2Bwh6bt9rk0DDx4SiOA8K6YNiyFw8GbOuXkOdIfozP4ceXL3EXUZLUjEb1QgCC7tlHJs2aBCU32BbeDArAPD6l9ZQus1xEqqoofnQWr18pUFOaqZZINn48xEFA785X1lx%2FwED%2BUdl5gAOWx8nwTsi%2ByTFppyhaSzV8y27%2Bj8ODKImT81njRkVRiMD9HReJ3T25zNGKGIyeXbx6gzB5Qd65iiLo7IdhtPaY%2F95HliaLmp8QyDLFUwZ%2FBiR5H0OpUBYTCAOiUzARs0b24wHyeFPEQWJw2UjN3yhd9bXyusl9g6IeXBmpH6%2FuUoM0Rhsdsq7%2FlJMiXKdP0S%2BFlXpwm%2Bnt8AwHbH%2FyGRLMO6%2F1skGOqUBT%2F916kDZ%2FjDYVg2zj0QwPOVycIsmMHDKWUoYqv%2F8r5jpZll%2BnwMOMsLC3c1unGWeOtNG%2FcJAwpVpdT1sdQbFDGonuLsMjN8yFrqqTv9fMf48tVmd%2BkxTXQ0tjfbuEBEbQD5E2Lz%2FnNmmcLyGs9rk%2F3WkzvUajWi61cLpYzfO5zh21jsbEOAxYOI7VVl4wVZJMopUmfb3Lz6XrXmZiPhmafzBSEob&X-Amz-Signature=9219b8a21a45e12efbcd9eb9aceeec486ebfd2be266c1e96e44eee08c7196e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

