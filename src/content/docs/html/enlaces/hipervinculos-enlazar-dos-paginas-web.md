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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3C7WBB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC21LHLW1xauxW47PALb1oFQbVhu3t4NjY6aJmre8LXFAIgKthVYjQJSaakNhooldHhC1bCt4defoXnRJNxjfJs3VMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRedDrjuLN%2B04I%2FsircA%2BbXzHKHGF%2BjL8HGS4IAT1ZuFDniJIgzRIqpl3PNnTDL5OII%2BWjwFAquMlD67h2mfmgv4M89BecH9gcTrTXoTm3sg7r6cHun7J6S2H7dFiFqeMf7X1zmq8LRX2sxTddT8k5oG4g91YCvHhIqAp2Ol7FmuVPIPaESZH8HoLun9fFRNd0dmSLC5FWtd1UqY7ETJqEovQMoG9hhPU8SSjMMWao97eGii%2BABYkc1lgI8LLlNSiD2POQESouKmZIlhhAxR%2B3S%2BJquulbjXICTLlv6e00UY6tIJUioq6qjcZeRm6rpnNl84mw50yceoH%2F6E6k3rIx9xeFgYrYftqFOJA8KR3p3%2F5O90g41wzM4lAXs5JseHG5pMuJyicZCqnbtZWbRm3SRkM3w16xG3ACmZ9X%2FyLwU9rnAoWGdL5twr4HJcOC%2FbGH2K4Sr2qRPhFG4P0SvgYmTyXioqA6jqJlTVogbX2uFpBZStQSEEhxIMuYeMWjZ8U1pIosLlelSkXtyrh6%2BL6DIEmR6BrwclCe12IEbie2EjnB5WPYW6waW98UItz8SY6g96FlthAash71WTgjOkou6io6NqI%2F3N72sQC3%2FWJuPf61brlodfm9XqDaNLFT%2FgX3SKX%2FP8kwBxfiHMJWH3MkGOqUBQp557TSvXV%2Fgeb3PWOsCUW3fsUZ%2FM7LUTssvsnBQ1p%2BmWLry3celtE0EODne5Wxg4K7GUuDncIyrZuOsiqzbTToer%2BS9T5fRMUPGzO3ij8VRHRG7YNoSaqPumDmG1D%2BvcbfHcIZCiBmvabv5%2FEPz3NQlkVWYVZJ1e4VmuPt5D1YVRCv3cAtlD2RVw6E3G2VgDStrtx7V17RgML8slLVdj9uvzZ2V&X-Amz-Signature=93f948085faa97ddc3f54548df9c22c0c15e6cee0eb24ab10f4fad28f42bc39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

