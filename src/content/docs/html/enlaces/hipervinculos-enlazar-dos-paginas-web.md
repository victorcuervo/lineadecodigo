---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJ2HXEM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN3reY6wPm9k%2BxBUNrEFO5RoMfeshm6dMxKd1KtACe9QIgBrn7JIIvuMprdei9QGL8ur0Ju8z0eY%2FpCDZTbj4ky3oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0nrw%2BWfTtEYuhVNSrcA%2BUB3fy1Fn7povo%2F%2FU%2FPMhu35GbmSZ2gLGUhIMZS6kPCy5%2FD1JhJTBXLYmZ8YK6N6eToNKsfBqz9Jar0X8HEJsyIR3kHYzeLfA2tm0r0%2Bx56nV0Y29ElAxOBICcJxL7xbQmIwtuxkSUfxtd4AlPBn3oyJUY%2BpTPgOkKHmTYYbZu%2BUFtvdK82IheMp3yv5Eguu%2FPKuoR%2B9uobtkXIgzhnLhqd7pOkkBS0VQ%2FjNvvUKwj5cv5rspYW9kSEVX8Mgl1ez7vR4PiExVKCLC0Dg%2BG09apZgJQJnjuzM6UNYwz4VizDpOkTN2%2BMVScFOZBWdTJXbIHRHij9YW5U3ENMWAHnubm6d2Ewk65ghUaCeK6bR%2FOjd2hMVC83%2Fkkq4QVHFmt4sj3zDVjKkQccHHLIcawsJpYyP7cwxGnBS07hGTLo61Iof%2BZbZJVHgtVRdvx7WOi7CClxMg87l3ooNyeQDZ2Sb8Ql2gSUfv%2FkqJ6zcEND5B2r3zcjU5kPcGsoqK7Aa%2FJlK2m%2BIc5NBsUErOtQcEccDZuTzCyvfFfC%2BYnxY2xs1R0%2BPhBp05W6LkZBcO3An2E1QY%2F7piwP3u2Xwg9Y2cqQ7EUBAbW8Za1p6oxcThvN8fBMyVLYKszi1N2T%2B%2BTDMLmY4ckGOqUBS6wRJxsSucF7c76O55I%2FNYVgiNrJThyhDMrrf5uyb6HxcTn%2FIO%2BzNnG%2BgB%2B9kvOm%2Feevz4NcOABuCEHdP53lZgamX07EqIY9ImqQeiRD9s%2FpGQsjyaUZtsgeq09uvSlyxUg3jxrod2WFcWoeRUb%2BaSKxu7x8OViU6NM5mP2ephHVlkP9445zAG2nEcNbSdS4GXqMla8GcC%2FPZBuqIXF3Sv2GtYj6&X-Amz-Signature=f6304f88867aa321e636d7089d7a807e4b9f71d8e4e98c5cf3bcbdd72ec2db84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

