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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX53WFZK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBG1zX%2F82aqJgJTDzCsq6kT1TSRIkbWjfnVTgOOnaEwbAiEA%2F4GkGwTX7rBJjZzFRa%2FQ%2Fw1%2FtcLpcy%2FRnDPokRPJb5sqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5F6%2FzZ84j6ZvvmMCrcA9eStWiEy1j8EYdqitWmN7G7vBQ27laYf84gzRO1xOPX4c6vcDfn36M%2BGz2GOtSVdLF8waVPrARfjTJWHWo5OReAS6XkNOsLcR2HO4vQ253G5gz0COHbB9g7pie%2FtnNpXtSZjXs57zIeRsu2I3wCfy789B%2FH2BZB6o8I8tN0NwCy5U6JE9nKWCuKszTtbguGjtUzuBHGB%2B0mbB8xCLo4rygJb5AZrFLBFrp9ym2E26guyrEP69XA%2Fhw%2FsflK5wSHk1mIMOdOhoBzdHlt5lzMnqjh3SmS9RBK03wzl8ovWEbhdcCkGBfM%2BqRL9VROdiFS%2FfTZoCFMh33iZKROCL4k4oE7Fplbg2%2BA%2FTP%2BfR3HNKZtJCAYONsrWVHMWXPprjbvWI0cbVIzraukbPKuUbSi1doC0YPYoo8aaTZIewv8z2nArn7gP%2FQd5Fhd4QjyJVBpP%2Fk2mbHHFAaQM77mJjQKUaxkifGBpngFvcBbb3C5bFOP30QSPgWkT5GEH6v94fkiroIP6nzK9jd9eKAYaY2atfiVh9Xf3AvX6zPXY6iToKyXWT7pUmLKqCw8kLCz0Ds1A3xcjahlWwuECApxhSu5YA1BqtUNyQXYkDAzcEWiNmQRfLSkYVSxR7ntj874MIKF2MkGOqUBXanIj8a1wbYlRp3BRhV6zjoxJTNz%2FKFspy9%2Fo6vsL4ltSeYPGUTySy14mJOd%2B3eFOWZDNltFwrFFSrbp%2Bl5dPMJ2huaM8PeGOvt4Ye9vRbSF2e9Bmc70ZKRbGqU%2BfaWd%2B2hPYqI87MqdIo0XEp9I%2BXrgDhF4OnhMGb%2FDOAJAJStkYvH8WnZ3aI0DZPrR4iQQ2Va1lrfrF9HdlVs7GZDH36C%2FCDYb&X-Amz-Signature=9061636781b96d7db220de2fc9b7d3977d1d36a76c43a71bc3f111005f23c306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

