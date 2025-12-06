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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT7O26M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID59FdOZrE1KHWj5OSk5MUNErsbs0K0XBV%2FwLU%2FWW%2BJpAiAy37nmf70dPiTmEGWckN7d7Fr4zD680qflFWBiFQZuHSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMMFXSAlGOmnjdz2rbKtwDCmLw%2Fi2Km0%2Br4YJ3vGR%2BBxNi%2F8qWz8LG%2FpH%2FMjGrv5C5gdi8Of0vXfVaxcA0KDpyNTGPqL5wAM4qZTkXAZo6VmEapIRFBDMJ7opw4ERAis4rHyNQ8ELxwLEG6SqGFbl42yjfO8YHidOfFBwcMTj3yOKKSnI2xc%2BCrXcr97AGSbu34VVms9a5SaBq6PdlR5TJD9Yn%2BOShj34XhhUn%2FrSRz0CKLtbRKB30udjANnlXkOJiM44VhkW4MkQ9PtA5246EWVLetv6W%2FSUm0cqnggKd7izGY2LWUiX90DIyOwou3xIxxYM76DOmesX2Nx9yX2DGNkFtyQbX%2FytpMcfUBIXjs0nEYz3m2OX%2BLG6h5buijyRCzS6NBg6d1TGcn97AQcuUu1T7r6kD2U0IUD%2ByVEOtMBEbBl4bvL8eQ4m9EC91WWPH7nBVB4swyXY%2Fl8he2QxT19WlDND7OsmHyesCIWHPY0Ay0hTceO6FCoZzcnLY6L7k%2FG19QtITLQK%2BRal5TBDtem5JMqe8UTNmbA6AnxMFSIC3tUM9lXEX2Cy7vXczqdUAYkf%2B4sm8mMRI6VXdwxTk8ZEZNABOTKiOZnuYh4YhBEY6%2FUAwPs4IPGXjyBezDYAoYm6XSvgJ%2FchOXV0w1ejNyQY6pgHgcPI6h%2BFjXkC34lrJEXQtrumO1kLtnN3HUw1MD6Yumsm4qHJolAV71G2HKGmrkwq3yrllqSaZ2AqRtH8Ntu8Nz8zXD7WPE%2B0bVXzfA811eGtwtPSlZu3NwwyoslubLRExUmoFDV5BahSNqKIpdZGeIBjEtKn0uiFrVQhMS1%2FIE5FEvFRcj08YghR8kcSD6fpANdS7ttTCrSQALPoatEw7J2xCPBi4&X-Amz-Signature=f1da5f11fb7f72a6fc89b34ae96dc17a92d5cbd0550c3749569aeeb31b326417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

